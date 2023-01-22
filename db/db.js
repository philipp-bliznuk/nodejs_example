import mongoose from "mongoose";
import 'dotenv/config'

const DB_URL = process.env.MONGODB_URI 
if (!DB_URL) {
    throw new Error("No DB url in .env file")
}


let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}


async function connect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const options = {
            bufferCommands: false,
            maxPoolSize: 5,
            serverSelectionTimeoutMS: 5000,
            family: 4,            
        }

        cached.promise = mongoose.connect(DB_URL, options).then(mongoose => {
            console.log("Connected to mongo")
            mongoose.connection.on(
                "error", err => {
                    console.error(`Failed connect to mongo: ${err}`)
                }
            )
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (err) {
        cached.conn = null
        throw err
    }

    return cached.conn
}


const db_middleware = async (request, response, next) => {
    try {
        await connect()
        next()
    } catch (err) {
        console.error(err)
        response.status(500).json({
            message: String(err)
        })
    }
}

export default db_middleware
