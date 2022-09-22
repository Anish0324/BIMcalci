const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/bmicalculator",function(req,res){
  var weight=parseFloat(req.body.weight);
  var hight=parseFloat(req.body.hight);
  var result= weight/(hight*hight);

  res.send("the bmi calculator  "+ result);
});
app.listen(3000,function () {
  console.log("server is working ");

});
