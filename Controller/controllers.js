import Users from "../database/schemas/userSchema.js"

export const login = async(req,res)=>{
 const data = req.body
 console.log(data,'recived')
    try{
const user = await Users.findOne({email:data.email,password:data.password})
if(user){
    res.status(200).json(user.name);
   
}else{

    res.status(220).json('user not found');
}

    }catch(err){
        console.error(err)
        res.status(500).json({error:'eror while login'})
    }



};


export const register = async(req,res)=>{

    const data = req.body


  try{

  const response = await  Users.insertMany({name:data.name,password:data.password,email:data.email,mobile:data.mobile})
       if(response){
        res.status(200);
       }else{
        res.status(404)
       }
  }catch(error){
    console.error(error)

    res.staus(500).json({error:'error while uploding data'})
  }
}
 

