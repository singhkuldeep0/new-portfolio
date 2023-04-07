import type { NextApiRequest , NextApiResponse} from 'next'
import { PrismaClient } from '@prisma/client'


export default async function handler(req:NextApiRequest , res:NextApiResponse){
    try {
    const prisma = new PrismaClient()
   
    const { id } = req.query
   
    const testimonial = await prisma.testimonial.delete({
            where:{
                id:id.toString()
            }
    })
    
            res.status(200).json(testimonial)
    
} catch (error:any) {
    console.log(error)
        throw new Error(error)
}
}