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
            type: DataTypes.STRING,
            allowNull: false
        },

        desc: {
            type: DataTypes.STRING,
        },

        SKU:
        {
            type: DataTypes.STRING,
            allowNull: false
        },

        category_id: {
            type: DataTypes.INTEGER
        },

        inventory_id: {
            type: DataTypes.INTEGER
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        discount_id: {
            type: DataTypes.INTEGER
        },

        brand_id: {
            type: DataTypes.INTEGER
        },

        image: {
            type: DataTypes.STRING
        }
    }

    let config = {
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at"
    }


    let Products = sequelize.define(alias, cols, config);

    Products.associate = (models) => {
        Products.belongsTo(models.ProductsCategory, {
            foreignKey: 'category_id',
            as: 'category'
        });
        Products.belongsTo(models.Discount, {
            foreignKey: 'discount_id',
            as: 'discount'
        });
        Products.belongsTo(models.productBrand, {
            foreignKey: 'brand_id',
            as: 'brand'
        });
    };


    return Products;
}