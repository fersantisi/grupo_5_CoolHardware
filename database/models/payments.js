

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
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at"
    }

    let Payments = sequelize.define(alias, cols, config);

    Payments.associate = function(models){
        Payments.belongsTo(models.Users,{
        as: "users",
        foreignKey: "user_id"
        });
        Payments.belongsTo(models.Order,{
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
