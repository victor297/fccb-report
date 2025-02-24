import { pdf } from '@react-pdf/renderer';
import CreditReportSection from '../src/views/pdf/CreditReportSection';

self.onmessage = async (e) => {
  const { totalPages } = e.data;

  try {
    const pdfDoc = <CreditReportSection totalPages={totalPages} />;
    const pdfBlob = await pdf(pdfDoc).toBlob();

    self.postMessage({ success: true, pdfBlob });
  } catch (error) {
    self.postMessage({ success: false, error: error.message });
  }
};
