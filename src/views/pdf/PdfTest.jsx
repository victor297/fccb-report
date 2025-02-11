// import { generatePdf } from "../../utils/createPdf"

// const PdfTest = ()=>{

//     return (
//         <div>
// {generatePdf()}

//         </div>
//     )
// }
// export default PdfTest


import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PdfTest2 from './PdfTest2';
import { data } from '../../test';
import MyReport from './MyReport';

const App = () => {
  
  return (
    <div className=' flex justify-center'>
      <PDFViewer style={{ width: '80%', height: '100vh' }}>
        {/* <PdfTest2 data={data}/> */}
        <MyReport/>
      </PDFViewer>
    </div>
  );
};

export default App;
