import './App.css'
import { Stack } from '@mui/material'
import { useEditorContext } from './context/editor'
import QuillEditor from './components/QuillEditor'
import MyDoc from './components/MyDoc'
import UploadWord from './components/UploadWord'
import ConvertToPDF from './components/ConvertToPDF'

function App() {
	const { text, pdf } = useEditorContext()

	return (
		<Stack flexDirection='row'>
			{/* <UploadWord /> */}
			<QuillEditor />
			<MyDoc />
			{/* <ConvertToPDF /> */}
		</Stack>
	)
}

export default App
