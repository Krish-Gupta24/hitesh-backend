    // require('dotenv').config({path: './env'})
    import {app} from "./app.js"
    import dotenv from "dotenv"
    import connectDB from "./db/index.js";
    dotenv.config({
        path: './.env'
    })



    connectDB()
        .then(() => {
            app.listen(process.env.PORT || 8000, () => {
                console.log(`server is running at ${process.env.PORT}`)
            })
        })
        .catch((err) => {
        console.log("MONGODB CONNECTION FAILED",err)
    })










    /*
    import express from "express"
    const app = express()
    ( async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("errror", (error) => {
                console.log("ERRR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            })

        } catch (error) {
            console.error("ERROR: ", error)
            throw err
        }
    })()

    */