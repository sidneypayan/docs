import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Container } from '@mui/material'
import { useEditorContext } from '../context/editor'
import { useEffect, useState } from 'react'

const QuillEditor = () => {
	const [value, setValue] = useState('')
	const { updateValue } = useEditorContext()

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image'],
			['clean'],
		],
	}

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
	]

	useEffect(() => {
		updateValue(value)
	}, [value])

	return (
		<Container>
			<ReactQuill
				modules={modules}
				formats={formats}
				style={{ height: '100vh', width: ' 80%' }}
				theme='snow'
				value={value}
				onChange={setValue}
			/>
		</Container>
	)
}

export default QuillEditor
