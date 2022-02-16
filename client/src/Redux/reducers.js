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
                filterRecipes: action.payload,
            };

        case 'GET-DIETS':
            return {
                ...state,
                diets: action.payload,
            } 
        case 'FILTER_BY_DIET':
            const recipes = state.filterRecipes;
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
                filterRecipes: dietFilter,
                
            } 
        case 'ORDER_BY_NAME':
            let orderRecipes = action.payload === 'asc' ? 
            state.filterRecipes.sort( function (a,b) {
                if(a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1;
                }
                if(b.title.toLowerCase() > a.title.toLowerCase()){
                    return -1
                }
                    return 0;
            }) :
            state.filterRecipes.sort( function ( a, b) {
                if(a.title.toLowerCase() > b.title.toLowerCase()){
                    return -1;
                }
                if(b.title.toLowerCase() > a.title.toLowerCase()){
                    return 1
                }
                    return 0;
            })
            return{
                ...state,
                filterRecipes: orderRecipes
            }

            case 'FILTER_CREATED':
                let recipesFilter = [];
                if( action.payload === 'All'){
                   
                    recipesFilter = state.allRecipes;
                   
                } else if( action.payload === 'Created'){
                   
                    recipesFilter = state.allRecipes.filter( e => e.MadeOnDb);
                   
                } else if( action.payload === 'Api'){
                    
                    recipesFilter = state.allRecipes.filter( e => !e.MadeOnDb);
                    
                }
                return{
                    ...state,
                    filterRecipes: recipesFilter
                }
                 /*const createdFilter = action.payload === 'Created' ? state.filterRecipes.filter ( e => e.MadeOnDb)
                : state.filterRecipes.filter ( e=> !e.MadeOnDb);
                return {
                    ...state,
                    filterRecipes: action.payload === "All" ? state.allRecipes : createdFilter
                }*/
              

            case 'ORDER_BY_SCORE':
                    let orderScore = action.payload === 'min' ? 
                    state.filterRecipes.sort( function (a,b) {
                        if(a.spoonacularScore > b.spoonacularScore){
                            return 1;
                        }
                        if(b.spoonacularScore > a.spoonacularScore) {
                            return -1
                        }
                            return 0;
                    }) :
                    state.filterRecipes.sort( function ( a, b) {
                        if(a.spoonacularScore > b.spoonacularScore){
                            return -1;
                        }
                        if(b.spoonacularScore > a.spoonacularScore){
                            return 1
                        }
                            return 0;
                    })
                    return{
                        ...state,
                        filterRecipes: orderScore
                    }
                    
                    case 'GET_BY_NAME':
                        return{
                            ...state,
                            filterRecipes: action.payload
                        }
                    case 'POST_RECIPE':
                        return {
                            ...state
                        }
                        case 'GET_DETAILS':
                            return {
                                ...state,
                                detail: action.payload
                            }
                default:
                        return state;
            
    }
}

export default rootReducer;