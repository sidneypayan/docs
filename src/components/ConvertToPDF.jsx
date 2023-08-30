import { useEditorContext } from '../context/editor'

const ConvertToPDF = () => {
	const { convertToPDF } = useEditorContext()
	return <button onClick={convertToPDF}>ConvertToPDF</button>
}

export default ConvertToPDF
