

module.exports = function (sequelize, DataTypes) {

    let alias = "Order"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        tax: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'carts',
                key: 'id'
            }
        }
    }


    let config = {
        timestamps: false,
        freezeTableName: true,
        createdAt: "created_at",
    }

    let Order = sequelize.define(alias, cols, config);

    Order.associate = function (models) {
        Order.belongsTo(models.Users, {
            as: "users",
            foreignKey: "user_id"
        });
        Order.hasMany(models.Payments, {
            as: "payments",
            foreignKey: "order_id"
        });
        Order.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "cart_id"
        });
    }

    return Order;
}
