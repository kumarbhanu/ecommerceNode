import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import productRoutes from './routes/productRoutes.js'

const app=express()
dotenv.config()
app.use(cors())
connectDb()
app.use('/api/products',productRoutes)
const PORT=5000
app.listen(PORT,()=>console.log(`app running at port ${PORT}`))