const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    selectedTheme: {
      type: DataTypes.STRING,
    },
    quirkyWeatherComparisons: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
