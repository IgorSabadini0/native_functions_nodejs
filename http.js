// http.js

import http from "http";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
});

const PORT = 8000;
const HOST = "0.0.0.0";
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});