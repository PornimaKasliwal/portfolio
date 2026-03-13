
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { FRONTEND_URL } = require("./utils/config")
// const dns = require("dns")

// dns.setServers([
//     '1.1.1.1',
//     '8.8.8.8'
// ])

const app = express()

app.use(express.json())
app.use(cors({origin:FRONTEND_URL, credentials: true}))
app.use(cookieParser())

// app.use("/api/auth", require("./routes/user.routes"))
app.use("/", (req, res) => {
    res.status(404).json({ message: "API Running Successfully 🚀" })
})
app.use((  err,req,res , next)=>{
console.error("Server Error", err)
res.status(500).json({message:err.message || "SERVER ERROR"})
})

mongoose.connect(process.env.MONGO_URL)
// console.log(mongoose.connection.host)

// console.log(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
console.log("db connected");
app.listen(process.env.PORT,() =>{
    console.log("SERVER RUNNING...")
   console.log(`mode: ${process.env.NODE_ENV}`)
console.log(`CORS ALLOWED: ${FRONTEND_URL}`)
})    
    
})


