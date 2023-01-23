

module.exports = function (sequelize, DataTypes) {

    let alias = "PageVisit"

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
        url: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }


    let config = {
        tableName: "PageVisit",
        timestamps: false,
        freezeTableName: true

    }

    let PageVisit = sequelize.define(alias, cols, config);

    PageVisit.associate = function(models){
        PageVisit.belongsTo(models.Users,{
            as: "user",
            foreignKey: "user_id"
        });
    }


    return PageVisit;
}