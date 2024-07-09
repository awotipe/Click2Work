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
              <input type='text' name='FirstName' placeholder='First Name' required></input>
              <input type='text' name='LastName' placeholder='Last Name' required></input>
          </div>
          <div className={classes.flexForm}>
              <input type='text' name='Email' placeholder='Email Address' required></input>
              <input type='phone_number' name='Phone_Number' placeholder='Phone Number' required></input>
          </div>
          <div className={classes.flexForm}>
          <input type='address' name='Address' className={classes.one} placeholder='Home Address' required ></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='P_Name' className={classes.one} placeholder='Parent/Guardian Name' required ></input>
          </div>
          <div className={classes.flexForm}>
          <input type='address' name='P_Address' className={classes.one} placeholder='Parent/Guardian Address' required ></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Date' placeholder='Date of Birth' required></input>
          <input type='text' name='Gender' placeholder='Gender' required></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Course' className={classes.one} placeholder='Course  (e.g. Web Design)' required></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Work' placeholder='Work Experience' required></input>
          <input type='text' name='Education' placeholder='Education Backkground' required></input>
          </div>
          <div className={classes.flexForm}>
          <input type='text' name='Feedback' className={classes.message} placeholder='Tell us why you want to enroll' required></input>
          </div>
          <button>Submit</button>
          </form>
        </div>
   </div>
</div>
  )
}

export default Application
