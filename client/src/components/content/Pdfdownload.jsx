import React, { useState } from 'react';
import "../../contact.css";
import form from "../assets/form-pdf.pdf";

const Pdfdownload = () => {
  const [message, setMessage] = useState('');

  const onButtonClick = () => {
    // Show the message when download starts
    setMessage('Your download has started');

    // Using JavaScript method to get PDF file
    fetch(form).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "form-pdf.pdf"; // Corrected download attribute
        alink.click();
      });
    });
  };

  return (
    <>
      <center>



        <h2  className='my-3 mt-4'>Download your form from here</h2>
        <button className='downladbtn my-2' onClick={onButtonClick}>
          Download PDF
        </button>
        {message && <p className='alrtmsg'>{message}</p>}
         

         
      <h5 className='my-3'>
          In case of any query please &nbsp;
        <a target='_blank' className='' href="https://wa.me/+919340926300">Contact Us</a>
        </h5>
       
      </center>
    </>
  );
};

export default Pdfdownload;
