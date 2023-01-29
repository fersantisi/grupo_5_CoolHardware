

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
        timestamps: false,
    }

    let CartItem = sequelize.define(alias, cols, config);

    CartItem.associate = function (models) {
        CartItem.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'carts_id'
        })
    }


    return CartItem;
}
