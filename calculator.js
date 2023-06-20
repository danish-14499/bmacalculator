// const { urlencoded } = require("body-parser");
const express=require("express");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended:true}))

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmi.html");
})
app.post("/bmicalculator",(req,res)=>{
    
    
    let heigh=parseFloat(req.body.height);
    let weigh=parseFloat(req.body.weight);
    let req_name=req.body.Name;
    let bmi=(weigh/(Math.pow(heigh,2)));
    if (bmi < 19) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Overweight!");
    } else {
        res.send("<h3>hey! " + req_name +
                 " your BMI is around: " + bmi +
                 "<centre><h1>You are Obese!");
    }

});
app.get("/cal",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
 });
 
 app.post("/cal",(req,res)=>{
      console.log(req.body);
      let num1=Number.parseInt(req.body.num1);
      let num2=Number.parseInt(req.body.num2);
      let result=num1+num2;
      res.send("calculated answer is "+result);
 });
// app.get("/about",(req,res)=>{
//     res.send("calculator is used to solve the basic maths");
// })

app.listen(3000,()=>{
    console.log("calculator server has started");
})