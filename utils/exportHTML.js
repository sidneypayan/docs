const exportHTML = (body, ref) => {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + body + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);

    ref.href = source
    return ref.download = 'document.doc'
    // const fileDownload = document.createElement("a");
    // document.body.appendChild(fileDownload);
    // fileDownload.href = source;
    // fileDownload.download = 'document.doc';
    // fileDownload.click();
    // document.body.removeChild(fileDownload);
}

export default exportHTML