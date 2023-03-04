//DB
const db = require('../database/models');
const { sequelize } = require("../database/models");
const { validationResult } = require('express-validator');
const Op = db.Sequelize.Op;


const adminController = {

    admin: async (req, res) => {
        let products = await db.Product.findAll({
            include: ['brand', 'category']
        })
        await res.render('./admin/adminIndex', { products })
    },

    list: (req, res) => {
        console.log('Entre al admin list');
        db.Product.findAll({
            include: ['brand', 'category']
        })
            .then(function (products) {
                console.log('Entre al product list');
                res.render('./admin/adminList', { products });
            })
    },

    create: async (req, res) => {
        console.log('Entre al creador');
        let categories = await db.Category.findAll();

        let brands = await db.Brand.findAll();
        
        return res.render('./admin/createProduct', {brands, categories });
            
    },

    store: async (req, res) => {

        const result = validationResult(req)
        if (result.errors.length > 0) {
            let categories = await db.Category.findAll();

            let brands = await db.Brand.findAll();

            return res.render('./admin/createProduct', {brands, categories, errors: result.mapped(), oldData: req.body })
        }

        await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file.filename,
            category_id: req.body.category,
            brand_id: req.body.brand

        })
        
        res.redirect('list');
    },

    users: function (req, res) {
        db.User.findAll()
            .then(function (user) {
                res.render("admin/userAdmin", { newUser: user })
                console.log('Entre al registro de perfiles');
            })
    },

    manage: (req, res) => {
        console.log('Entre a administrador de producto');
        db.Product.findByPk(req.params.id, {
            include: ['brand']
        })
            .then(function (product) {
                res.render('./admin/manageProduct', { product });
            })
            .catch(error => console.log(error))
    },

    edit: (req, res) => {
        let categories = {};
        db.Category.findAll()
            .then((result) => {
                categories = result;
            })
        let brands = {};
        db.Brand.findAll()
            .then((result) => {
                brands = result;
            })

        db.Product.findByPk(req.params.id, {
            include: ['brand', 'category']
        })
            .then(function (product) {
                res.render('./admin/editProduct', { product, categories, brands })
            })
            .catch(error => console.log(error))

    },

    update: async (req, res) => {
        await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file.filename,
            category_id: req.body.category,
            brand_id: req.body.brand

        },
        {
            where: {
                id: req.params.id
            }
        })
        
        res.redirect('/admin/manageProduct/' + req.params.id);
    },

    destroyProduct: async (req, res) => {
        await db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/admin/list');
    },

    destroyUser: async (req, res) => {
        await db.User.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/admin/userAdmin');

    },
    updateAdmin: async (req,res) =>{
        let isAdmin = 0
        let user = await db.User.findByPk(req.params.id)
        if(!user.admin){
            isAdmin = 1 
        }
        await db.User.update({
           admin: isAdmin
        },
        {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin/userAdmin');
    },
    search: async (req,res) => {
        let products = await db.Product.findAll({
            where: {
                [Op.or]:{
                name: {[Op.like]:`%${req.query.search}%`},
                '$category.name$': {[Op.like]:`%${req.query.search}%`},
                '$brand.name$': {[Op.like]:`%${req.query.search}%`},
                }
        },
            include: ['brand', 'category']
        })
        res.render('./admin/adminList', {products});    
    }



};

module.exports = adminController;