const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "Products"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING
        },

        desc: {
            type: DataTypes.STRING
        },

        SKU:
        {
            type: DataTypes.STRING
        },

        category_id: {
            type: DataTypes.INTEGER
        },

        inventory_id: {
            type: DataTypes.INTEGER
        },

        price: {
            type: DataTypes.DECIMAL
        },

        discount_id: {
            type: DataTypes.INTEGER
        },

        brand_id: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        timestamp: true,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
    }


    let Products = sequelize.define(alias, cols, config);

    Products.associate = (models) => {
        Products.belongsTo(models.ProductCategory, {
            foreignKey: 'category_id',
            as: 'category'
        });
    };


    return Products;
}