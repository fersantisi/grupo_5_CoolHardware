

module.exports = function (sequelize, DataTypes) {

    let alias = "Addresses"

    let cols = {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        street_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        directional: {
            type: Sequelize.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zip_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country_code: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }


    let config = {
        tableName: "Addresses",
        timestamps: false,
        freezeTableName: true

    }

    let Addresses = sequelize.define(alias, cols, config);

    Addresses.associate = function(models){
        Addresses.belongsTo(models.Users,{
            as: "user",
            foreignKey: "user_id"
        });
        Addresses.hasMany(models.Payments,{
            as: "payments",
            foreignKey: "billing_address_id"
        });
    }


    return Addresses;
}
