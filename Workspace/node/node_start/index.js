const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
    console.log('Query Params' + req.query);
    console.log('Path Params' + req.params);
    console.log('IP' + req.ip);
    console.log('Hostname' + req.hostname);
    let response ={
        queryParams: req.query,
        ip: req.ip,
        hostName: req.hostname
    }
    res.send(response);
});
app.get('/get/path/params:key', (req, res) => {
    res.send('Path Params' + JSON.stringify(req.params));
});

app.listen(3000, () => {
    console.log("listening on 3000")
})
module.exports = {
    handler: serverless(app)
}