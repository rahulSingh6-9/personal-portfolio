import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../App.css";
import Second_sec from '../components/Second_sec';
import { motion } from "framer-motion";

const Contact = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
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
       <motion.h3
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         let's talk
       </motion.h3>
      <motion.div 
        className='contact-div'
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
       
          <form className='form'  ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="to_name" value={import.meta.env.VITE_OWNER_NAME} />
            <input type="hidden" name="to_email" value={import.meta.env.VITE_OWNER_EMAIL} />

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

        
      </motion.div>
     </div>

    </section>
    <Second_sec/>
    </>
  );
};

export default Contact;