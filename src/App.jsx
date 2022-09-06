import { useState } from 'react'
import './App.css'

function App() {
  const ImgStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
  }

  const [Files, setFiles] = useState([])

  const UploadFiles = (e) => {
    setFiles(
      [
        ...Files,
        ...e.target.files,
      ]
    )
  }
  console.log(Files)

  return (
    <div className="App">
      <button style={{ marginBottom: '10px' }} onClick={() => document.getElementById('file').click()}>Upload</button>
      <input id="file" onChange={UploadFiles} type="file" multiple accept='image/*' hidden />
      <div style={{ display: 'flex', justifyContent: 'center' }} className="Files">
       
        { (Files.length > 0) ?
          Files.map((file, index) => (
            <div key={index}>
              <img style={ImgStyle} src={URL.createObjectURL(file)} alt={file.name} />
              <div onClick={() => setFiles(Files.filter((_, i) => i !== index))}>삭제</div>
            </div>
          ) 
          ) : <div>파일을 업로드 해주세요.</div>
        }

      </div>
    </div>
  )
}

export default App
