import React, { useState } from 'react';
import "../../contact.css";


const Pdfdownload = () => {
  const [message, setMessage] = useState('');

  const --00handleDownload = () => {
    let link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'form-pdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMessage('Your download has started');
  }

  return (
    <div className='container-fluid text-center'>
        
      <button className='downladbtn' onClick={handleDownload}>Download PDF</button>
      {message && <p className='alrtmsg'>{message}</p>}
    </div>
  );
};

export default Pdfdownload;
