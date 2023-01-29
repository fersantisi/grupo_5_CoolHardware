

module.exports = function (sequelize, DataTypes) {

    let alias = "Cart"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }


    let config = {
        timestamps: true,
        cratedAt: 'created_at',
    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.hasMany(models.CartItem, {
            as: 'items',
            foreignKey: 'carts_id'
        })
    }


    return Cart;
}
