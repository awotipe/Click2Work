import React, {useRef, useState} from 'react'
import classes from "./Sponsors.module.css"
import emailjs from '@emailjs/browser'


const Result = () => {
    return(
      <p>Thank you! Your message has been sent successfuly.</p>
    );
  }

const Sponsors = () => {

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
          <div className={classes.textssContainer}>
            <p>Drop us a quick line and we will call you back</p>
            <h1>Sponsor Click2Work</h1>
            </div>
            <div className={classes.formContainer}>
                 <div className={classes.spons}>
                  <h3>Sponsors Only</h3>
                  </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className={classes.row}>{result ? <Result /> : null } </div>
                <div className={classes.flexForm}>
              <input type='text' name='FirstName' placeholder='First Name'></input>
              <input type='text' name='LastName' placeholder='Last Name'></input>
              </div>
              <div className={classes.flexForm}>
              <input type='text' name='Email' placeholder='Email Address'></input>
              <input type='text' name='CompanyName' placeholder='Company Name' ></input>
              </div>
              <div className={classes.flexForm}>
              <input type='text' name='Phone' placeholder='Phone Number'></input>
              <input type='text' name='Position' placeholder='Position' ></input>
              </div>
              <div className={classes.check}>
              <div className={classes.check1}>
              <input type="radio" name="radio"></input><br/>
              <label for="bronze">Bronze</label><br/>
              </div>
              <div className={classes.check1}>
              <input type="radio" name="radio"></input><br/>
              <label for="silver">Silver</label><br/>
              </div>
              <div className={classes.check1}>
              <input type="radio" name="radio"></input><br/>
              <label for="gold">Gold</label><br/>
              </div>
              <div className={classes.check1}>
              <input type="radio" name="radio"></input><br/>
              <label for="platinum">Platinum</label><br/>
              </div>
              </div>
              <button>Send Message</button>
              </form>
            </div>
       </div>
    </div>
  )
}

export default Sponsors
