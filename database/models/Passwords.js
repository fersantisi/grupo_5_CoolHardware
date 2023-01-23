const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "Passwords"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        hashed_password: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "passwords",
        timestamps: false
    }


    let Passwords = sequelize.define(alias, cols, config);

    Passwords.associate = function (models) {
        Passwords.belongsTo(models.Users, {
            as: "user",
            foreignKey: "user_id"
        });
    }


    return Passwords;
}