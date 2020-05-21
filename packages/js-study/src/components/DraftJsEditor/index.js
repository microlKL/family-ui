import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const RootWrapper = styled.div`
    width: 80vw;
    height: 80vh;
    border: 1px solid gray;
    overflow: auto;
`

const EidtorWrapper = styled.div`
    width: 99.7%;
    height: 69.3%;
    border: 1px solid gray;
    overflow: auto;
`

const EidtorTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: blue;
`

export default function DraftJsEditor() {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty()
    );
    const [textFieldValue, setTextFieldValue] = React.useState('');

    const onEditorChange = (editorState) => {
        setEditorState(editorState);
        console.log('getPlainText => ',editorState.getCurrentContent().getPlainText())
    }

    const onSearchHandle = newValue => {
        console.log('value is ' + newValue)
        searchLikeContent(newValue,editorState.getCurrentContent().getPlainText())
    }

    const onChangeTextField = (event, newValue) => {
        setTextFieldValue(newValue || '');
        console.log('textFiled = ', newValue);
    }

    const onReplaceClick = () => {
        console.log('替换 = ', editorState.getCurrentContent().getPlainText())
    }

    const searchLikeContent = (search,sourceContent) => {
        let result = ''

        result = String(sourceContent).replace(search,`<a alt='' href='#'>${search}</a>`);
        // let newData = {}
        // newData[search] = 'xx'
        // editorState.getCurrentContent().replaceEntityData(search,newData)
        console.log('匹配到的内容 = ', result);

        console.log('getLastCreatedEntityKey = ',editorState.getCurrentContent().getLastCreatedEntityKey())
    }

    return (<RootWrapper>
        输入搜索内容，高亮匹配
        <SearchBox placeholder="Search" onSearch={onSearchHandle} />
        <TextField label="替换内容" value={textFieldValue} onChange={onChangeTextField} />
        <PrimaryButton text="替换" onClick={onReplaceClick} />
        <EidtorTitle>富文本</EidtorTitle>
        <EidtorWrapper>

            <Editor style={{ width: '100%', height: '100ox' }} editorState={editorState} onChange={onEditorChange} />
        </EidtorWrapper>
    </RootWrapper>);
}