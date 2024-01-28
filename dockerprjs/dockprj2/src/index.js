const http = require("http");

const host = '0.0.0.0';
const port = 8000;


const requestListener = function (req, res) {
    res.end("Hello World!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
