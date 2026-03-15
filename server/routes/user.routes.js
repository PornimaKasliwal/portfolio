const router = require("express").Router()
const auth = require("../controller/auth.controller")
const { adminProtected } = require("../middleware/auth.middleware")


router
.post("/send-otp",auth.sendOTP )
.post("/verify-otp",auth.verifyOTP)
.post("/logout", adminProtected ,auth.adminLogout )


module.exports = router