// index.js

import { promises as fs } from 'fs';

fs.readFile("teste.txt", "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });