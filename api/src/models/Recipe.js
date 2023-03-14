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
      unique: true 
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
      validate: {
        min:0,
        max: 100
      }

    },

    healthScore:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        min: 0,
        max: 100
      }
      
    },

    steps:{
      type: DataTypes.STRING,
    },

    servings: {
      type: DataTypes.INTEGER,
    },

    readyInMinutes: {
      type: DataTypes.INTEGER,
    }, 

    image:{
      type: DataTypes.STRING,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    },

    MadeOnDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      },

      dishTypes: {
        type: DataTypes.ARRAY(DataTypes.JSON)
      }


  }, {
    timestamps: false
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