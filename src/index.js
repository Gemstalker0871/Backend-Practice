//require('dotenv').config({path: './env'})                 better way of doing this below
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({path: './env'})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is Running at port ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("MONGO DB CONNECT FAILED!!!", error);
    
})












/*
import express from "express"
const app = express()


;(async() => {         //; used just in case above forgot ; in js

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
        
    }

})()
    


One method
*/
