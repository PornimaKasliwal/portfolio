const router = require("express").Router()
const auth = require("../controller/auth.controller")


router
.post("/send-otp",auth.sendOTP )
.post("/verify-otp",auth.verifyOTP)
.post("/logout",auth.adminLogout )


module.exports = router