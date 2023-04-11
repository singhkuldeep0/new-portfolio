import { PrismaClient } from "@prisma/client"

export const getUserNameById = async(email:string) => {
    const prisma = new PrismaClient()

    const user = await prisma.user.findFirst({
        where : {
            email
        }
    })

    return user
}