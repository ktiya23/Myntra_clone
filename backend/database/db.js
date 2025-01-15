import mongoose from "mongoose"
export const Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.kriqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(URL,);
        console.log("Database connected successfully")

    } catch (error) {
        console.log("error while connecting",error.message)
    }
}

export default Connection