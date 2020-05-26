import React from 'react'
// 引入编辑器组件
import {
    // convertFromRaw,
    // convertToRaw,
    CompositeDecorator,
    // DefaultDraftBlockRenderMap,
    // ContentState,
    // Editor,
    EditorState,
    // Entity,
    // RichUtils,
    // getDefaultKeyBinding,
    // KeyBindingUtil,
    // Modifier,
    // SelectionState,
    // convertFromHTML
} from 'draft-js';
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
import styled from 'styled-components';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

BraftEditor.use(CodeHighlighter({
    includeEditors: ['editor-with-code-highlighter'],
}))

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

export default class BraftEditorDemo extends React.Component {
    constructor(props) {
        super(props);
        this.compositeDecorator = new CompositeDecorator([
            // // 恢复高亮的被替换后的文字的样式为普通样式
            // {
            //     strategy: (contentBlock, callback, contentState) => {
            //         console.log('恢复替换高亮样式 => ', this.replaceTextOldValue)
            //         if (!this.replaceTextOldValue) return
            //         const HANDLE_REGEX = eval(`/${this.replaceTextOldValue.trim()}/g`);
            //         this.findWithRegex(HANDLE_REGEX, contentBlock, callback);
            //     },
            //     component: (props) => {
            //         return (
            //             <span
            //                 style={styles.normal}
            //                 data-offset-key={props.offsetKey}
            //             >
            //                 {props.children}
            //             </span>
            //         );
            //     },
            // },
            // 高亮样式
            {
                strategy: (contentBlock, callback, contentState) => {
                    if (!this.state.searchBoxValue) return
                    const HANDLE_REGEX = eval(`/${this.state.searchBoxValue.trim()}/g`);
                    // const HANDLE_REGEX = eval(`/[a]+/g`);
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
            // // 被替换后的文字的高亮样式
            // {
            //     strategy: (contentBlock, callback, contentState) => {
            //         if (!this.replaceTextValue) return
            //         const HANDLE_REGEX = eval(`/${this.replaceTextValue.trim()}/g`);
            //         this.findWithRegex(HANDLE_REGEX, contentBlock, callback);
            //     },
            //     component: (props) => {
            //         return (
            //             <span
            //                 style={styles.changed}
            //                 data-offset-key={props.offsetKey}
            //             >
            //                 {props.children}
            //             </span>
            //         );
            //     },
            // },
            // // 普通文字样式：将旧的高亮内容替换成普通样式
            // {
            //   strategy: (contentBlock, callback, contentState) => {
            //     if (!this.searchBoxOldValue) return
            //     const HANDLE_REGEX = eval(`/${this.searchBoxOldValue.trim()}/g`);
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
            editorState: ContentUtils.createEmptyEditorState(this.compositeDecorator),
            searchBoxValue: '',
            searchBoxOldValue: '',
            replaceTextValue: '',
            replaceTextOldValue: ''
        }

    }

    componentDidMount = () => {
        // // 定义一段HTML字符串
        // const htmlString = `<p>Hello<span class='color:red'>World!</span></p>`
        // // 将HTML字符串转换为编辑器所需要的EditorState实例
        // const editorState = BraftEditor.createEditorState(htmlString);
        // this.setState({ editorState }, () => {
        //     console.log('eidtor html text => ', this.editorState.toHTML())
        //     this.refreshEditorDecorator();
        // });

        // this.refreshEditorDecorator();
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
        // this.forceUpdate();
        // this.state.editorRef.forceUpdate()
        // this.editorState = this.changeDecorations(this.editorState, null)
        // setTimeout(()=>{
        //     this.editorState = this.changeDecorations(this.editorState, this.compositeDecorator)
        // },1000);
        
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

    onChangeSearch = val => {
        // this.state.editorRef.forceRender()
        // 获取新值时，先记录下即将被改变的值，也就时旧的值，用于下次匹配高亮内容时，把已高亮的旧的文字样式还原
        this.setState({
            searchBoxOldValue: this.state.searchBoxValue,
            searchBoxValue: val
        },()=>{
            // this.refreshEditorDecorator();
        })

        // this.setState({ searchBoxValue: val },
        //     () => {
        //         // this.refreshEditorDecorator();
        //     });
    }

    onSearchHandle = val => {
        this.state.editorRef.forceRender();
        this.setState({ editorState: this.changeDecorations(this.state.editorState, this.compositeDecorator) })
        console.log('强制刷新')
    }

    onChangeTextField = (event, val) => {
        this.setState({ replaceTextValue: val }, () => {
        })
    }

    onReplaceClick = () => {
        console.log('editorState => ', this.state.editorState)
        console.log('editorState 文本内容=> ', this.state.editorState)
    }

    onEditorChange = (editorState) => {
        this.setState({ 
            replaceTextOldValue: this.state.replaceTextValue,
            editorState
         }); // 存储此次替换掉文字，用于高亮显示
        // this.setState({ editorState })
    }

    clearContent = () => {
        this.setState({
            editorState: ContentUtils.clear(this.state.editorState)
        })
    }

    insertText = () => {
        this.setState({
            editorState: ContentUtils.insertText(this.state.editorState, 'Hello World!')
        })
    }

    render() {
        const extendControls = [
            {
                key: 'clear-editor',
                type: 'button',
                text: '清空编辑器',
                onClick: this.clearContent
            }, {
                key: 'insert-text',
                type: 'button',
                text: '插入自定义文本',
                onClick: this.insertText
            }
        ]
        // 通过ref属性来将编辑器实例赋值给this.editorInstance
        return (
            <RootWrapper>
                输入搜索内容，高亮匹配
                <SearchBox placeholder="Search" value={this.state.searchBoxValue} onChanged={this.onChangeSearch} onSearch={this.onSearchHandle} />
                <TextField label="替换内容" value={this.state.replaceTextValue} onChange={this.onChangeTextField} />
                <PrimaryButton text="替换" onClick={this.onReplaceClick} />
                <EditorTitle>富文本</EditorTitle>
                <EditorWrapper>
                    <BraftEditor
                        id="editor-with-code-highlighter"
                        ref={ref => this.state.editorRef = ref}
                        value={this.state.editorState}
                        onChange={this.onEditorChange}
                        extendControls={extendControls} />
                </EditorWrapper>
            </RootWrapper>
        )

    }


}