import mongoose from "mongoose";


const Tour = new mongoose.Schema({

    place:{
        type:String,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
checkOut:{
    type:String,
    required:true,
},
travellers:{
    type:String,
    required:true
},
user:{
    type:String,
    required:true,
   
 
}

})

const Travel = new mongoose.model('travel',Tour)

export default Travel;