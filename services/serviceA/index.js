const app = require("express")()


const PORT = process.env.PORT || 4001

app.use("/base", (req,res)=>{
    res.send("Service A is a go")
})

app.use("/den", (req,res)=>{
    res.send("Service A Den is a go")
})

app.listen(PORT, ()=>{
    console.log("App started on port " + PORT)
})