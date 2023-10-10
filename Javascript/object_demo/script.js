
function createCust(name, email, phoneNo, orderDetails) {
    this.name = name;
    this.email = email;
    this.phoneNo = phoneNo;
    this.orderInfo = new orderObj(orderDetails);
    this.printInfo = function () {
        console.log('Customer Details:' + JSON.stringify(this));
    }
}
function orderObj(roomNo, nop, date) {
    this.roomNo = roomNo;
    this.nop = nop;
    this.date = date;
}
function generateOrder(loginDate, roomNo, nop) {
    return {
        loginDate: loginDate,
        roomNo: roomNo,
        nop: nop
    }
}
let orderDetails = generateOrder('27-06-2021 12:15 PM', 101, 2);
let customer1 = new createCust('Gaurav', 'gauarv@prefortech.com', '8986434322', orderDetails);


customer1.printInfo();


