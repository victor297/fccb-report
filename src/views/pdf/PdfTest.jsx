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
// import PdfTest2 from './PdfTest2';
// import { data } from '../../test';
// import MyReport from './MyReport';
import XSCoreConsumerFullCredit from './XSCoreConsumerFullCredit';

const App = () => {
  
  return (
    <div className=' flex justify-center'>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        {/* <MyReport/> */}
        <XSCoreConsumerFullCredit/>
      </PDFViewer>
    </div>
  );
};

export default App;
