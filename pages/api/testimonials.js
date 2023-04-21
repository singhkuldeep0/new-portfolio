import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {
    try {

        const prisma = new PrismaClient();

        const testimonials = await prisma.testimonial.findMany()
           
        res.status(200).json(testimonials)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}