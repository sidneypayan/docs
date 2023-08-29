import React, { useState } from "react";
import mammoth from "mammoth";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MammothHTML = ({ sendText }) => {
  const [value, setValue] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const result = await mammoth.convertToHtml({ arrayBuffer: file });
      setValue(result.value);
      sendText(result.value);
    }
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <input type="file" onChange={handleFileChange} />
      <ReactQuill
        style={{ margin: "0 auto", width: "50%", height: "100vh" }}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default MammothHTML;
