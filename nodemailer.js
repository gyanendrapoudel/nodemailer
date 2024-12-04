import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'pbikash2019@gmail.com',
    pass: 'hbtjkhqpomlbqtjl',
  },
})

const emailProcessor = async (templateObj)=> {
    const  {messageId} = await transporter.sendMail(templateObj)
    console.log('result', messageId)
}


export const userUpdateTemplate = ({to,subject,message})=>{
 const obj = {
   from: '"Maddison Foo Koch 👻" <pbikash2019@gmail.com>', // sender address
   to, // list of receivers
   subject, // Subject line
   text: message, // plain text body
   html: '<b>Hello world?</b>', // html body
 }
 emailProcessor(obj)
}