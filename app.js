 import express from "express"
 import cookieParser from 'cookie-parser'
 const app = express();

 app.use(cookieParser())

 app.get("/createcookies", (req,res)=>
 {
  res.cookie("name" ,"anamika")
  res.cookie("dept","hr")
  res.send("cookies created")
 })

 
 app.get("/getcookies", (req,res)=>
 {
   console.log(req.cookies.name)
   res.send("Cookies are get from here")
 })

 
 app.get("/deletecookies", (req,res)=>
 {
  res.clearCookie("name")
   res.send("Cookies are deleted here")
 })
 app.listen(9100, () => {  console.log("Server list")})