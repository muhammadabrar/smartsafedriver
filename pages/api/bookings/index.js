import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handle(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
          try {
            const posts = await prisma.booking.findMany()

            res.status(200).json({ success: true, data: posts })
          } catch (error) {
            res.status(400).json({ success: false})
          }
          break
        case 'POST':
          try {
            let nodemailer = require('nodemailer')
            const transporter = nodemailer.createTransport({
              port: 465,
              host: "smtp.gmail.com",
              auth: {
                user: 'smartsafedrivers@gmail.com',
                pass: 'opyvgdcayrpmuchs',
              },
              secure: true,
            })
            const mailData = {
              from: 'smartsafedrivers@gmail.com',
              to: 'abrarmuhammad100 @gmail.com',
              subject: `Message From ${req.body.name} || Booking`,
              html: `<div>Name: <b>${req.body.name}</b><br/>
              Contact: <b>${req.body.phone}</b><br/>
              location: <b>${req.body.location}</b><br/>
              price: <b>${req.body.price}</b><br/>
              plan: <b>${req.body.plan}</b><br/>
              feature: <b>${req.body.feature}</b><br/>
              date: <b>${req.body.date}</b><br/>
`
            }
            transporter.sendMail(mailData)
            // name,
            // phone,
            // location,
            // price,
            // plan,
            // feature: feature,
            // date
            res.status(201).json({ success: true, data: 'posted' })
          } catch (error) {
            res.status(400).json({ success: false, error:error})
          }
          break
        default:
          res.status(400).json({ success: false })
          break
      }
  }