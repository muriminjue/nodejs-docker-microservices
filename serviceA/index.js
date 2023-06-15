const app = require("express")()


const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log("App started on port " + PORT)
})