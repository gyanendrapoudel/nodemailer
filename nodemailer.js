import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'llewellyn48@ethereal.email',
    pass: 'p7T145bV3ZGm4kMmtS',
  },
})

const emailProcessor = async (templateObj)=> {
    const  {messageId} = await transporter.sendMail(templateObj)
    console.log('result', messageId)
}


export const userUpdateTemplate = ()=>{
 const obj = {
   from: '"Maddison Foo Koch 👻" <llewellyn48@ethereal.email>', // sender address
   to: 'bar@example.com, baz@example.com', // list of receivers
   subject: 'Hello ✔', // Subject line
   text: 'Hello world?', // plain text body
   html: '<b>Hello world?</b>', // html body
 }
 emailProcessor(obj)
}