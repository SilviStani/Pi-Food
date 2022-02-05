const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    spoonacularScore:{
      type: DataTypes.INTEGER,

    },

    healthScore:{
      type: DataTypes.INTEGER,
      
    },

    steps:{
      type: DataTypes.ARRAY(DataTypes.JSON),
    },

    servings: {
      type: DataTypes.INTEGER,
    },

    readyInMinutes: {
      type: DataTypes.INTEGER,
    },

    image:{
      type: DataTypes.STRING,
    },

    MadeOnDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      },

      dishTypes: {
        type: DataTypes.ARRAY(DataTypes.JSON)
      }


  });
};
//Me traigo info tal como está en la api para no tener problemas de matching
/*
por ejemplo: 
name = es title
ResumendelPlato = summary
puntuacion = spooncularScore 
Nivel de comida saludable = healthScore
Paso a paso = steps (que esta dentro de un arreglo (analized instructions)  => que contiene objetos )

Me traje extras como por ejemplo, ready in minutes y servings q son 2 datos q a las mujeres nos interesa XD
*/