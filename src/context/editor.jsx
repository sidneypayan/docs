import { useState, createContext, useContext } from 'react'

const EditorContext = createContext()

const EditorProvider = ({ children }) => {
	const [text, setText] = useState('')
	const [convertedText, setConvertedText] = useState('')
	const [pdf, setPdf] = useState('')

	const updateValue = data => {
		setText(data)
	}

	const convertToPDF = () => {
		setPdf(text)
	}

	const generateDoc = () => {
		console.log('ok')
	}

	const exposed = {
		text,
		pdf,
		convertToPDF,
		updateValue,
		convertedText,
		generateDoc,
	}

	return (
		<EditorContext.Provider value={exposed}>{children}</EditorContext.Provider>
	)
}

export const useEditorContext = () => useContext(EditorContext)
export default EditorProvider
