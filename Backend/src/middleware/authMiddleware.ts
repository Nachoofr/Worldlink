import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserAttributes } from "../model/user.js";

export const authnetication = (
  res: Response,
  req: Request,
  next: NextFunction,
) => {
    const secreteKey = process.env.SECRETE_KEY
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: "No token provided"})
    }
    
    const token = authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "No token provided"});
    }
    
    try{
        const payload = jwt.verify(token,   secreteKey as string) as {data: UserAttributes};
        req.headers["x-auth-user"] = payload.data.username;
        next();
    }
    catch{
        return res.status(401).json({message: "Invalid token"});
    }   
};
