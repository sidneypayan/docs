import './App.css'
import { useState } from 'react'
import { Stack } from '@mui/material'
import { useEditorContext } from './context/editor'
import QuillEditor from './components/QuillEditor'
import MyDoc from './components/MyDoc'
import UploadWord from './components/UploadWord'
import ConvertToPDF from './components/ConvertToPDF'
import { Button, Container } from '@mui/material'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function App() {
	const [displayDoc, setDisplayDoc] = useState(false)
	const { text, pdf, generateDoc } = useEditorContext()

	const exportPDF = () => {
		const input = document.getElementById('app')
		html2canvas(input, {
			logging: true,
			letterRendering: 1,
			useCORS: true,
		}).then(canvas => {
			const imgWidth = 208
			const imgHeight = (canvas.height * imgWidth) / canvas.width
			const imgData = canvas.toDataURL('img/png')
			const pdf = new jsPDF('p', 'mm', 'a4')
			pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
			pdf.save('doc.pdf')
		})
	}

	return (
		<Container>
			<Button onClick={exportPDF} variant='contained'>
				Save as PDF
			</Button>
			<Button onClick={() => setDisplayDoc(true)} variant='contained'>
				Generate document
			</Button>
			<Stack flexDirection='row'>
				{/* <UploadWord /> */}
				{!displayDoc && <QuillEditor />}
				{displayDoc && (
					<div id='app'>
						<MyDoc />
					</div>
				)}
				{/* <ConvertToPDF /> */}
			</Stack>
		</Container>
	)
}

export default App
