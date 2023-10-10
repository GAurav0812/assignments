const { validationResult } = require("express-validator");
const dbPool = require("../../config/database");
const Joi = require("joi");

function addOrderValidate(req) {
  const schema = {
    storeNumber: Joi.string().min(3).max(255).required(),
    tableNumber: Joi.string().min(1).max(255).required(),
    customerName: Joi.string().min(3).max(255),
    customerMobile: Joi.string().min(10).max(13),
    bookingId: Joi.string().min(5).max(25),
    appendDuplicate: Joi.string(),
    items: Joi.array(),
  };

  return Joi.validate(req, schema);
}
function fetchOrderValidate(req) {
  const schema = {
    storeNumber: Joi.string().min(3).max(255).required(),
    tableNumber: Joi.string().min(1).max(255).required(),
    // customerMobile: Joi.string().min(10).max(13),
    // bookingId: Joi.string().min(5).max(25),
  };
  return Joi.validate(req, schema);
}

function getKotNumber(reqCustMob, callback) {
  var kotNo = 1;
  return dbPool.query(
    "SELECT * FROM customer_order_requests WHERE customer_mobile = " +
      reqCustMob,
    function (err, result, fields) {
      if (err) {
        callback(err, null);
        // return res
        //   .status(500)
        //   .json({ error: true, message: "Something went wrong!!!" });
      }
      if (result.length >= 1) {
        kotNo = parseInt(kotNo) + 1;
      }
      callback(null, kotNo);
      // return kotNo;
      // callback(err, {kotNumber: kotNo});
    }
    // return kotNo;
  );
  // console.log("Kot1", kotNo);

  // return kotNo;
  // console.log("Kot", kotNo);

  // return kotNo;
}
function getDuplicateArrayElements(arr) {
  var sorted_arr = arr.slice().sort();
  var results = [];
  for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

function getDuplicateElements(sourceArr, destArr) {
  var sourceSortArr = sourceArr.slice().sort();
  var destSortArr = destArr.slice().sort();
  var results = [];
  for (var i = 0; i < sourceSortArr.length; i++) {
    for (var j = 0; j < destSortArr.length; j++) {
      if (
        parseInt(destSortArr[j].item_id) === parseInt(sourceSortArr[i].item_id)
      ) {
        results.push(sourceSortArr[i]);
      }
    }
  }
  return results;
}

exports.AddOrderItems = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    console.log("req", errors);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { error } = addOrderValidate(req.body);
    if (error)
      return res.status(400).json({
        error: true,
        message: error.details[0].message,
      });

    await dbPool.getConnection(function (err, con) {
      if (err) {
        res.status(500).json({ error: true, message: "Something Went Wrong" });
        return;
      }
      var kotNo = 1;
      con.query(
        "SELECT * FROM customer_order_requests WHERE table_name = " +
          req.body.tableNumber,
        function (err, result, fields) {
          if (err) throw err;
          if (result.length >= 1 && req.body.appendDuplicate == 0) {
            var resultval = getDuplicateElements(req.body.items, result);
            res.status(200).json({
              error: true,
              message:
                "Order has been already placed for table. Do you want to add yours also?",
              duplicate_items: resultval,
            });
          } else {
            con.query(
              "SELECT customer_mobile, MAX(kot_number) AS kot_count FROM customer_order_requests WHERE customer_mobile = " +
                req.body.customerMobile +
                " GROUP BY customer_mobile",
              function (err, result, fields) {
                if (err) throw err;
                if (result.length >= 1) {
                  kotNo = parseInt(result[0].kot_count) + 1;
                }
                // console.log("Kot", kotNo);
                // con.end();

                var sql =
                  "INSERT INTO customer_order_requests (store_no, table_name, customer_name, customer_mobile, booking_id, item_id, item_name, item_price, quantity, item_status, kot_number) VALUES ?";
                var values = [];

                // console.log(req.body.items);
                req.body.items.forEach((element) => {
                  var insertItems = [];
                  insertItems.push(req.body.storeNumber);
                  insertItems.push(req.body.tableNumber);
                  insertItems.push(req.body.customerName);
                  insertItems.push(req.body.customerMobile);
                  insertItems.push(req.body.bookingId);
                  insertItems.push(element.item_id);
                  insertItems.push(element.item_name);
                  insertItems.push(element.item_price);
                  insertItems.push(element.quantity);
                  insertItems.push("N");
                  insertItems.push(kotNo);
                  values.push(insertItems);
                });
                console.log(values.length);
                if (values.length >= 1) {
                  con.query(sql, [values], function (err, result) {
                    if (err) throw err;
                    // console.log("Number of records inserted: " + result.affectedRows);
                    con.release();
                    if (result.affectedRows >= 1) {
                      res.status(200).json({
                        error: false,
                        message: "Order Placed Successfully.",
                      });
                    } else {
                      res.status(200).json({
                        error: true,
                        message: "Order Not Placed",
                      });
                    }
                  });
                } else {
                  return res.status(200).json({
                    error: false,
                    message: "No Items available",
                  });
                }
              }
            );
          }
          // return;

          console.log("connected as id " + con.threadId);
        }
      );
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err,
    });
  }
};

exports.FetchOrderItems = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    console.log("req", errors);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { error } = fetchOrderValidate(req.body);
    if (error)
      return res.status(400).json({
        error: true,
        message: error.details[0].message,
      });

    await dbPool.getConnection(function (err, con) {
      if (err) {
        res.status(500).json({ error: true, message: "Something Went Wrong" });
        return;
      }

      con.query(
        "SELECT * FROM customer_order_requests WHERE store_no = " +
          req.body.storeNumber +
          " AND table_name =" +
          req.body.tableNumber,
        function (err, result, fields) {
          if (err) throw err;
          if (result.length >= 1) {
            // console.log(result);
            var outputItems = [];
            result.forEach((element) => {
              var outItems = {};
              // var kotKey = element.kot_number - 1;
              outItems["item_id"] = element.item_id;
              outItems["item_name"] = element.item_name;
              outItems["item_price"] = element.item_price;
              outItems["quantity"] = element.quantity;
              outItems["item_status"] = element.item_status;
              outItems["kot_number"] = element.kot_number;
              outputItems.push(outItems);
            });
            res.status(200).json({
              error: false,
              message: "Order Items",
              storeNumber: req.body.storeNumber,
              tableNumber: req.body.tableNumber,
              order_items: outputItems,
            });
          }
        }
      );
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err,
    });
  }
};
