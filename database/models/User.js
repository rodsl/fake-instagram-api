module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.CHAR(60),
        allowNull: false
      },
      dateOfBirth: {
        type: 'TIMESTAMP',
        allowNull: false
      }
    }
  );

  return User;
};
