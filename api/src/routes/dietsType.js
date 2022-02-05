const { Router } = require("express");
const router = Router();
const axios = require("axios") ;
const { Diets } = require("../db.js");
require('dotenv').config();
const { API_KEY, API_KEY2 ,API_KEY3 } = process.env;



router.get("/", async (req, resp, next) => {
try {
    const info = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const diets = info.data?.results.map(e => e.diets);
    const flatDiets = diets.flat().concat("vegetarian", "Ketogenic");
    const finalList = [...new Set(flatDiets)];
    console.log(finalList);

    finalList.forEach( e => {
        Diets.findOrCreate({
            where: {name: e}
        });
    });


    const allDiets = await Diets.findAll();
   

        resp.status(200).send(allDiets);
   
} catch (error) {
    next(error);
}
});




module.exports = router;