

module.exports = function (sequelize, DataTypes) {

    let alias = "Orders"

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
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
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
        tableName: "orders",
        timestamps: false,
        freezeTableName: true
    }

    let Orders = sequelize.define(alias, cols, config);

    Orders.associate = function (models) {
        Orders.belongsTo(models.Users, {
            as: "user",
            foreignKey: "user_id"
        });
        Orders.hasMany(models.Payments, {
            as: "payments",
            foreignKey: "order_id"
        });
        Orders.belongsTo(models.Carts, {
            as: "cart",
            foreignKey: "cart_id"
        });
    }

    return Orders;
}
