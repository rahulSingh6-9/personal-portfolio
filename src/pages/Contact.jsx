import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../App.css";
import Second_sec from '../components/Second_sec';

const Contact = () => {

   const form = useRef();

   const service_id = 'service_wm67b5o'
   const template_id = 'template_pj5khr9'
   const public_key = 'YmkGYgOB5UDHO8GQB'
   const ownerName = 'Rahul'
   const owneEmail = 'rahulsingh85064@gmail.com'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section className='section'>
  
     <div className='card-div contact-container'>
       <h3>let's talk</h3>
      <div className='contact-div'>
       
          <form className='form'  ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="to_name" value={ownerName} />
            <input type="hidden" name="to_email" value={owneEmail} />

            <div className='contact-input-div'>
              <label htmlFor="name">Name</label>
              <input name="from_name" className='contact-input' type="text" id="name" placeholder="Your Name"></input>
            </div>
          
           <div className='contact-input-div'>
             <label htmlFor="email">Email</label>
             <input name="from_email" className='contact-input' type="email" id="email" placeholder="Your Email"></input>
           </div>
           <div className='contact-input-div'>
             <label htmlFor="msg">Message</label>
             <textarea name="message" className='contact-input contact-textarea' type="string" id="msg" placeholder="Messsage"></textarea>
           </div>
             <div>
              <button className="submit-btn" type="submit" value="Send">Send</button>
             </div>
          </form>

        
      </div>
     </div>

    </section>
    <Second_sec/>
    </>
  );
};

export default Contact;