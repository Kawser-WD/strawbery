import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Image1 from '../Images/Schermafbeelding 2022-07-30 om 17.12.20.png';
import location from '../Images/Location.png';
import './Contact.css';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w795alg', 'template_ebtzpgk', e.target, '1MVIkRXCRQGngUelf')
        .then((result) => {
           toast.success('Thanks for your message')
           e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div>
            <Toaster
            position="top-center"
            reverseOrder={false}
            duration="2000"
            />
            <div className='d-flex justify-content-center mt-5'>
            <h3 className='contact-title'>Hoe kunnen wij jou helpen?</h3>
            </div>
        <div className='container contact'>
            <form ref={form} onSubmit={sendEmail}>
            <div className='row'>
            <div className='col-lg-4 col-md-4 col-6'>
            <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Naam" name="user_naam"/>
                        </div>
            </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Achternaam" name="achternaam"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Bedrijfsnaam" name="bedrijfsnaam"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefoon" name="user_telefoon"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Btw Number" name="btwnumber"/>
                        </div>
                      </div>
            </div>
            <div class="mb-3">
            <textarea class="text-message" id="exampleFormControlTextarea1" rows="3" placeholder='Message' name="message"></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-center">
           <button type="submit" value="Send"className='button'>VERSTUREN</button>
            </div>

            </form> 
            <div className='row g-0'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <img src={Image1} className="img-fluid" alt=""/>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                    <img src={location} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;