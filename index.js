const express = require("express");
const path = require("path");
const app = express();

staticPath = path.join(__dirname, "/staticfiles");
console.log(staticPath);



app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("index.html");
})

port = 80;


app.listen(port, () => {
    console.log(`app is listening at port${port}`);
})