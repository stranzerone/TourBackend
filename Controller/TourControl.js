import Travel from "../database/schemas/TourSchema.js";

export const details =async(req,res)=>{
    const data = req.body
   
    try{
      const tour = await  Travel.insertMany({place:data.location,checkIn:data.checkin,checkOut:data.checkout,travellers:data.travellers,user:data.user})
if(tour){
    res.status(200).json('got your plan')

}
    }catch(error){
        res.status(500).json({error:'error in your plan'})
        console.error(error)
    }
}


export const bookings= async(req,res)=>{
    try{
        const user = req.body.user
     const response = await   Travel.find({user:user})
     res.status(200).json(response)

    }catch(error){
        console.error(error)
    }

}