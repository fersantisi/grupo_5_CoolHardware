

module.exports = function (sequelize, DataTypes) {

    let alias = "productBrand"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }


    let config = {
        tableName: 'product_brand',
        timestamps: false,
        createdAt:"created_at",
        modifiedAt:"modified_at",
        deletedAt:"deleted_at",
        freezeTableName: true

    }

    let productBrand = sequelize.define(alias, cols, config);

    productBrand.associate = function (models) {
        productBrand.hasMany(models.Products, {
            foreignKey: 'brand_id',
            as: 'product'
        });
    }


    return productBrand;
}
