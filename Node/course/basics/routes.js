const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><body><form action="/message" method="POST"><input name="message" type="text"/><button type="submit">Submit</button></form></body></html>');
        return res.end();
    }
    
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        }); // listen to certain events
    
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                console.log(err);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    
    res.setHeader('Content-type', 'text/html');
    res.write('<html><div><p>Nothing</p></div></html>')
    res.end();
}

module.exports = requestHandler;
