const db = require('../database/models');
const { sequelize } = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {

    products: async (req, res) => {
        let products = await db.Product.findAll({
            include: ['brand', 'category']
        })
        await res.json(products);
    },

    categories: async (req, res) => {
        let categories = await db.Category.findAll()
        await res.json(categories);
    },

    brands: async (req, res) => {
        let brands = await db.Brand.findAll()
        await res.json(brands);
    },

    users: async (req, res) => {
        let users = await db.User.findAll()
        await res.json(users);
    },

    admins: async (req, res) => {
        let admins = await db.User.findAll({
            where: {
                admin: 1
            }
        })
        await res.json(admins);
    },

    categoryCount: async (req, res) => {
        let categories = await db.Category.findAll({
            attributes: {
                include: [[sequelize.fn("COUNT", sequelize.col("category.id")), "productCount"]]
            },
            include: ['products'],
            group: ['category.id']
        })

        await categories.forEach(category => {
            if (category.dataValues.products.length == 0) {
                category.dataValues.productCount = 0
            }
        });
        await res.json(categories);
    },
    brandCount: async (req, res) => {
        let brands = await db.Brand.findAll({
            attributes: {
                include: [[sequelize.fn("COUNT", sequelize.col("brand.id")), "productCount"]]
            },
            include: ['products'],
            group: ['brand.id']
        })

        await brands.forEach(brand => {
            if (brand.dataValues.products.length == 0) {
                brand.dataValues.productCount = 0
            }
        });
        await res.json(brands);
    },
    lastUser: async (req, res) => {
        let user = await db.User.findOne({
            order: [ [ 'created_at', 'DESC' ]],
        });
        user.dataValues.image = await `http://localhost:3030/images/users/${user.dataValues.image}`;
        await res.json(user);
    },

}

module.exports = apiController;