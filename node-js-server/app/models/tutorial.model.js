module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
  });

  return Tutorial;
};
