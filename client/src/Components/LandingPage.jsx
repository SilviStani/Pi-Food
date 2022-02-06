import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css';
import wokvideo from '../Video/wokvideo.mp4'


export default function LandingPage() {
  return (
  <div className={styles.background}>
      <div className={styles.content}>
         <div className={styles.video1}>
            <video autoPlay loop muted className={styles.video}>
               <source src={wokvideo} type="video/mp4" />
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

     <div>
        
    </div>    

  </div>
  );
}

