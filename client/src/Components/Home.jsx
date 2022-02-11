import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes, filterDiet, orderByName, getDiets} from '../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

function Home() {

const dispatch = useDispatch();
const allRecipes = useSelector(state => state.allRecipes);
const allDiets = useSelector(state => state.diets);

const [currentPage, setCurrentPage] = useState(1); 
const [recipesPagination, setRecipesPagination] = useState(9);
const lastRecipeNumber = currentPage * recipesPagination;
const firstRecipeNumber = lastRecipeNumber - recipesPagination;
const currentRecipes = allRecipes.slice(firstRecipeNumber, lastRecipeNumber );

const [order, setOrder] = useState(''); //para setear los estados en los filtros


const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
}

useEffect(() => {
    dispatch(getRecipes());
}, [dispatch]);

useEffect( () => {
    dispatch(getDiets());
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getRecipes());
}

function handleDiets(e) {
    e.preventDefault();
    dispatch(filterDiet(e.target.value));
    setCurrentPage(1);
}

function handleOrderByName(e){
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
}


  return (
     <div className={styles.All}>
         
        <div className={styles.wrapper}>
        
            <Link to='/'>
            <  div className={styles.title}> <h1 className={styles.h1}>Recipers Site</h1> </div> </Link>
                <div className={styles.createRecipe}>
                    <Link to='/recipes' className={styles.a}>Create Your Recipe</Link>
                  <SearchBar className={styles.search}></SearchBar>
                </div>
                <div>
                    <button className={styles.button} onClick={e => handleClick(e)}>Refresh</button>
                   
                </div>
                
        <div className= {styles.filters}>
            <select name='' id='filter' onChange={(e) => handleOrderByName(e)} >
                <option value="" >Select Order</option>
                <option value="asc">A/Z</option>
                <option value="desc">Z/A</option>
            </select>
            <br />
                <select className='filterContent' onChange={(e) => handleDiets(e)}>
                <option value="all" >Diets</option>
                 { 
                 allDiets?.map(diet => {
                     console.log(allDiets)
                    return  <option value={diet.name} key={diet.id}>{diet.name}</option>
                
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
              currentRecipes?.map((r) => {
                    return (
                        <Link to={'/recipes/' + r.id}>
                        <Card className={styles.cards}
                            image={r.image}
                            title={r.title}
                            diets={r.diets.map(recipe => <p className={styles.diet} >{recipe.name}</p>)}
                            spoonacularScore={`Spooancular Score: ${r.spoonacularScore}`}
                            servings={`Servings: ${r.servings}`}
                            key={r.id}
                        />
                        </Link>
                    )
                })
            }
        </div>
                <Pagination className = {styles.pagination}
                    recipesPagination = {recipesPagination}
                    allRecipes = {allRecipes.length}
                    pagination = {pagination}
                />
    </div>
</div>
)}

export default Home;
