

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
        tableName: 'carts',
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
        freezeTableName: true
    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsTo(models.CartItem, {
            as: 'cartItem',
            foreignKey: 'carts_id'
        })
    }


    return Cart;
}
