const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    list: (req, res) =>{
        console.log('Entre al product list');
        res.render('./products/list', {products});    
    },

    productos: (req, res) =>{
        let product =  products.find( product => product.id == req.params.id)
        console.log(product);
        console.log('Entre al productDetail');
        res.render('./products/detail', {product});
    },
    store: (req, res) => {
        let newProduct = {
            "brand": req.body.brand,
            "name": req.body.name,
            "category": req.body.category,
            "price": req.body.price,
            "discount": req.body.discount,
            "description": req.body.description,
            "image": req.file.filename
        }
        products.push(newProduct);
    fs.writeFileSync(usersFilePath, JSON.stringify(products, null, '\t'));
    return res.render('index', { products });
},
}

module.exports = productController;