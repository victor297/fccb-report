import { Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Landing from "./views/landng/Landing";
import PdfTest from "./views/pdf/PdfTest";
import PdfTest2 from "./views/pdf/PdfTest2";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="auth/*" element={<Login />} />
      <Route path="pdf" element={<PdfTest />} />
      {/* <Route path="pdf2" element={<PdfTest2 />} /> */}
      </Routes>

  )
}

export default App
