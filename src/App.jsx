import { Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Landing from "./views/landng/Landing";
import PdfTest from "./views/pdf/PdfTest";
import PdfTest2 from "./views/pdf/PdfTest2";
import Report from "./views/pdf/Report";
import ReactPDFTest from "./views/pdf/ReactPDFTest";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="auth/*" element={<Login />} />
      <Route path="pdf" element={<PdfTest />} />
      <Route path="pdf1" element={<Report />} />
      <Route path="reactpdf" element={<ReactPDFTest />} />
      {/* <Route path="pdf2" element={<PdfTest2 />} /> */}
      </Routes>

  )
}

export default App
