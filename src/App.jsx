import { useState } from 'react'

import './App.css'
import mammoth from 'mammoth'

function App() {
  const [count, setCount] = useState(0)

  const mamothConvert = async () => {

    const buffer = new ArrayBuffer(8)

    const mammothConvert = await mammoth.extractRawText({ path: "../prob.docx" })
    const html = mammothConvert.value
    const messages = mammothConvert.messages

    return html
  }

  console.log(mamothConvert())

  return (
    <h1>mamothConvert</h1>
  )
}

export default App
