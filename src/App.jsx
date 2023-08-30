import { useState, Fragment } from 'react'
import './App.css'
import QuillEditor from './components/QuillEditor'
import { Container, Stack } from '@mui/material'
import {
	PDFViewer,
	Page,
	Text,
	View,
	Document,
	StyleSheet,
} from '@react-pdf/renderer'
import parse from 'html-react-parser'
import { useEditorContext } from './context/editor'
import UploadWord from './components/UploadWord'
import ConvertToPDF from './components/ConvertToPDF'

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
})

function App() {
	const { text, pdf } = useEditorContext()

	console.log(text)

	// const sendText = text => {
	// 	setText(convert(text))
	// }

	return (
		<Stack flexDirection='row'>
			<Stack flexDirection='column'>
				<UploadWord />
				<ConvertToPDF />
			</Stack>
			{/* <button onClick={handleDownloadPdf}>Générer PDF</button>
			<MammothHTML sendText={sendText} /> */}
			<QuillEditor />
			<PDFViewer width='70%' height='800px'>
				<Document>
					<Page size='A4' style={styles.page}>
						<View style={styles.section}>
							<Text>{pdf}</Text>
						</View>
					</Page>
				</Document>
			</PDFViewer>
		</Stack>
	)
}

export default App
