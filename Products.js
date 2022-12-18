const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const products = [{
    id: 1,
    name: "Thumsup",
    price: 20,
    category: "Grocery"
},
{
    id: 2,
    name: "fanta",
    price: 25,
    category: "Grocery"
},
{
    id: 3,
    name: "rice",
    price: 30,
    category: "grains"
}];

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/products", function (req, res) {
    res.send(products);
});

app.get("/products/:id", function (req, res) {
    var productId = req.params.id;
    var product = products.find((c) => c.id === parseInt(productId));
    if (!product) {
        res.status(404).send("Product not found");
    } else res.send(product);
});

app.get("/products/category/:category", function (req, res) {
    var productCategory = req.params.category;
    let product = products.filter(p => p.category === productCategory)
    if (product.length <= 0) {
        res.status(404).send("Product not found");
    } else res.send(product);
});

app.post("/product", function (req, res) {
    const validateResult = validateProduct(req.body);
    if (validateResult.error) res.send(validateResult.error);
    else {
        var product = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        products.push(product);
        res.send(product);
    }
});

app.put("/products/:id", function (req, res) {
    const validateResult = validateProduct(req.body);
    if (validateResult.error) res.send(validateResult.error);
    else {
        var productId = req.params.id;
        var product = products.find((c) => c.id === parseInt(productId));
        let productindex = products.findIndex((c) => c.id === parseInt(productId));
        products[productindex].name = req.body.name;
        products[productindex].price = req.body.price;
        products[productindex].category = req.body.category;
        res.send(products[productindex]);
    }
});

app.delete("/products/:id", function (req, res) {
    var productId = req.params.id;
    var product = products.find((c) => c.id === parseInt(productId));
    if (!product) {
        res.status(404).send("Product not found");
    } else {
        products.splice(products.findIndex(c => c.id === product.id), 1);
        res.send(product);
    }
});

app.listen(3001);
console.log("listening the server on port 3001");

function validateProduct(product) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().integer().required(),
        category: Joi.string().required()
    });

    try {
        const result = schema.validate(product);
        return result;
    } catch (err) {
        return err;
    }
}