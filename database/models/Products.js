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

        product_category_id: {
            type: DataTypes.INTEGER
        },

        stock: {
            type: DataTypes.INTEGER
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },

        discount: {
            type: DataTypes.INTEGER
        },

        product_brand_id: {
            type: DataTypes.INTEGER
        },

        image: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
        freezeTableName: true
    }


    let Products = sequelize.define(alias, cols, config);

    Products.associate = (models) => {
        Products.belongsTo(models.ProductsCategory, {
            foreignKey: 'product_category_id',
            as: 'category'
        });
        Products.belongsTo(models.productBrand, {
            foreignKey: 'product_brand_id',
            as: 'brand'
        });
    };


    return Products;
}