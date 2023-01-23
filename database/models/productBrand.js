

module.exports = function (sequelize, DataTypes) {

    let alias = ""

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
        tableName: "",
        timestamps: false,
        freezeTableName: true

    }

    let aa = sequelize.define(alias, cols, config);

    CartItem.associate = function (models) {
        CartItem.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'carts_id'
        })
    }


    return CartItem;
}
