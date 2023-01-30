const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "Users"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        Fname: {
            type: DataTypes.STRING,
        },

        Lname: {
            type: DataTypes.STRING
        },

        nickname:
        {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING
        },

        email_verified: {
            type: DataTypes.INTEGER
        },

        password_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
    }


    let Users = sequelize.define(alias, cols, config);


    Users.associate = function (models) {
        Users.hasOne(models.Passwords, {
            as: "passwords",
            foreingKey: "user_id"
        });
        Users.hasMany(models.Order, {
            as: "orders",
            foreignKey: "user_id"
        });
        Users.hasMany(models.Payments, {
            as: "payments",
            foreignKey: "user_id"
        });
        Users.hasMany(models.PageVisit, {
            as: "page_visit",
            foreignKey: "user_id"
        });
        Users.hasMany(models.Addresses, {
            as: "addresses",
            foreignKey: "user_id"
        });
    }

    return Users;
}