import React from 'react';
import '../../App.css';
import Navbar from '../UserNavbar';
import '../styles/Services.css'
import Certificates from './CertificateRequest';

export default function Services() {
  return (
    <>
       <Navbar />
      <div className='services'>
     
        <section id="certificates-section" >
          <Certificates/>
          {/* Add content for Certificates section */}
        </section>
        <section >
        "Lorem ipsum dolor sit amet"<br/>
        "Lorem ipsum dolor sit amet"<br/>
        "Lorem ipsum dolor sit amet"
        </section>
        <section >
        "Lorem ipsum dolor sit amet"<br/>
        "Lorem ipsum dolor sit amet"<br/>
        "Lorem ipsum dolor sit amet"
        </section>
      </div>
    </>
  );
}