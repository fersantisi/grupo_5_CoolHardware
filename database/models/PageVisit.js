

module.exports = function (sequelize, DataTypes) {

    let alias = "PageVisit"

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
        url: {
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

    let PageVisit = sequelize.define(alias, cols, config);

    PageVisit.associate = function(models){
        PageVisit.belongsTo(models.Users,{
            as: "user",
            foreignKey: "user_id"
        });
    }


    return PageVisit;
}
