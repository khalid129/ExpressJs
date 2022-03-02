const express = require("express")
const path = require("path");
const bodyParser = require("body-parser")

const router = require("./UserRoutes");

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use("/api/v1",router)

const port = 4000;

app.get("/", (req, res) => {
    console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"))
})

// app.post("/api/v1/login", )

app.get("/api/v1/get",(req,res)=>{
    res.json({
        name:"khalid",
        email:"sample@gmail.com",
        password:"hashed",
    })
})

app.post("/api/v1/register", (req,res)=>{
    const {name, email, password} = req.body;

    res.json({
        success: true,
        name : name,
        email: email,
        password: password,
    })
})

app.get("/service", (req, res) => {
    res.send("<h1>Hello from service</h1>")
})


app.listen(port, () => {
    console.log("Here from express sever")
})


// GET  POST    PUT     DELETE
// READ CREATE  UPDATE  DELETE