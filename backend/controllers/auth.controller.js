import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

//login with google auth 
export const googleAuth = async(req,res)=>{
    try{
        const {name,avatar,email} = req.body;
        if(!email){
            return res.status(400).json({
                message:"email is required",
               
                 
            })
        }
        const user = await UserModel.findOne({email});
        // if user not found then it will create it 
        if(!user){
            user =  await UserModel.create({
                name,
                email,
                avatar
            })
        }
        const token = await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie("token",token,{
            httpOnly:true,
            //if secure is false then sameSite is strict if secure is true then sameSite is none
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        });
        return res.status(200).json({
            user,
            message:"user created successfully",
            success:true
        })

    }
    catch(error){
        return res.status(500).json({
            message:`google auth error ${error} `
        })

    }

};


// logout

export const logOut = async(req,res)=>{
    try{
        return res.clearCookie("token",{
            httpOnly:true,
            secure:false,
            sameSite:"strict"
        }.json({
            message:"logout successfully",
            success:true
        }))

    }
    catch(error){
        return res.status(500).json({
            message:`google auth logOut error ${error}`,
            success:false
        })
        
    }

}