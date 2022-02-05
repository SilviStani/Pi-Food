const { Router } = require("express");
const router = Router();
const axios = require("axios") ;
const {Diets, Recipe} = require("../db.js");
const { getfusionRecipes } = require("../Controllers/recipe.js") ;
const { getIdAll } = require("../Controllers/byId.js") ;



router.get("/", async (req, resp, next) => {
try {
    const name = req.query.name;
    const allRecipes = await getfusionRecipes();
    if(name){
        let recipe = allRecipes.filter(r => r.title?.toLowerCase().includes(name.toString().toLowerCase()))
        if(recipe.length >=1){
            resp.status(200).send(recipe);
        } else {
            resp.status(404).send("Recipe Cannot Found");
        }
    } else {
        resp.status(200).send(allRecipes);
    }
    
} catch (error) {
    next(error);
}
});

router.get("/:idRecipe", async (req, res, next) => {
    try {
        const id = req.params.idRecipe;
        const recipeDetail = await getIdAll(id);
        if(!recipeDetail){
            return res.status(404).json("No recipe under that id");
        }
        res.status(200).json(recipeDetail);

    } catch (error) {
        next(error);
    }
});

router.post("/create", async (req, res, next) => {

try {
    const { id, title, 
            summary, spoonacularScore, 
            healthScore, steps, 
            readyInMinutes, image, MadeOnDb} = req.body;

    const newRecipe = await Recipe.create({
        id, title, 
        summary, spoonacularScore, 
        healthScore, steps, 
        readyInMinutes, image, MadeOnDb
    });

    const recipeDiet = await Diets.findAll({
        where:{
            name: diets
        }
    });

    newRecipe.addDiet(recipeDiet);    

    return res.status(200).json("Your Recipe was Successfully Created");

} catch (error) {
    next(error);
}

});




module.exports = router;