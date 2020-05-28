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
    Modifier,
    SelectionState,
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
import {
    TooltipHost,
    TooltipDelay,
    DirectionalHint,
    ITooltipProps,
    ITooltipHostStyles,
} from 'office-ui-fabric-react/lib/Tooltip';
import { useId } from '@uifabric/react-hooks';

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

const ButtonWrapper = styled.div`
    display: flex;
    > .button{
        margin: 5px 5px 5px 0;
    }
`

const AiHintSpan = styled.span`
    cursor: pointer;
    padding: 2px 2px;
    :hover{
        background-color: #d9e6ff;
        /* border: 1px solid rgba(52, 152, 219,0.1); */
        border-radius: 5px;
        color: #2470ff;
        width: auto;        
    }
`

const hostStyles = { root: { display: 'inline-block' } };

export default class BraftEditorDemo extends React.Component {
    constructor(props) {
        super(props);

        this.compositeDecorator = new CompositeDecorator([
            // 高亮样式
            {
                strategy: (contentBlock, callback, contentState) => {
                    if (!this.state.searchBoxValue) return
                    const HANDLE_REGEX = eval(`/${this.state.searchBoxValue.trim()}/g`);
                    // const HANDLE_REGEX = eval(`/[a]+/g`);
                    this.findWithRegex(HANDLE_REGEX, contentBlock, true, callback);
                },
                component: (props) => {
                    const replaceTxt = () => {
                        if(!this.state.replaceTextValue) return
                        
                        const targetText = this.state.replaceTextValue
                        console.log('props => ', props)
                        console.log('props.children => ', props.children)
                        console.log('props.children[0]._owner.key => ', props.children[0]._owner.key)
                        console.log('props.children[0].props.text => ', props.children[0].props.text)

                        const contentBlockKey = props.children[0]._owner.key;
                        const offsetStart = props.children[0].props.start;
                        const offsetEnd = offsetStart + props.children[0].props.text.length;

                        // 设置自定义的 SelectionState
                        let selectionState = SelectionState.createEmpty();
                        selectionState = selectionState.set('anchorKey', contentBlockKey);
                        selectionState = selectionState.set('anchorOffset', offsetStart);
                        selectionState = selectionState.set('focusKey', contentBlockKey);
                        selectionState = selectionState.set('focusOffset', offsetEnd);
                        selectionState = selectionState.set('isBackward', false);
                        selectionState = selectionState.set('hasFocus', false);

                        // 实现替换
                        const contentState = this.state.editorState.getCurrentContent();
                        const newContentState = Modifier.replaceText(contentState, selectionState, targetText);
                        this.setState({ editorState: ContentUtils.createEditorState(newContentState, this.compositeDecorator) },
                            () => {
                                //
                            })

                    }
                    const tooltipProps = {
                        onRenderContent: () => (
                            <ul style={{ margin: 10, padding: 0 }}>
                                <li><AiHintSpan onClick={replaceTxt}>{this.state.replaceTextValue}</AiHintSpan></li>
                            </ul>
                        ),
                    };
                    return (
                        <TooltipHost
                            tooltipProps={tooltipProps}
                            delay={TooltipDelay.zero}
                            directionalHint={DirectionalHint.bottomCenter}
                            styles={hostStyles}
                        >
                            <EditorHeightLightTextWrapper
                                data-offset-key={props.offsetKey}>
                                {props.children}
                            </EditorHeightLightTextWrapper>
                        </TooltipHost>
                    );
                },
            },
        ]);

        this.searchContentMap = {};  // 记录下每次搜索内容时，匹配到的高亮文字信息，数组中的每一项包含: {contentBlock(内容块，即当前行),startOffset(匹配文字的开始索引),endOffset(匹配文字的结束索引)}
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
    }

