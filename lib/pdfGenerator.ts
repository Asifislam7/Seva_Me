import { PDFDocument, rgb } from 'pdf-lib';

export const generatePDF = async (appointment: any) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();
  const fontSize = 30;

  page.drawText('Appointment Details', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Patient Id: ${appointment.userId}`, {
    x: 50,
    y: height - 6 * fontSize,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Doctor: ${appointment.primaryPhysician}`, {
    x: 50,
    y: height - 8 * fontSize,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Date: ${appointment.schedule}`, {
    x: 50,
    y: height - 10 * fontSize,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  return url;
};