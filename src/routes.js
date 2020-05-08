const express = require('express');
const routes = express.Router();
const multer = require('./app/middlewares/multer');
const ProductController = require('./app/controller/product');
const homeController = require('./app/controller/home');
const SearchController = require('./app/controller/search');



// Index
routes.get("/",homeController.index);

//Search
routes.get('/products/search',SearchController.index);

// Rotas para Produtos
routes.get('/products/create',ProductController.create);
routes.get('/products/:id',ProductController.show);
routes.get('/products/:id/edit',ProductController.edit);
routes.put('/products', multer.array("photos",6) ,ProductController.put)
routes.post('/products',multer.array("photos",6) ,ProductController.post);
routes.delete('/products',ProductController.delete);

//Alias
routes.get('/ads/create',(req,res)=>{
    res.redirect('/products/create')
})



module.exports = routes;