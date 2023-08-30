import { useState, useEffect, createContext, useContext } from 'react'
import { convert } from 'html-to-text'

const EditorContext = createContext()

const EditorProvider = ({ children }) => {
	const [text, setText] = useState('')
	const [convertedText, setConvertedText] = useState('')
	const [pdf, setPdf] = useState('')

	console.log(text)

	const updateValue = data => {
		setText(data)
	}

	const convertToPDF = () => {
		setPdf(convert(text))
	}

	const exposed = {
		text,
		pdf,
		convertToPDF,
		updateValue,
	}

	return (
		<EditorContext.Provider value={exposed}>{children}</EditorContext.Provider>
	)
}

export const useEditorContext = () => useContext(EditorContext)
export default EditorProvider
