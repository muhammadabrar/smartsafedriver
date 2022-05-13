import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handle(req, res) {
    const { method } = req
    const id = req.query.id
    try {
        const posts = await prisma.booking.updateMany({
            
        })

        res.status(200).json({ success: true, data: posts })
      } catch (error) {
        res.status(400).json({ success: false})
      }
  }