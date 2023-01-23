

module.exports = function (sequelize, DataTypes) {

    let alias = "CartItem"

    let cols = {
        id: {
            type: CartItem.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: CartItem.INTEGER,
            allowNull: false
        },
        discount: {
            type: CartItem.INTEGER,
            allowNull: false
        },
        price: {
            type: CartItem.INTEGER,
            allowNull: false
        },
        carts_id: {
            type: CartItem.INTEGER,
            allowNull: false
        }
    }


    let config = {
        tableName: "cartItem",
        timestamps: false,
        freezeTableName: true
    }

    let CartItem = sequelize.define(alias, cols, config);

    CartItem.associate = function (models) {
        CartItem.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'carts_id'
        })
    }


    return CartItem;
}
