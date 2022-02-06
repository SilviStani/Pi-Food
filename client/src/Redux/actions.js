import axios from 'axios';

export function getRecipes() {
    return async function (dispatch){
        let recipe = await axios.get("https://localhost:3001/recipe",{}); // aca esta mi conexion entre el back y el front.... gracias thunk
        return dispatch({
            type: 'GET-RECIPES',
            payload: recipe.data,
        });
    };
}