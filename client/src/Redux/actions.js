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