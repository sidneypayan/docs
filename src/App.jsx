import {
  DocumentEditorContainerComponent, Toolbar, Inject
} from '@syncfusion/ej2-react-documenteditor';

import './App.css'


function App() {
  let editorObj = DocumentEditorContainerComponent | null

  let fieldCode = 'MERGEFIELD  Praticien Nom  \\* MERGEFORMAT '
  let fieldResult = 'Easydoct_Praticien_Nom';

  const onAddField = () => {
    editorObj?.documentEditor.editor.insertField(fieldCode, fieldResult);
  }

  const onSave = () => {
    editorObj?.documentEditor.save("Sample", "Docx")
  }

  return (
    <div className='App'>
      <button onClick={onSave} style={{ marginBottom: 10 }}>Save</button>
      <button onClick={onAddField} style={{ marginBottom: 10 }}>Add Field</button>
      <DocumentEditorContainerComponent ref={(ins => editorObj = ins)} id="container" width={'100vw'} height={'100vh'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}>
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent>
    </div>
  )
}

export default App
