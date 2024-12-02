import express from "express"

const app = express()
const PORT = 8000

// reading json data from body
app.use(express.json())

app.get("/",(req,res)=>{
   try {
     
     res.json({
        status:"success",
        message:"response is this"
     })
   } catch (error) {
    res.json({
      status: 'error',
      message: 'error occurred',
    })
   }

})

app.post("/",(req,res)=>{
    try {
         res.json({
           status: 'success',
           message: 'response is this',
         })
    } catch (error) {
         res.json({
           status: 'error',
           message: 'error occurred',
         })
    }
})

app.listen(PORT,(error)=>{
    error?console.log("error"):console.log("success")
})