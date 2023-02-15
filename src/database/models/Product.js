const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "Product"

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
        description: {
            type: DataTypes.STRING,
        },

        category_id: {
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

        brand_id: {
            type: DataTypes.INTEGER
        },

        image: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: 'product',
        timestamps: false,
        createdAt: "created_at",
        modifiedAt: "modified_at",
        deletedAt: "deleted_at",
        freezeTableName: true
    }


    let Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
        Product.belongsTo(models.Brand, {
            foreignKey: 'brand_id',
            as: 'brand'
        });
    };


    return Product;
}