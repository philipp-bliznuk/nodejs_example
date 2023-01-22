import express from 'express';
import ProductsController from '../controllers/products.controller.js';

const ProductsRouter = express.Router()

ProductsRouter.get("/", async (request, response) => {
    await ProductsController.list(request, response)
})

ProductsRouter.post("/", async (request, response) => {
    await ProductsController.create(request, response)
})

ProductsRouter.put("/:id", async (request, response) => {
    await ProductsController.update(request, response)
})

ProductsRouter.get("/:id", async (request, response) => {
    await ProductsController.get(request, response)
})

ProductsRouter.delete("/:id", async (request, response) => {
    await ProductsController.delete(request, response)
})

export default ProductsRouter
