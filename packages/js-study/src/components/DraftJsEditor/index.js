import React, { Component } from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react';
import {
  convertFromRaw,
  convertToRaw,
  CompositeDecorator,
  DefaultDraftBlockRenderMap,
  ContentState,
  Editor,
  EditorState,
  Entity,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  Modifier,
  SelectionState,
  convertFromHTML
} from 'draft-js';
import {
  // toggleCustomInlineStyle,
  getCustomStyleMap
  // getSelectionCustomInlineStyle,
} from 'draftjs-utils'
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import { demoTxt, demoHtmlTxt } from './demo.js';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const RootWrapper = styled.div`
    width: 80vw;
    height: 95vh;
    border: 1px solid gray;
    overflow: auto;
`

const EditorWrapper = styled.div`
    width: 99.7%;
    height: 69.3%;
    border: 1px solid gray;
    overflow: auto;
`

const EditorTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: blue;
`

const EditorHeightLightTextWrapper = styled.div`
    display: inline;
    background-color: rgba(46, 204, 113,1.0);
    border-bottom: 5px solid rgba(235, 77, 75,1.0);
`

const colorStyleMap = {
  red: {
    color: 'rgba(255, 0, 0, 1.0)',
  },
  orange: {
    color: 'rgba(255, 127, 0, 1.0)',
  },
  yellow: {
    color: 'rgba(180, 180, 0, 1.0)',
  },
  green: {
    color: 'rgba(0, 180, 0, 1.0)',
  },
  blue: {
    color: 'rgba(0, 0, 255, 1.0)',
  },
  indigo: {
    color: 'rgba(75, 0, 130, 1.0)',
  },
  violet: {
    color: 'rgba(127, 0, 255, 1.0)',
  },
};

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 40,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  handle: {
    color: 'rgba(98, 177, 254, 1.0)',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
  hashtag: {
    color: 'rgba(95, 184, 138, 1.0)',
  },
  changed: {
    color: 'orange',
  },
  normal: {
    color: 'black',
  },
};

export default class DraftJsEditor extends Component {

  constructor(props) {
    super(props);
    this.compositeDecorator = new CompositeDecorator([
      // 恢复高亮的被替换后的文字的样式为普通样式
      {
        strategy: (contentBlock, callback, contentState) => {
          console.log('恢复替换高亮样式 => ', this.state.replaceTextOldValue)
          if (!this.state.replaceTextOldValue) return
          const HANDLE_REGEX = eval(`/${this.state.replaceTextOldValue.trim()}/g`);
          this.findWithRegex(HANDLE_REGEX, contentBlock, callback);
        },
        component: (props) => {
          return (
            <span
              style={styles.normal}
              data-offset-key={props.offsetKey}
            >
              {props.children}
            </span>
          );
        },
      },
      // 高亮样式
      {
        strategy: (contentBlock, callback, contentState) => {
          if (!this.state.searchBoxValue) return
          // console.log('compositeDecorator onSearchHandle val => ', this.state.searchBoxValue.trim())
          const HANDLE_REGEX = eval(`/${this.state.searchBoxValue.trim()}/g`);
          this.findWithRegex(HANDLE_REGEX, contentBlock, callback);
        },
        component: (props) => {
          return (
            <span
              style={styles.handle}
              data-offset-key={props.offsetKey}
            >
              {props.children}
            </span>
          );
        },
      },
      // 被替换后的文字的高亮样式
      {
        strategy: (contentBlock, callback, contentState) => {
          if (!this.state.replaceTextValue) return
          const HANDLE_REGEX = eval(`/${this.state.replaceTextValue.trim()}/g`);
          this.findWithRegex(HANDLE_REGEX, contentBlock, callback);
        },
        component: (props) => {
          return (
            <span
              style={styles.changed}
              data-offset-key={props.offsetKey}
            >
              {props.children}
            </span>
          );
        },
      },
      // // 普通文字样式：将旧的高亮内容替换成普通样式
      // {
      //   strategy: (contentBlock, callback, contentState) => {
      //     if (!this.state.searchBoxOldValue) return
      //     const HANDLE_REGEX = eval(`/${this.state.searchBoxOldValue.trim()}/g`);
      //     this.findWithRegex(HANDLE_REGEX, contentBlock, callback);
      //   },
      //   component: (props) => {
      //     return (
      //       <span
      //         style={styles.normal}
      //         data-offset-key={props.offsetKey}
      //       >
      //         {props.children}
      //       </span>
      //     );
      //   },
      // },
    ]);

    this.state = {
      editorRef: {},
      searchBoxValue: '',
      searchBoxOldValue: '',
      replaceTextValue: '',
      replaceTextOldValue: '',
      editorState: EditorState.createEmpty(this.compositeDecorator)
    }
  }


  findWithRegex = (regex, contentBlock, callback) => {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  }

  // 利用修改 editorSate 来实现主动让 decorator 的刷新
  refreshEditorDecorator = () => {
    // this.state.editorRef.forceUpdate()
    // 先设置未null
    this.setState({ editorState: this.changeDecorations(this.state.editorState, null) }, () => {
      // 再设置回原来的 decorator
      this.setState({ editorState: this.changeDecorations(this.state.editorState, this.compositeDecorator) })
    })
  }

  // 改变 editor 的 decorator
  changeDecorations = (editorState, _decorator) => {
    return EditorState.set(editorState, { decorator: _decorator });
  }

  // 设置普通文本内容
  setEditorText = txt => {
    const newContent = ContentState.createFromText(txt);
    const newState = EditorState.createWithContent(newContent);
    this.setState({ editorState: newState }, () => {
      this.refreshEditorDecorator();
    });
  }

  // 设置html 格式的文本内容
  setEditorHtmlText = htmlText => {
    const blocksFromHTML = convertFromHTML(htmlText);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    const newState = EditorState.createWithContent(
      state
      // decorator,
    )
    this.setState({ editorState: newState });
  }

  // 文本内容替换匹配
  replaceEditorText = (source, target, oldTxt) => {
    // let _oldTxt = this.state.editorState.getCurrentContent().getPlainText();
    console.log('替换前的内容：', oldTxt)
    let _oldTxtReplaced = oldTxt.replace(eval(`/${source}/g`), target);
    console.log('替换后的内容：', _oldTxtReplaced)
    this.setEditorText(_oldTxtReplaced);
  }

  onChangeSearch = val => {
    // 获取新值时，先记录下即将被改变的值，也就时旧的值，用于下次匹配高亮内容时，把已高亮的旧的文字样式还原
    this.setState({ searchBoxOldValue: this.state.searchBoxValue })

    this.setState({ searchBoxValue: val },
      () => {
        // this.state.editorRef.focus();
        // this.state.editorState = EditorState.redo(this.state.editorState);
        this.refreshEditorDecorator();
        console.log('getDecorator => ', this.state.editorState.getDecorator())
        console.log('onSearchHandle val => ', this.state.searchBoxValue)
      });
  }

  onSearchHandle = val => {
  }

  onChangeTextField = (event, val) => {
    this.setState({ replaceTextValue: val },()=>{
      this.refreshEditorDecorator();
    })
  }

  onReplaceClick = () => {
    let oldTxt = this.state.editorState.getCurrentContent().getPlainText();
    this.replaceEditorText(this.state.searchBoxValue.trim(), this.state.replaceTextValue, oldTxt);
  }

  onEditorChange = (editorState) => {
    this.setState({ replaceTextOldValue: this.state.replaceTextValue }); // 存储此次替换掉文字，用于高亮显示
    this.setState({ editorState })
  }

  render() {
    return (<RootWrapper>
      输入搜索内容，高亮匹配
      <SearchBox placeholder="Search" value={this.state.searchBoxValue} onChanged={this.onChangeSearch} onSearch={this.onSearchHandle} />
      <TextField label="替换内容" value={this.state.replaceTextValue} onChange={this.onChangeTextField} />
      <PrimaryButton text="替换" onClick={this.onReplaceClick} />
      <EditorTitle>富文本</EditorTitle>
      <EditorWrapper>
        <Editor ref={ref => this.state.editorRef = ref}
          style={{ width: '100%', height: '100px' }}
          editorState={this.state.editorState}
          onChange={this.onEditorChange}
          customStyleMap={getCustomStyleMap()}
          spellCheck={true}
        // handleKeyCommand={handleKeyCommand}
        // blockRendererFn={mediaBlockRenderer}
        // blockStyleFn={myBlockStyleFn}
        />
      </EditorWrapper>
    </RootWrapper>);
  }
}