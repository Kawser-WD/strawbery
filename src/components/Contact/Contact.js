import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div>
        <div className='container contact'>
        <h5>Message Me</h5>
            <form>
            <div className='row'>
            <div className='col-lg-6 col-md-6 col-6'>
            <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                        </div>
            </div>
                      <div className='col-lg-6 col-md-6 col-6'>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                        </div>
                      </div>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Subject</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
            </div>
            <div class="mb-3">
           <button type="submit" style={{backgroundColor:'#709F33', color:'#fff'}} className='btn'>Send Message</button>
            </div>

            </form> 
        </div>
        </div>
    );
};

export default Contact;