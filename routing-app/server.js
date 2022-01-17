const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//home route
app.get('/',(req, res) => {
    res.end("Routing app")
})

app.listen(3000,()=>{
    console.log(`Listening the server on http://localhost${port}`);
});