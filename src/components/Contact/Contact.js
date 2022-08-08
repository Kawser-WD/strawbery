import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Image1 from '../Images/Schermafbeelding 2022-07-30 om 17.12.20.png';
import './Contact.css';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Wecandance99$', 'Wecandance99', e.target, 'IUMe4r9MxhmmkAXHw')
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
            <textarea class="text-message form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Beschrijving' name="message"></textarea>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9978.779987808866!2d3.1466711!3d51.2983367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97f5bf26845d9ce4!2sWim%20Tanghe%20Bvba!5e0!3m2!1sen!2sbd!4v1659855623449!5m2!1sen!2sbd" className='map' style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;