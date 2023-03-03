const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "Category"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }


    let config = {
        tableName: 'category',
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
        freezeTableName: true
    }


    let Category = sequelize.define(alias, cols, config);


    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        });
    }

    return Category;
}