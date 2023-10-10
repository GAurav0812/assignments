const { validationResult } = require("express-validator");
const dbPool = require("../../config/database");
const Joi = require("joi");
const curl = require("curlrequest");
const config = require("../../config");
const moment = require("moment");

function registerValidate(req) {
  const schema = {
    countryCode: Joi.string().min(2).max(2).required(),
    mobileNumber: Joi.string().min(10).max(12).required(),
  };
  return Joi.validate(req, schema);
}

function authValidate(req) {
  const schema = {
    countryCode: Joi.string().min(2).max(2).required(),
    mobileNumber: Joi.string().min(10).max(12).required(),
    otpValue: Joi.string().min(4).max(4).required(),
  };
  return Joi.validate(req, schema);
}
// Call cUrl Function with promise
function curlRequest(option) {
  return new Promise((resolve, reject) => {
    curl.request(option, function (err, data) {
      if (err) {
        return res.status(400).json({
          error: true,
          message: err,
        });
      }
      resolve(data);
    });
  });
}

async function checkMobileNo(mobileNumber) {
  return new Promise((resolve, reject) => {
    dbPool.getConnection(function (err, con) {
      con.query(
        "SELECT * FROM menu_customer WHERE mobile_number =" + mobileNumber,
        function (err, rows, fields) {
          if (err) reject(err.message);
          if (rows.length >= 1) {
            resolve({
              userId: rows[0].user_id,
              mobileNumber: rows[0].mobile_number,
              otpValue: rows[0].otp_value,
              otpVerifyCode: rows[0].otp_verify_code,
              otpCount: rows[0].otp_count,
            });
          } else {
            resolve({ userId: "" });
          }
        }
      );
      con.release();
    });
  });
}

//Register the New User and Send OTP
exports.RegisterUser = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    // console.log("req", errors);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { error } = registerValidate(req.body);
    if (error)
      return res.status(400).json({
        error: true,
        message: error.details[0].message,
      });
    var OtpNumber = Math.floor(1000 + Math.random() * 9000);
    var otpMessage = "Your OTP is " + OtpNumber;
    var currentDateTime = moment().format("YYYY-MM-DD hh:mm:ss");
    var userId = "";

    var curlOptions = {
      url:
        config.SMS_API_URL +
        "/sendhttp.php?authkey=" +
        config.SMS_AUTH_KEY +
        "&mobiles=" +
        req.body.countryCode +
        "" +
        req.body.mobileNumber +
        "&message=" +
        otpMessage +
        "&sender=BBQNOTP&route=4&country=0",
      // include: true,
    };
    let curlRes = await curlRequest(curlOptions);
    // console.log(curlRes);

    const getUserId = await checkMobileNo(req.body.mobileNumber);
    // console.log("daaaa", getUserId);

    await dbPool.getConnection(function (err, con) {
      if (err) {
        res.status(500).json({ error: true, message: "Something Went Wrong" });
        return;
      }
      var custSql = "";
      var custData = [];
      if (getUserId.userId == "") {
        custSql =
          "INSERT INTO menu_customer (mobile_number, otp_value, otp_verify_code, created_datetime) VALUES (?, ?, ?, ?)";
        custData = [req.body.mobileNumber, OtpNumber, curlRes, currentDateTime];
      } else {
        custSql =
          "UPDATE menu_customer SET mobile_number =?, otp_value =?, otp_verify_code =?, created_datetime =? WHERE user_id=?";
        custData = [
          req.body.mobileNumber,
          OtpNumber,
          curlRes,
          currentDateTime,
          getUserId.userId,
        ];
      }
      // custSql = "INSERT INTO menu_customer (mobile_number, otp_value, otp_verify_code, created_datetime) VALUES ('"+req.body.mobileNumber+"', '"+OtpNumber+"', '"+response.message+"', '"+currentDateTime+"' )";
      // return;
      con.query(custSql, custData, function (err, result) {
        if (err)
          throw res.status(500).json({
            error: true,
            message: err,
          });
        if (result.length >= "1") {
          return res.status(200).json({
            error: false,
            message: "OTP has been sent successfully",
          });
        } else {
          return res.status(200).json({
            error: false,
            message: "OTP has been sent successfully",
          });
        }
      });
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err,
    });
  }
};

