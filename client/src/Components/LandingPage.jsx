import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';
import shortwokvideo from '../Video/shortwokvideo.mp4'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function LandingPage() {
   const textRef = useRef();
      useEffect(() => {
         init(textRef.current, {
            showcursor: true,
            typeSpeed:  250,
            backDelay: 1500,
            backSpeed: 100,
            strings: ["Contact me", "Click Below"]
         })
   },[])
return (
  <div className={styles.background}>
      <div className={styles.content}>
         <div className={styles.video1}>
            <video autoPlay loop muted className={styles.video}>
               <source src={shortwokvideo} type="video/mp4" />
            </video>
         </div>
      </div>
         
         <div className={styles.overlay}></div>

         <div className={styles.titulo}>
         <h1 className = {styles.title} >Welcome Recipers!</h1>
         <Link to='/home'>
         <button className = {styles.btn} >Let's Cook!</button>
         </Link>
      </div>

        <div className={styles.bottomBar} >
            <div className={styles.wrapper} >
                <div className={styles.left}><span ref={textRef} ></span></div>
                <div className={styles.right}>
                    <div className="itemContainer">
                         <a href="https://api.whatsapp.com/send/?phone=5491163632288&text&app_absent=0">WhatsApp</a>
                    </div>

                    <div className="itemContainer">
                         <a href = "mailto:silvina@gmail.com?subject = Feedback&body = Message">Mail</a>
                    </div>

                    <div className="itemContainer">
                         <a href="https://github.com/SilviStani" >Github</a>
                    </div>
                   
                    <div className="itemContainer">
                         <a href="https://www.linkedin.com/in/silvina-staniszewski-18493276/">LinkedIn</a>
                    </div>
                   
               </div>
               <p>Food App: Developed & Designed by Silvina Staniszewski</p>
            </div>
        </div>

  </div>
  );
}

