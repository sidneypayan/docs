import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEditorContext } from '../context/editor'
import { Container } from '@mui/material'

const QuillEditor = () => {
	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			['blockquote', 'code-block'],
			[{ header: 1 }, { header: 2 }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ indent: '-1' }, { indent: '+1' }],
			[{ direction: 'rtl' }],
			[{ size: ['small', false, 'large', 'huge'] }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ color: [] }, { background: [] }],
			[{ font: [] }],
			[{ align: [] }],
		],
	}
	const formats = [
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'align',
		'strike',
		'script',
		'blockquote',
		'background',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'color',
		'code-block',
	]
	const { text, updateValue } = useEditorContext()

	return (
		<Container maxWidth='md'>
			<ReactQuill
				modules={modules}
				formats={formats}
				theme='snow'
				value={text}
				onChange={updateValue}
			/>
		</Container>
	)
}

export default QuillEditor
