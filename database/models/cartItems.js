

module.exports = function (sequelize, DataTypes) {

    let alias = "CartItem"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
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
