import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name:'credentials',
      credentials:{
          email:{ label:'email' , type:'text'},
          password:{ label:'password' , type:'password' }
      },
      async authorize(credentials){
          if(!credentials?.email || !credentials?.password){
              throw new Error('Invalid credentails')
          }
          const user = await prisma.user.findUnique({
            where:{
              email:credentials.email
            }
          });
          

          if(!user){
              throw new Error('Invalid credentials')
          }

          if(!user?.hashedPassword){
            throw new Error("Invalid credentials! may be last time you logged in through google")
          }

          const isCorrectPassword = await bcrypt.compare(credentials.password , user.hashedPassword)

          if(!isCorrectPassword){
              throw new Error('Invalid credentails')
          }

          return user;
      }
  })
  ],
  pages:{
    signIn:'/'
  },
  session:{
    strategy:"jwt"
},
  secret: process.env.JWT_SECRET,
  callbacks:{
    async session({session , token , user}){
       return { ...session , user:{...session.user , ...user}}
    }
  },

})