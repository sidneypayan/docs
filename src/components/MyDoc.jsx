import { useEditorContext } from '../context/editor'

const MyDoc = () => {
	const { text } = useEditorContext()

	return <div dangerouslySetInnerHTML={{ __html: text }} />
}

export default MyDoc
