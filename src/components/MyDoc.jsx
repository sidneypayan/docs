import { jsPDF } from 'jspdf'
import { useEditorContext } from '../context/editor'
import { useEffect, useState } from 'react'

const MyDoc = () => {
	const [convertedText, setConvertedText] = useState()
	const doc = new jsPDF()
	const { text } = useEditorContext()
	console.log(text)

	// useEffect(() => {
	// 	const generatePDF = async () => {
	// 		const html = await doc.html(text)
	// 		setConvertedText(html)
	// 		doc.save('pdf_name')
	// 	}

	// 	generatePDF()
	// }, [text])

	return <div>{convertedText}</div>
}

export default MyDoc
