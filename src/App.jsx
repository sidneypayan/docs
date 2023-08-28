import {
  DocumentEditorContainerComponent,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-documenteditor'

import './App.css'
import MammothHTML from './components/MammothHTML'

function App() {
  // let editorObj = DocumentEditorContainerComponent | null

  // let field_Patient_FirstName_Code = 'MERGEFIELD  Easydoct_Patient_Prenom  \\* MERGEFORMAT '
  // let field_Patient_FirstName_Result = 'Easydoct_Patient_Prenom'
  // let field_Patient_LastName_Code = 'MERGEFIELD  Easydoct_Patient_Nom  \\* MERGEFORMAT '
  // let field_Patient_LastName_Result = 'Easydoct_Patient_Nom'

  // const onAdd_Patient_LastName = () => {
  //   editorObj?.documentEditor.editor.insertField(field_Patient_FirstName_Code, field_Patient_FirstName_Result)
  // }
  // const onAdd_Patient_FirstName = () => {
  //   editorObj?.documentEditor.editor.insertField(field_Patient_LastName_Code, field_Patient_LastName_Result)
  // }

  // const onSave = () => {
  //   editorObj?.documentEditor.save('Sample', 'Docx')
  // }

  return (
    <div className='App'>
      <MammothHTML />
      {/* <button onClick={onSave} style={{ marginBottom: 10 }}>
        Save
      </button>
      <button onClick={onAdd_Patient_LastName} style={{ marginBottom: 10 }}>
        Ajouter Nom Patient
      </button>
      <button onClick={onAdd_Patient_FirstName} style={{ marginBottom: 10 }}>
        Ajouter Prénom Patient
      </button>
      <DocumentEditorContainerComponent
        ref={ins => (editorObj = ins)}
        id='container'
        width={'100vw'}
        height={'100vh'}
        serviceUrl='https://ej2services.syncfusion.com/production/web-services/api/documenteditor/'
        enableToolbar={true}>
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent> */}
    </div>
  )
}

export default App
