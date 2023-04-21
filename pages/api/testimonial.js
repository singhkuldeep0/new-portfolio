import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {
    try {

        const prisma = new PrismaClient();
        const { email, name, userId, description, imageUrl } = req.body

        const testimonial = await prisma.testimonial.create({
            data: {
                email,
                name,
                userId,
                description,
                imageUrl
            }
        })

        res.status(200).json(testimonial)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}