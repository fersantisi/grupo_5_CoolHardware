const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "ProductsCategory"

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
        tableName: 'product_category',
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
        freezeTableName: true
    }


    let ProductsCategory = sequelize.define(alias, cols, config);


    ProductsCategory.associate = function (models) {
        ProductsCategory.hasMany(models.Products, {
            as: "products",
            foreignKey: "product_category_id"
        });
    }

    return ProductsCategory;
}