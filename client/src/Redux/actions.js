import axios from 'axios';

export function getRecipes() {
    return function (dispatch){
      axios.get("http://localhost:3001/recipes") // aca esta mi conexion entre el back y el front.... gracias thunk
      .then(recipe => {
        return dispatch({
            type: 'GET-RECIPES',
            payload: recipe.data,
        });
      })         
    };
}

export function getDiets(){
  return async function (dispatch){
    try {
      let diet = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: 'GET-DIETS',
        payload: diet.data
      })
    
  } catch (error){
    console.log(error);
  }
}
}
//ruta por nombre
export function getByTitle(title){
  return async function (dispatch){
    try{
      let byTitle = await axios.get( `http://localhost:3001/recipes?name=${title}`);
      return dispatch({
        type: 'GET_BY_NAME',
        payload: byTitle.data //me devuelve la accion... es lo q devuelve la ruta asignandole el title
      })
    } catch(error){
      console.log(error);
    }
  }
}

export function filterDiet(payload){ 
  return {
    type: 'FILTER_BY_DIET',
    payload
  }
}

export function orderByName(payload){
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
}

export function filterCreated(payload){
  return{
    type: 'FILTER_CREATED',
    payload
  }
}

export function orderScore(payload){
  return{
    type: 'ORDER_BY_SCORE',
    payload
  }
}

export function postRecipes(payload){
  return async function (dispatch) {
    let newRecipe = await axios.post("http://localhost:3001/recipes/recipe", payload);
    console.log(newRecipe);
    return newRecipe;
  }
}