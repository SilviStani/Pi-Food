import React from 'react';
import styles from './Card.module.css';

function Card({title, diets,image, spoonacularScore, servings}) {
  return (
    <div class={styles.card}>
    
      <img src={image} alt="Img not found" className={styles.img}/>
    
    <div class={styles.card_text}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.diets}>{diets}</p>
      <p className={styles.spoonacularScore}>{spoonacularScore}</p>
      <p className={styles.servings}>{servings}</p>
    </div>
  </div>
  )}

export default Card;
