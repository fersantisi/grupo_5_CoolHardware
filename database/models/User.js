const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "Users"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        fist_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nickname:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        admin: {
            type: DataTypes.INTEGER
        },
        
       is_active: {
            type:  DataTypes.INTEGER
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
        freezeTableName: true
    }


    let Users = sequelize.define(alias, cols, config);


    // Users.associate = function (models) {
    //     Users.belongsTo(models.Carts, {
    //         as: "carts",
    //         foreignKey: "carts_id"
    //     });
        
    // }

    return Users;
}