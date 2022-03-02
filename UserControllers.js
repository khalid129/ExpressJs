const userRegister = (req, res) => {
    res.send(`<h1>Hello Mr ${req.body.name} </h1> 
    <h2> Your email is ${req.body.email} </h2> 
    <h3> Your password is ${req.body.password} </h3>`)
}

const userSuccess = (req,res)=>{
    res.json({
        success:true,
    })
}
module.exports = (userRegister, userSuccess);