import React, { useState } from 'react'
import mammoth from 'mammoth'
import { useRef } from 'react';


const MammothHTML = () => {
    const ref = useRef(0)
    const [htmlContent, setHtmlContent] = useState('');
    const [content, setContent] = useState('')

    const exportHTML = (body) => {
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        const footer = "</body></html>";
        const sourceHTML = header + body + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);

        return setContent(source)
        // const fileDownload = document.createElement("a");
        // document.body.appendChild(fileDownload);
        // fileDownload.href = source;
        // fileDownload.download = 'document.doc';
        // fileDownload.click();
        // document.body.removeChild(fileDownload);
    }

    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const result = await mammoth.convertToHtml({ arrayBuffer: file });
            setHtmlContent(result.value);
            exportHTML(result.value)
        }
    };

    const onExport = () => {
        return ref.download = `${content}.docx`
    }




    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <a onClick={onExport} href={content} ref={ref} >Save</a>
        </div>
    );
}

export default MammothHTML