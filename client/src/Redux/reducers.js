const initialState = {
    recipes: [], //me traigo todo
    filterRecipes: [], // hago el filtro y me guardo el state
    diets: [] , // es ovbio
    detail: [] // detalles por id
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET-RECIPES':
            return {
                ...state,
                recipes: action.payload,
            };
            
    
        default:
            return state;
            
    }
}

export default rootReducer;