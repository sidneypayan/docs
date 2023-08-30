import React from 'react'
import mammoth from 'mammoth'
import { useEditorContext } from '../context/editor'

const UploadWord = () => {
	const { updateValue } = useEditorContext()
	const handleFileChange = async event => {
		const file = event.target.files[0]

		if (file) {
			const result = await mammoth.convertToHtml({ arrayBuffer: file })
			updateValue(result.value)
		}
	}

	return <input type='file' onChange={handleFileChange} />
}

export default UploadWord
