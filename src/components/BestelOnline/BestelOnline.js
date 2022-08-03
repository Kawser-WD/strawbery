import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './BestelOnline.css';

const BestelOnline = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w795alg', 'template_ebtzpgk', e.target, '1MVIkRXCRQGngUelf')
      .then((result) => {
         toast.success('Thanks for your message')
         e.target.reset();
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
          <div>
            <h2 className='bestel-title'>Plats hier snel en eenvoudig uw bestelling!</h2>
          </div>
          <form  onSubmit={sendEmail}>
            <div className='container bestel'>
            <div className='row gx-5'>
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
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefoon" name="telefoon"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Btw number" name="btwnumber"/>
                        </div>
                      </div>
            </div>
        </div>
        <div className='bestel-table'>
        <div className='container'>
        <div className='row'>
              <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-label">Omschrijving</label>
                       <input type="text" class="form-control input-text1" id="FormControlInput1"  defaultValue="Aardbeien" name="product_naam"/>
                        </div>
              </div>
              <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field1">Stucks</label>
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stucks"/>
                        </div>
              </div>
              <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field2">Type</label>
                        <input type="text" class="form-control input-field2" id="FormControlInput1" defaultValue="Kg" disabled name="stucks"/>
                        </div>
              </div>
              <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field3">Opmerking</label>
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
              <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"  defaultValue="Aardbeien" name="product_naam"/>
                        </div>
              </div>
              <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stucks"/>
                        </div>
              </div>
              <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="text" class="form-control input-field2" id="FormControlInput1" defaultValue="Kg" disabled name="stucks"/>
                        </div>
              </div>
              <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
            </div>
        </div>
        </div>
        <div class="mb-3 d-flex justify-content-center">
           <button type="submit" value="Send"className='button'>VERSTUREN</button>
            </div>
            </form>
        </div>
    );
};

export default BestelOnline;