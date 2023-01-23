const config = require("../config/config")

module.exports = function (sequelize, DataTypes) {

    let alias = "ProductsCategory"

    let cols = {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        desc: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        modified_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        },
        deleted_at: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }


    let config = {
        tableName: "productsCategory",
        timestamps: true
    }


    let ProductsCategory = sequelize.define(alias, cols, config);


    ProductsCategory.associate = function (models) {
        ProductsCategory.hasMany(models.Products, {
            as: "passwords",
            foreingKey: "category_id"
        });
    }

    return ProductsCategory;
}