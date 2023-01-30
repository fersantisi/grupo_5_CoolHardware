

module.exports = function (sequelize, DataTypes) {

    let alias = "ProductInventory"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }


    let config = {
        timestamp: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
    }

    let ProductInventory = sequelize.define(alias, cols, config);

    ProductInventory.associate = function (models) {
        ProductInventory.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'carts_id'
        })
    }


    return ProductInventory;
}
