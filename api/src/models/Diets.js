const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diets', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://estaticos-cdn.elperiodico.com/clip/e8710f70-a9c4-4c6e-a34a-31f4c8a5476b_alta-libre-aspect-ratio_default_0.jpg"
    }
  },
  {
    timestamps: false
  });
};