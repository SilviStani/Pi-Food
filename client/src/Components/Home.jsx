import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes, filterDiet, orderByName, filterCreated, getDiets, orderScore} from '../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

function Home() {

const dispatch = useDispatch();
const allRecipes = useSelector(state => state.filterRecipes);
const allDiets = useSelector(state => state.diets);
console.log("recetas", allRecipes)
const [currentPage, setCurrentPage] = useState(1); 
const [recipesPagination,setRecipesPagination] = useState(9);
const lastRecipeNumber = currentPage * recipesPagination;
const firstRecipeNumber = lastRecipeNumber - recipesPagination;
const currentRecipes = allRecipes.slice(firstRecipeNumber, lastRecipeNumber );

const [order, setOrder] = useState(''); //para setear los estados en los filtros


const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
}

useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
}, [dispatch]);

function handleClick(e){
    e.preventDefault();
    dispatch(getRecipes());
    dispatch(getDiets());
}

function handleDiets(e) {
    e.preventDefault();
    dispatch(filterDiet(e.target.value));
    setCurrentPage(1);
}

function handleOrderByName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  
}

function handleFilterCreated(e){
    dispatch(filterCreated(e.target.value));
}

function handlerOrderScore(e){
    e.preventDefault();
    dispatch(orderScore(e.target.value))
    setCurrentPage(1);
    setOrder(e.target.value);
}

  return (
     <div className={styles.All}>
         
        <div className={styles.wrapper}>
        
            <Link to='/'>
            <  div className={styles.title}> <h1 className={styles.h1}>Recipers Site</h1> </div> </Link>
                <div className={styles.createRecipe}>
                    <Link to='/recipes' className={styles.a}>Create Your Recipe</Link>
                  <SearchBar className={styles.search}/>
                </div>
                <div>
                    <button className={styles.button} onClick={e => handleClick(e)}>Refresh</button>
                    <Pagination className = {styles.pagination}
                    recipesPagination = {recipesPagination}
                    allRecipes = {allRecipes.length}
                    pagination = {pagination}
                />
                </div>
                
        <div className= {styles.filters}>
            <select name='' id='filter' onChange={(e) => handleOrderByName(e)} >
                <option value="order" >Select Order</option>
                <option value="asc">A/Z</option>
                <option value="desc">Z/A</option>
            </select>
            <br />
                <select onChange={(e) => handleDiets(e)}>
                <option value="all" >Diets</option>
                 { 
                 allDiets?.map(diet => {
                     console.log(allDiets)
                    return  <option value={diet.name} key={diet.id}>{diet.name}</option>
                
                    })}
                </select>
            <br />
                <select name='' id='' onChange={ (e) => {handlerOrderScore(e)}}>
                    <option value="score">Spoonacular Score</option>
                    <option value="min">Min Score</option>
                    <option value="max">Max Score</option>
                </select>
            <br/>
                <select name="" id="" onChange={(e)=>{handleFilterCreated(e)}}>
                    <option value="All">All Recipes</option>
                    <option value="Created">Created</option>
                    <option value="Api">Existing</option>
                </select>
            </div>
           
        <div className={styles.containerRecipe}>
            {
              currentRecipes?.map((r) => {
                    return (
                        <Link to={ `/recipes/${r.id}` }>
                        <Card className={styles.cards}
                            image={r.image}
                            title={r.title}
                            dishTypes={r?.dishTypes?.map( dishtype => <p>{dishtype.name}</p>)}
                            diets={r.diets.map(recipe => (<p className={styles.diet} >{recipe.name}</p>))}
                            spoonacularScore={`Spooancular Score: ${r.spoonacularScore}`}
                            servings={`Servings: ${r.servings}`}
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
