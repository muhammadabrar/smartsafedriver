import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handle(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
          try {
            const posts = await prisma.contacts.findMany();
            console.log(posts);
            res.status(200).json({ success: true, data: posts })
          } catch (error) {
            res.status(400).json({ success: false, err: error})
          }
          break
        case 'POST':
          try {
              console.log(req.body);
            const posts = await prisma.contacts.create({
                data: req.body
            })

            res.status(201).json({ success: true, data: posts })
          } catch (error) {
            res.status(400).json({ success: false, error:error})
          }
          break
        default:
          res.status(400).json({ success: false })
          break
      }
  }