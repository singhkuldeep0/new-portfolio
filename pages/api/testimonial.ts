import type { NextApiRequest , NextApiResponse} from 'next'
import { PrismaClient } from '@prisma/client'


export default async function handler(req:NextApiRequest , res:NextApiResponse){
    try {
    const prisma = new PrismaClient()

    if(req.method === 'GET'){
        const testimonials = await prisma.testimonial.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        res.status(200).json({testimonials})
    }

    else if(req.method === 'POST'){
        const { email , name , description , imageUrl } = req.body
        
        const user = await prisma.user.findFirst({
            where:{
                email
            }
        })

       const testimonial =  await prisma.testimonial.create({
            data:{
                userId:user.id.toString(),        
                name,     
                description,
                imageUrl,    
            }
        })

        res.status(200).json({testimonial})
    }
    else if(req.method === 'DELETE'){
        console.log('run')
        const body = req.body
        console.log(body)
    //    
    }

    
} catch (error:any) {
    console.log(error)
        throw new Error(error)
}
}