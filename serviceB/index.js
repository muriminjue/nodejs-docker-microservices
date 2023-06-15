const app = require("express")()


const PORT = process.env.PORT || 4001

app.listen(PORT, ()=>{
    console.log("App started on port " + PORT)
})