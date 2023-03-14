import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../Redux/actions';
import { useEffect } from 'react';
import styles from './DetailsRecipe.module.css'

export default function DetailsRecipe() {
const dispatch = useDispatch();
const recipeId = useParams();
let myRecipe = useSelector( (state) => state.detail)

useEffect( () => {
    dispatch(getDetails(recipeId.id));
}, [ dispatch ] )

    return (
 <div className={styles.container}>
   <Link to='/home' > <button className={styles.homedetail}>Home</button></Link>
    <div className={styles.details}>
        {
            (myRecipe.length === 0) ?
            <div className={styles.loading}>
                <p className={styles.loader}>Loading...</p>
            </div>
             :
            <div>
                <img src={myRecipe.image} alt="Img not found" />
                <div className={styles.detalles}>
                <h1>{myRecipe.title}</h1>
                <h5><span>Dish Type:</span> </h5>
                <p className={styles.p1}>{myRecipe.dishTypes?.map( r => (<li className={styles.li}>*{r.name} </li>))}</p>
                <h5><span>Diet Type:</span> </h5>
                <p className={styles.p1}>{myRecipe.diets?.map(r => (<li className={styles.li}>*{r.name} </li>))}</p>
                <h5><span>Servings:</span> {myRecipe.servings}</h5>
                <h5><span>Spoonacular Score:</span> {myRecipe.spoonacularScore}</h5>
                <h5><span>Health Score:</span> {myRecipe.healthScore}</h5>
                <h5><span>Ready in minutes:</span> {myRecipe.readyInMinutes}</h5>
                <h5><span>Summary:</span> {myRecipe.summary}</h5>
                <h5><span>Instructions:</span> {myRecipe.instructions}</h5>
                </div>
                
            </div>
        }
        </div>
    </div>    
  )
}
