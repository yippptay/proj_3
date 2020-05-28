/****
 * Express
 **/
const express =         require("express");
const routes =          express.Router();
const { Schema } =      require("mongoose");
const Product =         require("../models/products.js");
const User =            require("../models/client.js");
const seed =            require("../models/seed.js");
const show =            console.log;

/****
 * Auto seeding
 **/
routes.get("/seed", (req, res) => {
  show("recieved");
  Product.insertMany(seed, (err, docs) => {
    if (err) {
      show(err);
    } else {
      show(docs);
    }
  });
  res.redirect("/products");
});

/****
 * Clear
 **/
routes.get("/clear", (req, res) => {
  Product.remove({}, (err, docs) => {
    if (err) {
      show(err);
    } else {
      show(docs);
      res.redirect("/products");
    }
  });
});

/****
 * Routes
 **/

// Create //
routes.post("/product", (req, res) => {
  Product.create(req.body, (err, docs) => {
    if (err) {
      show(err);
    } else {
      show(docs);
      res.redirect("/products");
    }
  });
});

// Destroy //
routes.delete("/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndRemove({ _id: id }, (err, docs) => {
    if (err) {
      show(err);
    } else {
      show(docs);
      res.redirect("/products");
    }
  });
});

// Edit //
routes.get("/:id/edit", (req, res) => {
  Product.find({ _id: req.params.id }, (err, docs) => {
    if (err) {
      show(err);
    } else {
      res.render("Edit", {
        product: docs,
      });
    }
  });
});

// Index //
routes.get("", (req, res) => {
  Product.find({}, (err, docs) => {
    if (err) {
      show(err);
    } else {
      res.render("Index", {
        products: docs,
      });
    }
  });
});

// New //
routes.get("/new", (req, res) => {
  res.render("New");
});

// Show //
routes.get("/:id", (req, res) => {
  Product.find({ _id: req.params.id }, (err, docs) => {
    if (err) {
      show(err);
    } else {
      res.render("Show", {
        product: docs,
      });
    }
  });
});

// Update //
routes.put("/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        show(err);
      } else {
        show(docs);
        res.redirect("/products/" + id);
      }
    }
  );
});
module.exports = routes;
