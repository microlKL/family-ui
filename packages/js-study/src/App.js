import React from 'react';
import { hot } from 'react-hot-loader/root';
import DraftJsEditor from './components/DraftJsEditor';
import BraftEditorDemo from './components/BraftEditorDemo'
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';

const labelStyles = {
  root: { marginTop: 10 },
};

const App = () => {

  return (
    <>
      <Pivot>
        <PivotItem headerText="Braft Editor">
          <BraftEditorDemo />
        </PivotItem>
        <PivotItem headerText="DraftJs Editor">
          <DraftJsEditor />
        </PivotItem>
      </Pivot>
      {/* <DraftJsEditor /> */}
      {/* <BraftEditorDemo /> */}
    </>
  );
};


export default hot(App);