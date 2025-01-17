import mongoose from "mongoose"
const url = process.env.MONGO_CONN
export const Connection = async()=>{
    const URL=process.env.MONGO_CONN
    try {
        await mongoose.connect(URL,);
        console.log("Database connected successfully")

    } catch (error) {
        console.log("error while connecting",error.message)
    }
}

export default Connection