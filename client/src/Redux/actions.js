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
  return function (dispatch){
    axios.get("http://localhost:3001/types")
    .then(diet =>{
      return dispatch({
        type: 'GET-DIETS',
        payload: diet.data,
      })
    })
  }
}

export function filterDiet(payload){ 
  return {
    type: 'FILTER_BY_DIET',
    payload
  }
}