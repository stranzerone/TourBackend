import { configDotenv } from "dotenv"
configDotenv()
const database = process.env.DATABASE
import mongoose from "mongoose"



const Connections = async  () => {
    
    try{
    await  mongoose.connect(database).then(
        console.log("database connected")
    )


    } catch (err) {
        console.log("error while loding database",err)
    }

}

export default Connections;