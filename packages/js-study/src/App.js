import React from 'react';
import {hot} from 'react-hot-loader/root';
import DraftJsEditor from './components/DraftJsEditor';
import BraftEditorDemo from './components/BraftEditorDemo'
 
const App = () => {
 
  return (
    <>
    {/* <DraftJsEditor /> */}
      <BraftEditorDemo />
    </>
  );
};
 
 
export default hot(App);