    findWithRegex = (regex, contentBlock, isRemember, callback) => {
        let searchContentMap = {}
        // if(isRemember){
        //     const contentBlockInfo = {
        //         contentBlock,
        //         words:[
        //             {
        //                 startOffset: 0,
        //                 endOffset: 0
        //             }
        //         ]
        //     }
        //     let searchContentMap = {}
        //     searchContentMap[contentBlock.getKey()] = {...contentBlockInfo}
        // }
        console.log('contentBlock key => ', contentBlock.getKey())

        const text = contentBlock.getText();
        let matchArr, start, end;
        while ((matchArr = regex.exec(text)) !== null) {
            start = matchArr.index;
            end = start + matchArr[0].length
            console.log('匹配到的文字坐标 start => ', start)
            console.log('匹配到的文字坐标 end => ', end)

            // 记录下当前的匹配文字信息
            if (isRemember) {
                if (this.searchContentMap.hasOwnProperty(contentBlock.getKey())) {
                    this.searchContentMap[contentBlock.getKey()].words.push({
                        startOffset: start,
                        endOffset: end
                    })
                } else {
                    this.searchContentMap[contentBlock.getKey()] = {
                        contentBlock,
                        words: [{
                            startOffset: start,
                            endOffset: end
                        }]
                    }
                }
            }

            callback(start, end);
        }
    }

    // 利用修改 editorSate 来实现主动让 decorator 的刷新
    refreshEditorDecorator = () => {
        this.setState({ editorState: this.changeDecorations(this.state.editorState, this.compositeDecorator) })
    }

    // 改变 editor 的 decorator
    changeDecorations = (editorState, decorator) => {
        return ContentUtils.createEditorState(editorState.getCurrentContent(), decorator)
    }

    onChangeSearch = val => {
        // this.state.editorRef.forceRender()
        // 获取新值时，先记录下即将被改变的值，也就时旧的值，用于下次匹配高亮内容时，把已高亮的旧的文字样式还原
        this.setState({
            searchBoxOldValue: this.state.searchBoxValue,
            searchBoxValue: val
        }, () => {
            // 每次匹配文字搜索前都清空记录对象，每次都只记录下当前对应的匹配文字信息
            this.searchContentMap = {}
            this.refreshEditorDecorator();
        })
    }

    onSearchHandle = val => {
        // this.refreshEditorDecorator();
    }

    onChangeReplaceTextField = (event, val) => {
        this.setState({ replaceTextValue: val }, () => {
        })
    }

    onReplaceClick = () => {
        // TODO: 还有BUG在这里，需要修复
        if (JSON.stringify(this.searchContentMap) !== '{}') {
            let newContentState = {}
            const contentState = this.state.editorState.getCurrentContent();
            const txt = this.state.replaceTextValue;

            const contentBlockKeys = Object.keys(this.searchContentMap);
            const contentBlockKey = contentBlockKeys[0];
            if (this.searchContentMap[contentBlockKey].words && this.searchContentMap[contentBlockKey].words.length > 0) {
                // 每次只替换掉第一个
                let selectionState = SelectionState.createEmpty();
                selectionState = selectionState.set('anchorKey', contentBlockKey);
                selectionState = selectionState.set('anchorOffset', this.searchContentMap[contentBlockKey].words[0].startOffset);
                selectionState = selectionState.set('focusKey', contentBlockKey);
                selectionState = selectionState.set('focusOffset', this.searchContentMap[contentBlockKey].words[0].endOffset);
                selectionState = selectionState.set('isBackward', false);
                selectionState = selectionState.set('hasFocus', false);

                console.log('============================================================================')
                console.log('要替换的自定义 contentBlockKey => ', contentBlockKey)
                console.log('要替换的自定义 word.startOffset=anchorOffset => ', this.searchContentMap[contentBlockKey].words[0].startOffset)
                console.log('要替换的自定义 word.endOffset=focusOffset => ', this.searchContentMap[contentBlockKey].words[0].endOffset)
                console.log('要替换的自定义 selectionState => ', selectionState.serialize())
                console.log('><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>><><><><><><')

                // 实现替换
                newContentState = Modifier.replaceText(contentState, selectionState, txt);
                this.setState({ editorState: ContentUtils.createEditorState(newContentState, this.compositeDecorator) }, () => {
                    // 删除当前被替换的记录
                    if (this.searchContentMap[contentBlockKey].words && this.searchContentMap[contentBlockKey].words.length > 1) {
                        this.searchContentMap[contentBlockKey].words.splice(0, 1);
                    } else if (this.searchContentMap[contentBlockKey].words && this.searchContentMap[contentBlockKey].words.length < 2) {
                        delete this.searchContentMap[contentBlockKey]
                    }
                })
            }


        }
    }

