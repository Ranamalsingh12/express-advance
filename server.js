const express = require("express");
const morgan = require("morgan");
const app = express();

const port = 3000;

app.listen(3000,() => {
    console.log(`Listening on http://localhost${port}`);
})