import express from 'express'
import bodyParser from 'body-parser'
import ProductsRouter from './routes/products.route.js'
import db_middleware from "./db/db.js"

const app = express()
app.use(express.json({limit: '1mb'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(db_middleware)

app.use("/products", ProductsRouter)


let port = 8080
app.listen(port, () => {
    console.log(`Server is up and running on port numner ${port}`)
})
