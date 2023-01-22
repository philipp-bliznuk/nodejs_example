import ProductModel from "../models/products.model.js";


const ProductsController = {
    create: async (request, response) => {
        try {
            const product = await ProductModel.create(request.body)
            response.status(201).json({
                product
            })
        } catch (err) {
            response.status(500).json({
                message: err
            })
        }
    },

    update: async (request, response) => {
        try {
            const product = await ProductModel.findByIdAndUpdate(
                request.params.id, request.body
            )
            response.status(200).json({
                product
            })
        } catch (err) {
            response.status(500).json({
                message: err
            })
        }
    },

    get: async (request, response) => {
        try {
            const product = await ProductModel.findById(
                request.params.id
            )
            response.status(200).json({
                product
            })
        } catch (err) {
            response.status(500).json({
                message: err
            })
        }
    },    

    list: async (request, response) => {
        try {
            const products = await ProductModel.find()
            response.status(200).json({
                products
            })
        } catch (err) {
            response.status(500).json({
                message: err
            })
        }
    },

    delete: async (request, response) => {
        try {
            await ProductModel.findByIdAndDelete(
                request.params.id
            )
            response.status(204).json({})
        } catch (err) {
            response.status(500).json({
                message: err
            })
        }
    },

}

export default ProductsController