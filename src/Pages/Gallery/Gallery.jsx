import React from 'react'
import classes from "./gallery.module.css"
import One from "../../Assets/one.png"
import Two from "../../Assets/two.png"
import Three from "../../Assets/three.png"
import Four from "../../Assets/four.png"
import Five from "../../Assets/five.png"
import Six from "../../Assets/six.png"
import Seven from "../../Assets/seven.png"
import Eight from "../../Assets/eight.png"
import Nine from "../../Assets/nine.png"
import Ten from "../../Assets/ten.png"


const Gallery = () => {
  return (
    <div className={classes.container}>
    <div className={classes.innerContainer}>
        <h2>GALLERY</h2>
         <div className={classes.imageContainer}>
            <div className={classes.imageMain}>
              <img src={Eight} alt="" />
           </div>
            <div className={classes.imageMain}>
              <img src={Three} alt="" />
           </div>
           <div className={classes.imageMain}>
              <img src={Two} alt="" />
           </div>
         </div>
         <div className={classes.imageContainer}>
           <div className={classes.imageMain}>
              <img src={Four} alt="" />
           </div>
           <div className={classes.imageMain}>
              <img src={Five} alt="" />
           </div>
           <div className={classes.imageMain}>
              <img src={Six} alt="" />
           </div>
         </div>
         <div className={classes.imageContainer}>
           <div className={classes.imageMain}>
              <img src={Seven} alt="" />
           </div>
               <div className={classes.imageMain}>
              <img src={One} alt="" />
           </div>
           <div className={classes.imageMain}>
              <img src={Ten} alt="" />
           </div>
         </div>
         <div className={classes.imageContainer}>
             <div className={classes.imageMain}>
              <img src={Six} alt="" />
           </div>
           <div className={classes.imageMain}>
              <img src={Nine} alt="" />
           </div>
            <div className={classes.imageMain}>
              <img src={Four} alt="" />
           </div>
         </div>
    </div>
    </div>
  )
}

export default Gallery