// Validate the registered User
exports.validateUser = async function (req, res) {
  try {
    const errors = validationResult(req);
    // console.log("req", errors);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { error } = authValidate(req.body);
    if (error)
      return res.status(400).json({
        error: true,
        message: error.details[0].message,
      });

    const getUserId = await checkMobileNo(req.body.mobileNumber);

    if (getUserId.userId !== "") {
      //   var curlOptions = {
      //     url:
      //       config.SMS_API_URL +
      //       "/verifyRequestOTP.php?authkey=" +
      //       config.SMS_AUTH_KEY +
      //       "&mobile=" +
      //       req.body.countryCode +
      //       "" +
      //       req.body.mobileNumber +
      //       "&otp=" +
      //       req.body.otpValue,
      //     // include: true,
      //   };
      //   console.log(curlOptions);
      //   let curlRes = await curlRequest(curlOptions);
      //   console.log(curlRes);
      if (getUserId.otpValue == req.body.otpValue) {
        await dbPool.getConnection(function (err, con) {
          if (err) {
            res
              .status(500)
              .json({ error: true, message: "Something Went Wrong" });
            return;
          }
          var custSql =
            "UPDATE menu_customer SET otp_verify =? WHERE user_id=?";
          var custData = ["1", getUserId.userId];
          con.query(custSql, custData, function (err, result) {
            if (err)
              throw res.status(500).json({
                error: true,
                message: err,
              });
            if (result.length >= 1) {
              return res.status(200).json({
                error: false,
                message: "OTP has been verified successfully",
              });
            } else {
              return res.status(200).json({
                error: false,
                message: "OTP has been verified successfully",
              });
            }
          });
        });
      } else {
        return res.status(200).json({
          error: true,
          message: "Please Enter Valid OTP.",
        });
      }
    } else {
      return res.status(200).json({
        error: true,
        message: "Invalid Mobile Number",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err,
    });
  }
};

// Validate the registered User
exports.resendOtp = async function (req, res) {
  try {
    const errors = validationResult(req);
    // console.log("req", errors);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { error } = registerValidate(req.body);
    if (error)
      return res.status(400).json({
        error: true,
        message: error.details[0].message,
      });

    const getUserId = await checkMobileNo(req.body.mobileNumber);

    if (getUserId.userId !== "") {
      var otpMessage = "Your OTP is " + getUserId.otpValue;
      var curlOptions = {
        url:
          config.SMS_API_URL +
          "/sendhttp.php?authkey=" +
          config.SMS_AUTH_KEY +
          "&mobiles=" +
          req.body.countryCode +
          "" +
          req.body.mobileNumber +
          "&message=" +
          otpMessage +
          "&sender=BBQNOTP&route=4&country=0",
        // include: true,
      };
      // console.log(curlOptions);
      let curlRes = await curlRequest(curlOptions);
      //   console.log(curlRes);
      if (curlRes !== "") {
        await dbPool.getConnection(function (err, con) {
          if (err) {
            res
              .status(500)
              .json({ error: true, message: "Something Went Wrong" });
            return;
          }
          var custSql =
            "UPDATE menu_customer SET otp_verify=?, otp_count =?, otp_resend=? WHERE user_id=?";
          var custData = ["0", getUserId.otpCount + 1, "1", getUserId.userId];
          con.query(custSql, custData, function (err, result) {
            if (err)
              throw res.status(500).json({
                error: true,
                message: err,
              });
            if (result.length >= 1) {
              return res.status(200).json({
                error: false,
                message: "OTP re-sent successfully",
              });
            } else {
              return res.status(200).json({
                error: false,
                message: "OTP re-sent successfully",
              });
            }
          });
        });
      } else {
        return res.status(200).json({
          error: true,
          message: "Please Enter Valid Mobile Number.",
        });
      }
    } else {
      return res.status(200).json({
        error: true,
        message: "Invalid Mobile Number",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err,
    });
  }
};

exports.authUser = async function (req, res, next) {
  return res.status(200).json({
    error: false,
    message: "Not Authorized",
  });
};
