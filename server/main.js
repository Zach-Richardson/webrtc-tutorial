const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const process = require('process');

const root = `${__dirname}/..`;
const port = process.env.PORT || "4096";
const listenAddr = process.env.LISTEN_ADDR || "127.0.0.1";

async function main() {
    const app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.listen(port, listenAddr);

    app.get('/*', (req, res) => {
        res.sendFile(req.params[0] || "/client/index.html", {root});
    });
}

main();