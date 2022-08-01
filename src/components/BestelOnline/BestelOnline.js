import React from 'react';
import './BestelOnline.css';

const BestelOnline = () => {
    return (
        <div>
          <div>
            <h2 className='bestel-title'>Plats hier snel en eenvoudig uw bestelling!</h2>
          </div>
            <div className='container bestel'>
            <form>
            <div className='row gx-5'>
            <div className='col-lg-4 col-md-4 col-6'>
            <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Naam" name="user_name"/>
                        </div>
            </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Achternaam" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Bedrijfsnaam" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefoon" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Btw number" name="user_email"/>
                        </div>
                      </div>
            </div>
            
            </form>
        </div>
        <div className='bestel-table'>
        <div className='container'>
        <div className='row'>
              <div className='col-lg-6'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Omschrijving</label>
                       <input type="text" class="form-control input-text1" id="FormControlInput1" placeholder="Aardbeien" name="user_email"/>
                        </div>
              </div>
              <div className='col-lg-1'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field1">Stucks</label>
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="user_email"/>
                        </div>
              </div>
              <div className='col-lg-1'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field2">Type</label>
                        <input type="text" class="form-control input-field2" id="FormControlInput1" placeholder="Kg" disabled name="user_email"/>
                        </div>
              </div>
              <div className='col-lg-4'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field3">Opmerking</label>
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="user_email"/>
                        </div>
              </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default BestelOnline;