

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
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        modified_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }


    let config = {
        tableName: "",
        timestamps: false,
        freezeTableName: true

    }

    let Discount = sequelize.define(alias, cols, config);


    return Discount;
}
