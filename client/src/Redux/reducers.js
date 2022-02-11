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
            const dietFilter = action.payload === "all" ? recipes //recipes es la copia del estado global donde me traigo all recipes
            : recipes.filter(recipe => /*{
                let diet = recipe.diets.map( d => d.name);
                if (diet.includes(action.payload)){
                    return recipe;
                }
            }*/
            recipe.diets.map( r => r.name ).includes( action.payload )
            );
            return {
                ...state,
                allRecipes: dietFilter,
            }         
        case 'ORDER_BY_NAME':
            const orderRecipes = action.payload === 'asc' ? 
            state.allRecipes.sort((a,b)=>{
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1
                }
                    return 0;
            }) :
            state.allRecipes.sort((a,b)=>{
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1
                }
                    return 0;
            })
            return{
                ...state,
                allRecipes: orderRecipes
            }
        default:
            return state;
            
    }
}

export default rootReducer;