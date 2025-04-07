
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyReport from './MyReport';

const App = () => {
  
  return (
    <div className=' flex justify-center'>
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        <MyReport/>
      </PDFViewer>
    </div>
  );
};

export default App;
