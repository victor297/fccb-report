import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePdf = async (name) => {
  // Create a temporary container for the certificate
  const container = document.createElement("div");
  container.innerHTML = `
    <div id="certificate" style="width: 800px; padding: 40px; background: white;">
      <div style="border: 2px solid #000; padding: 20px; text-align: center;">
        <h1 style="font-size: 40px; margin-bottom: 20px;">CERTIFICATE</h1>
        <h2 style="font-size: 30px; margin-bottom: 20px;">OF COMPLETION</h2>
        <p style="font-size: 20px; margin: 20px 0;">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
        <h2 style="font-size: 35px; margin: 20px 0; font-family: cursive;">${"name"}</h2>
        <p style="font-size: 18px; margin: 20px 0;">Certificate of completion in financial literacy course</p>
        <div style="margin-top: 40px; display: flex; justify-content: space-around;">
          <div>
            <p style="border-top: 1px solid #000; padding-top: 10px;">Blessing Okpae</p>
            <p>REPRESENTATIVE</p>
          </div>
          <div>
            <p style="border-top: 1px solid #000; padding-top: 10px;">John Okpae</p>
            <p>REPRESENTATIVE</p>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container.querySelector("#certificate"));
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("certificate.pdf");
  } finally {
    document.body.removeChild(container);
  }
};