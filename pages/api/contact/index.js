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
              // console.log(req.body);
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
                to: 'abrarmuhammad100@gmail.com',
                subject: `Message From ${req.body.contact} || ${req.body.subject}`,
                text: req.body.msg + " | Sent from: " + req.body.contact,
                html: `<div>Name: <b>${req.body.name}</b><br/>
                Contact: <b>${req.body.contact}</b><br/>
                Name: <b>${req.body.msg}</b><br/></div><p>Sent from:
                ${req.body.contact}</p>`
              }
              transporter.sendMail(mailData)
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