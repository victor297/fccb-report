import { useState, useEffect } from 'react';
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';
import CreditReportSection from './CreditReportSection';

const App = () => {
  const [pdfBlob, setPdfBlob] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = () => {
    setLoading(true);
    const worker = new Worker(new URL('./../../../public/pdfWorker.js', import.meta.url), {
      type: 'module',
    });

    worker.postMessage({ totalPages: 500 });

    worker.onmessage = (e) => {
      setLoading(false);
      if (e.data.success) {
        setPdfBlob(URL.createObjectURL(e.data.pdfBlob));
      } else {
        console.error('PDF Generation Error:', e.data.error);
      }
    };
  };

  return (
    <div>
      <h1>PDF Generator</h1>
      {loading && <p>Generating PDF...</p>}
      
      {pdfBlob ? (
        <iframe src={pdfBlob} width="100%" height="600px" title="PDF Preview"></iframe>
      ) : (
        <BlobProvider document={<CreditReportSection totalPages={500} />}>
          {({ blob, url, loading }) =>
            loading ? <p>Loading preview...</p> : <iframe src={url} width="100%" height="600px" title="PDF Preview"></iframe>
          }
        </BlobProvider>
      )}

      {pdfBlob && (
        <a href={pdfBlob} download="CreditReport.pdf">
          <button>Download PDF</button>
        </a>
      )}
    </div>
  );
};

export default App;
