/*import { Router } from "express";
const router = Router();*/
const {Sequelize} = require('sequelize');
const axios = require("axios");
const { Recipe, Diets } = require("../db");
const { API_KEY, API_KEY2, API_KEY3 } = process.env;

const getApiRecipes = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY3}&number=100&addRecipeInformation=true`);
    const recipeInfo = await apiUrl.data.results.map( e => {
        return {
            id: e.id,
            title: e.title,
            summary: e.summary,
            spoonacularScore: e.spoonacularScore,
            healthScore: e.healthScore,
            servings: e.servings,
            readyInMinutes: e.readyInMinutes,
            image: e.image,
            diets: e.diets.map( (e) => {return {name: e}}),
            steps: e.analyzedInstructions[0]?.steps.map((s) => {return s.step}),
            dishTypes: e.dishTypes.map(e => {return {name: e}})
        };

    });
    return recipeInfo;
};

const getDbRecipes = async () => {
    return await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ["name"],
            through:{
                attributes: [],
            }
        } 
    });
};


const getfusionRecipes = async () => {
    const apirecipe = await getApiRecipes();
    const dbrecipe = await getDbRecipes();
    const allRecipes = [...apirecipe, ...dbrecipe];
   // console.log(allRecipes);
    return allRecipes;
};

//console.log(getfusionRecipes());

module.exports ={
    getfusionRecipes,
    getApiRecipes,
    getDbRecipes
} ;