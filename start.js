// i'm changing this file
var express=require("express")
var app=express()

function chris(req,res,next) {
	console.log("req=",req)
	console.log("res=",res)
	console.log("next=",next)
}
// app.use(express.static(__dirname+"/public"))
app.use(chris)
app.use("/images",express.static(__dirname+"/public/pics"))
app.listen(3000,function () {console.log("listening on port 3000");})
