const express = require("express");

const router = express.Router(); 

const authController = require('../controller/auth/auth.controller');
const ordeItemController = require('../controller/orderItem/orderItem.controller');

router.post("/", authController.authUser);
router.post("/otp-verify", authController.validateUser);
router.post("/resend-otp", authController.resendOtp);
router.post("/register", authController.RegisterUser)
router.post("/place-order",ordeItemController.AddOrderItems);
router.post("/fetch-order",ordeItemController.FetchOrderItems);

module.exports = router;
