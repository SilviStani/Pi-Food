const initialState = {
    allRecipes: [], //me traigo todo
    filterRecipes: [], // hago el filtro y me guardo el state
    diets: [] , // es ovbio
    detail: [] // detalles por id
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET-RECIPES':
            return {
                ...state,
                allRecipes: action.payload,
                copyRecipes: action.payload,
            };

        case 'GET-DIETS':
            return {
                ...state,
                diets: action.payload,
            } 
        case 'FILTER_BY_DIET':
            const recipes = state.copyRecipes;
            const dietFilter = action.payload === "" ? recipes 
            : recipes.filter(r => {
                let diet = r.diets.map( d => d.name);
                if (diet.includes(action.payload)){
                    return r;
                }
            })
            return {
                ...state,
                allRecipes: dietFilter,
            }         
    
        default:
            return state;
            
    }
}

export default rootReducer;