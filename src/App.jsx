import { useState, useRef } from "react";
import "./App.css";
import MammothHTML from "./components/MammothHTML";
import { Container } from "@mui/material";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
  const doc = new jsPDF();
  const [text, setText] = useState("");
  const [displayPDF, setDisplayPDF] = useState(false);
  const printRef = useRef();

  console.log(printRef.current);

  const sendText = (text) => {
    setText(text);
  };

  console.log(text);

  // const handleDownloadPdf = () => {
  //   doc.text(text, 10, 10);
  //   doc.save("a4.pdf");
  // };

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 10, 10, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <Container maxWidth="xl">
      <button onClick={handleDownloadPdf}>Générer PDF</button>
      {text ? (
        <div ref={printRef} dangerouslySetInnerHTML={{ __html: text }}></div>
      ) : (
        <MammothHTML sendText={sendText} />
      )}
    </Container>
  );
}

export default App;
