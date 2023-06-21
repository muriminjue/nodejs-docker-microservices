const app = require("express")()


const PORT = process.env.PORT || 4002

app.use("/", (req,res)=>{
    res.send("Service B is a go")
})

app.listen(PORT, ()=>{
    console.log("App started on port " + PORT)
})