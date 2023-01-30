

module.exports = function (sequelize, DataTypes) {

    let alias = "Addresses"

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
        street_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        directional: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }


    let config = {
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
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
