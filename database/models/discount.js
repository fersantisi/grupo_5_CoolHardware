

module.exports = function (sequelize, DataTypes) {

    let alias = "Discount"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT
        },
        discount_percent: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }


    let config = {
        timestamp: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",

    }

    let Discount = sequelize.define(alias, cols, config);


    return Discount;
}
