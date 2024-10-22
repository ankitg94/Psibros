import  {msg}  from "../model/msg.js"

export const createMsg = async(req,res)=>{
try{
    const {title,auth,publish,genre}=req.body
 
    if(!title ||!auth||!publish||!genre){
        return res.status(400).send({
            success:false,
            message:"please fill all the feilds"
        })
    }

    const data = await msg({title,auth,publish,genre}).save()
    return res.status(201).send({
        success:true,
        message:"your message created successfully",
        data
    })
}catch(error){
        return res.status(400).send({
        success:false,
        message:"error in crete msg",
        error:error.message
    })
}
}


export const getMsg = async(req,res)=>{
    try{
        
        const data =await msg.find({})   
        
        return res.status(200).send({
            success:true,
            message:"here is your all msg",
            total:data.length,
            data

        })

    }catch(error){
        return res.status(500).send({
            success:false,
            message:"error in crete msg"
        })  
    }
}
export const getSingleMsg =async(req,res)=>{
try{
    const id =req.params.id;
    const getSingleData =await msg.findById(id)
    return res.status(200).send({
        success:true,
        message:"single  msg successfully",
        getSingleData
    })

}catch(error){
    return res.status(500).send({
        success:false,
        message:"error in getting the single msg",
        error:error.message
    })


}


}
export const updateMsg =async(req,res)=>{
    try{
        const id =req.params.id;
        const {title,auth,publish,genre} = req.body
        
        
        const update =await msg.findByIdAndUpdate(id,{title,auth,publish,genre},{new:true})
        return res.status(200).send({
            success:true,
            message:"updated  msg successfully",
            update
        })
    }catch(error){
           return res.status(500).send({
            success:false,
            message:"error in update msg"
        })
    }
}

export const deleteMsg =async(req,res)=>{
  try{
    const id =req.params.id
    const deleted = await msg.findByIdAndDelete(id) 
        return res.status(200).send({
        success:true,
        message:"deleted  msg successfully ",
    })
  }catch(error){
    return res.status(500).send({
        success:false,
        message:"error in delete msg"
    })

  }  
}