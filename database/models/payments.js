

module.exports = function (sequelize, DataTypes) {

    let alias = "Payments"

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
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        billing_address_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }


    let config = {
        tableName: "Payments",
        timestamps: false,
        freezeTableName: true

    }

    let Payments = sequelize.define(alias, cols, config);

    Payments.associate = function(models){
        Payments.belongsTo(models.Users,{
        as: "user",
        foreignKey: "user_id"
        });
        Payments.belongsTo(models.Orders,{
        as: "order",
        foreignKey: "order_id"
        });
        Payments.belongsTo(models.Addresses,{
        as: "billing_address",
        foreignKey: "billing_address_id"
        });
        }


    return Payments;
}
