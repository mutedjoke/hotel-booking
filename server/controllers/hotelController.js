import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel=async(req,res)=>{
    try {
        const {name,address,contact,city}=req.body;
        const owner=req.user._id;

        const hotel= await Hotel.findOne({owner})
        if(hotel){
                return res.json({succes:false,message:"Hotel Already Registered"})

        }
        
        await Hotel.create({name,address,contact,city,owner});
        await User.findByIdAndUpdate(owner,{role: "hotelOwner"});
        res.json({succes:true, message:"Hotel Registered Sucessfully"})

    } catch (error) {
        res.json({succes:false, message:error.message})
    }
}