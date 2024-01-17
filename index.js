const express = require("express");
const app = express();


require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(express.json());

const blog = require("./routes/blog");
// mounting
app.use("/api/v1",blog);

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log("App is running succesfully");
});

app.get("/",(req,res)=>{
    res.send(`<h1>This is my home page</h1>`)
});
