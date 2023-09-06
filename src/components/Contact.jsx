import '../components-style/Contact.css'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact () {
  const [visible, setVisible] = useState(null)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ctq5zz8', 'template_zvl7hqi', form.current, 'Qk6eVwARuTDveERAE')
      .then((result) => {
          console.log(result.text);
          setVisible("notison")
          setTimeout(() => {
            setVisible(null)
          }, 1000);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact' className='contact'>

      <h2>Kontakt</h2>

      <form ref={form} onSubmit={sendEmail}>
      <TextField
      required
      id="filled-basic" 
      label="Namn" 
      variant="filled" 
      margin='normal'
      name='user_name'
      color='secondary'
      sx={{ background: "#EEEEFF" }}
      />

      <TextField 
      id="filled-basic" 
      required
      label="E-mail" 
      variant="filled" 
      margin='normal'
      name='user_email'
      color='secondary'
      sx={{ background: "#EEEEFF" }}
      />

      <TextField
          required
          id="filled-multiline-static"
          label="Meddelande"
          multiline
          rows={4}
          variant="filled"
          margin='normal'
          name='message'
          color='secondary'
          sx={{ background: "#EEEEFF" }}
        />
      
      <Button type='submit' variant="contained" endIcon={<SendIcon />}>
        Skicka
      </Button>

      </form>

      <div className={`notis ${visible}`}>
            <p> e-mail sent </p>
      </div>
    </section>
  )
}

export default Contact