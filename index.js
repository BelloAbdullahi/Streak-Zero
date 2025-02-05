const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log("hello");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.json({
      email: process.env.EMAIL,
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/BelloAbdullahi/hng12-api-streak-zero",
    });
  });


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});