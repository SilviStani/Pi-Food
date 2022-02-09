import React from 'react';
import {/*useState,*/ useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes, filterDiet} from '../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Card from './Card';

function Home() {

const dispatch = useDispatch();
const allRecipes = useSelector(state => state.allRecipes);
const allDiets = useSelector((state) => state.diets);

useEffect(() => {
    dispatch(getRecipes());
}, [dispatch]);

function handleClick(e){
    e.preventDefault();
    dispatch(getRecipes());
}

function handleDiets(e) {
    dispatch(filterDiet(e.target.value));
    e.preventDefault();
}



  return (
     <div className={styles.All}>
         
        <div className={styles.wrapper}>
            <Link to='/'>
            <  div className={styles.title}> <h1 className={styles.h1}>Recipers Site</h1> </div> </Link>
                <div className={styles.createRecipe}>
                    <Link to='/recipes' className={styles.a}>Create Your Recipe</Link>
                    
                </div>
                <div>
                    <button className={styles.button} onClick={e => handleClick(e)}>Refresh</button>
                </div>

        <div className= {styles.filters}>
            <select name='' id='filter' >
                <option value="" >Select Order</option>
                <option value="asc">A/Z</option>
                <option value="desc">Z/A</option>
            </select>
            <br />
                <select name='' id='' className='filterContent' onClick={e => handleDiets(e)}>
                <option value="Diets" >Diets</option>
                 { allDiets?.map(diet => {
                    return ( <option value={diet.name}>{diet.name}</option>)
                
                    })}
                </select>
            <br />
                <select name='' id='' className='filterContent'>
                    <option value="">Spoonacular Score</option>
                    <option value="min">Min Score</option>
                    <option value="max">Max Score</option>
                </select>
            <br/>
                <select name="" id="" className='filterContent'>
                    <option value="All">All Recipes</option>
                    <option value="Created">Created</option>
                    <option value="Api">Existing</option>
                </select>
            </div>

        <div className={styles.containerRecipe}>
            {
                allRecipes?.map((r) => {
                    return (
                        <Link to={'/recipes/' + r.id}>
                        <Card className={styles.cards}
                            image={r.image}
                            title={r.title}
                            diets={r.diets.map(recipe => <p className={styles.diet} >{recipe.name}</p>)}
                            key={r.id}
                        />
                        </Link>
                    )
                })
            } 
        </div>
 
    </div>
  </div>
)}

export default Home;
