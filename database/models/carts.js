

module.exports = function (sequelize, DataTypes) {

    let alias = "Carts"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        }
    }


    let config = {
        tableName: "",
        timestamps: false,
        freezeTableName: true
    }

    let Carts = sequelize.define(alias, cols, config);

    Carts.associate = function (models) {
        Carts.hasMany(models.Cart, {
            as: 'items',
            foreignKey: 'carts_id'
        })
    }


    return Carts;
}
