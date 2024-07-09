import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from ".";

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers["authorization"] ?? "";
    
    try{
        const decoded = jwt.verify(authHeader, JWT_SECRET);
        if (decoded.userId){
            req.userId = decoded.userId;
            return next();
        } else{
            return res.status(403).json({
                message: "You are not logged in"
            })    
        }
    } catch(e){
        return res.status(403).json({
            message: "You are not logged in"
        })
    }
    
}