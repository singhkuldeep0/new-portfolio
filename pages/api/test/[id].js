import { PrismaClient } from '@prisma/client'

export default async function handler(req , res){
    try {
    const prisma = new PrismaClient()
   
    const { id } = req.query
    console.log(id)
   
    const testimonial = await prisma.testimonial.delete({
            where:{
                email:id
            }
    })
    
            res.status(200).json(testimonial)
    
} catch (error) {
    console.log(error)
        throw new Error(error)
}
}