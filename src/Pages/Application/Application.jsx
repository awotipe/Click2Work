import React, {useRef, useState} from 'react'
import classes from "./Application.module.css"
import emailjs from '@emailjs/browser'

const Result = () => {
  return(
    <p>Registration sent successfuly.</p>
  );
}

const Application = () => {

  const [result, showResult] = useState (false, true)
  const form = useRef()
  const sendEmail = (e) => {e.preventDefault();
  
    emailjs.sendForm("service_fm9wxbi", "template_82zwegb", form.current, "A6AptbzQPnXjuVgNa")
    .then(
      (result) => {
        console.log(result.text);
        console.log("Thank you! Your message has been sent successfuly.")
      },
    (error) => {
      console.log(error.text);
      console.log("Messae not sent")
    }
    );

    form.current.reset();
    showResult(true);
  };
  setTimeout(() => { showResult(false); }, 5000);
  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
        <div className={classes.formContainer}>
             <div className={classes.spons}>
              <h3>Registration Form</h3>
              <p>Fill out the form carefully</p>
              </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className={classes.row}>{result ? <Result /> : null } </div>
            <div className={classes.flexForm}>
              <input type='text' name='FirstName' placeholder='First Name'></input>
              <input type='text' name='LastName' placeholder='Last Name'></input>
          </div>
          <div className={classes.flexForm}>
              <input type='text' name='Email' placeholder='Email Address'></input>
              <input type='text' name='Phone' placeholder='Phone Number'></input>
          </div>
          <div className={classes.flexForm}>
          <input type='address' name='address' placeholder='Home Address' ></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Name' placeholder='Parent/Guardian Name' ></input>
          <input type='text' name='Date' placeholder='Date of Birth' ></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Name' placeholder='Parent/Guardian Name' ></input>
          <input type='text' name='Date' placeholder='Date of Birth' ></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Name' placeholder='Parent/Guardian Name' ></input>
          <input type='text' name='Date' placeholder='Date of Birth' ></input>
          </div>
          <button>Submit</button>
          </form>
        </div>
   </div>
</div>
  )
}

export default Application
