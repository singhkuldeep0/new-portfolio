import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {
    try {

        const prisma = new PrismaClient();
        const { id } = req.query
        console.log(id)
       await prisma.testimonial.delete({
            where: {
              id,
            },
          })
        
        res.status(200).json({message:"Testimonial deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
}