const https = require('https');
var fs = require('fs');
const clipboardy = require('clipboardy');
var FormData = require('form-data');

let username = "YourUsername";
let password = "YourPassword";

const filepath = process.argv[2];

form = new FormData();
form.append('file', fs.createReadStream(filepath));

const request = https.request({
    host: 'api.streamable.com',
    path: '/upload',
    port: '443',
    method: 'POST',
    headers: {
        ...form.getHeaders(),
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
    }
});

request.on('response', function (response) {
    response.on('data', function (body) {
        body = JSON.parse(body);
        if (body.status == 1) {
            clipboardy.writeSync(`https://streamable.com/${body.shortcode}`);
            console.log('ok');
        }
    });
});

form.pipe(request);