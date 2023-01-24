

module.exports = function (sequelize, DataTypes) {

    let alias = "productBrand"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }


    let config = {
        timestamp: true,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",

    }

    let productBrand = sequelize.define(alias, cols, config);

    productBrand.associate = function (models) {
        productBrand.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'carts_id'
        })
    }


    return productBrand;
}
