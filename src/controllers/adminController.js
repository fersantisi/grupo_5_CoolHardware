const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const usersFilePath = path.join(__dirname, '../data/users.json');
// const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//Databases
let db = require('../../database/models')


const adminController = {

    admin: (req, res) => {
        console.log('Entre al admin');
        res.render('./admin/adminIndex', { products })
    },

    list: (req, res) => {
        console.log('Entre al product list');
        res.render('./admin/adminList', { products });
    },

    create: (req, res) => {
        console.log('Entre al creador');
        db.ProductsCategory.findAll()
            .then((categories) => {
                console.log(categories)
                return res.render('./admin/createProduct', { categories });
            })
    },

    store: (req, res) => {
        let newProduct = {
            "id": products[products.length - 1].id + 1,
            "brand": req.body.brand,
            "name": req.body.name,
            "category": req.body.category,
            "price": req.body.price,
            "discount": req.body.discount,
            "image": req.file.filename,
            "description": req.body.description
        };

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t'));

        res.render('./admin/adminIndex', { products });
    },

    // users: (req, res) => {
    //     res.render('admin/userAdmin', { newUser: users });
    //     console.log('Entre al registro de perfiles');
    //     res.render('./admin/userAdmin');
    // },
        users: function (req, res) {
        db.Users.findAll()
            .then(function (user) {
                res.render("admin/userAdmin", { newUser: user })
                console.log('Entre al registro de perfiles');
                res.render('./admin/userAdmin');
            })
        },

            manage: (req, res) => {
                let product = products.find(product => product.id == req.params.id)
                console.log('Entre a administrador de producto');
                res.render('./admin/manageProduct', { product });
            },

                edit: (req, res) => {
                    let product = products.find((product) => {
                        return product.id == req.params.id;
                    });
                    res.render('./admin/editProduct', { product })
                },

                    update: (req, res) => {
                        let productToEdit = products.find((product) => {
                            return product.id == req.params.id;
                        });

                        let editedProduct = {
                            "id": productToEdit.id,
                            "brand": req.body.brand,
                            "name": req.body.name,
                            "category": req.body.category,
                            "price": req.body.price,
                            "discount": req.body.discount,
                            "image": req.body.image,
                            "description": req.body.description
                        };

                        let updatedJSON = products.map((product) => {
                            if (editedProduct.id == product.id) {
                                return product = editedProduct;
                            }
                            return product;
                        });

                        fs.writeFileSync(productsFilePath, JSON.stringify(updatedJSON, null, '\t'));

                        res.render('./admin/manageProduct', { product: editedProduct });
                    },

                        destroy: (req, res) => {
                            let productToDelete = products.find((product) => {
                                return product.id == req.params.id;
                            });

                            let removed = products.splice(products.indexOf(productToDelete), 1);

                            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t'));

                            res.redirect('/admin');
                        },
                            destroyUser: (req, res) => {
                                let userToDelete = users.find((users) => {
                                    return users.id == req.params.id;
                                });

                                let removed = products.splice(products.indexOf(userToDelete), 1);

                                fs.writeFileSync(usersFilePath, JSON.stringify(users, null, '\t'));

                                res.redirect('/admin');
                            }
    };

    module.exports = adminController;