    onReplaceAllClick = () => {
        // TODO: 这里全部替换的算法有问题，后续待修改
        if (JSON.stringify(this.searchContentMap) !== '{}') {
            let newContentState = {}
            const contentState = this.state.editorState.getCurrentContent();
            const txt = this.state.replaceTextValue;

            Object.keys(this.searchContentMap).map(contentBlockKey => {
                if (this.searchContentMap[contentBlockKey].words && this.searchContentMap[contentBlockKey].words.length > 0) {
                    this.searchContentMap[contentBlockKey].words.map(word => {
                        const selectionState = SelectionState.createEmpty();
                        let selectionStateNew = selectionState.set('anchorKey', contentBlockKey);
                        selectionStateNew = selectionStateNew.set('anchorOffset', word.startOffset);
                        selectionStateNew = selectionStateNew.set('focusKey', contentBlockKey);
                        selectionStateNew = selectionStateNew.set('focusOffset', word.endOffset);
                        selectionStateNew = selectionStateNew.set('isBackward', false);
                        selectionStateNew = selectionStateNew.set('hasFocus', false);
                        console.log('============================================================================')
                        console.log('要替换的自定义 contentBlockKey => ', contentBlockKey)
                        console.log('要替换的自定义 SelectionState => ', selectionState.serialize())
                        console.log('要替换的自定义 word.startOffset=anchorOffset => ', word.startOffset)
                        console.log('要替换的自定义 word.endOffset=focusOffset => ', word.endOffset)
                        console.log('要替换的自定义 selectionStateNew => ', selectionStateNew.serialize())
                        console.log('><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>><><><><><><')
                        // 实现替换
                        newContentState = Object.assign(newContentState, Modifier.replaceText(contentState, selectionStateNew, txt));
                        // this.setState({ editorState: ContentUtils.createEditorState(newContentState, this.compositeDecorator) })
                    })
                }
            })

            if (JSON.stringify(newContentState) !== '{}') {
                // debugger
                this.setState({ editorState: ContentUtils.createEditorState(newContentState, this.compositeDecorator) })
            }
        }
    }

    onTestClick = () => {
        // this.state.editorState.getCurrentContent().getBlockMap().map((item,index)=> {
        //     console.log('getBlockMap item => ', item.getEntityAt(2))
        // })
        // this.state.editorState.getCurrentContent().getEntityMap().map((item,index)=> {
        //     console.log('Entity item => ', item)
        // })
        // for(let item of this.state.editorState.getCurrentContent().getEntityMap()){
        //     console.log('Entity item => ', item)
        // }
        // console.log('Entity key get=> ', this.state.editorState.getCurrentContent().getLastCreatedEntityKey())

        const selectionState = SelectionState.createEmpty();
        // const selectionStateWithNewFocusOffset = selection.set('focusOffset', 1);

        console.log('selection => ', this.state.editorState.getSelection())
        // console.log('selectionStateWithNewFocusOffset => ', selectionStateWithNewFocusOffset)
        console.log('selection serialize => ', this.state.editorState.getSelection().serialize())
        console.log('当前记录下的匹配文字信息 => ', this.searchContentMap)
        console.table(this.searchContentMap)

    }

    onEditorChange = (editorState) => {
        this.setState({
            replaceTextOldValue: this.state.replaceTextValue,
            editorState
        }); // 存储此次替换掉文字，用于高亮显示
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
                <TextField label="替换内容" value={this.state.replaceTextValue} onChange={this.onChangeReplaceTextField} />
                <ButtonWrapper>
                    <PrimaryButton className='button' text="逐个替换" onClick={this.onReplaceClick} />
                    <PrimaryButton className='button' text="替换全部" onClick={this.onReplaceAllClick} />
                    <PrimaryButton className='button' text="测试" onClick={this.onTestClick} />
                </ButtonWrapper>

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