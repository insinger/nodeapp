var express=require("express")
var app=express()

app.use(express.static(__dirname+"/public"))
app.use("/images",express.static(__dirname+"/public/pics"))
app.listen(3000,function () {console.log("Hi Dina!  listening on port 3000");})
