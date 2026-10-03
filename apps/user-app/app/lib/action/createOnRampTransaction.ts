
"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(amount:number,provider:string){
    const session=await getServerSession(authOptions)
    const token=Math.random().toString();
    const userId=Number(session.user.id);
    const user=session.user
    if(!userId){
        return {
            message:"user not logged in"
        }
    }
      await prisma.onRampTransaction.create({
        data:{
            userId:Number(user.id),
            amount:amount,
            status:"Processing",
            startTime:new Date(),
            provider,
            token:token,
            
            

        }
    })
    return{
        message:"on ramp transaction added"
    }

}