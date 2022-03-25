const app = require("express")()
const cors = require('cors')

app.listen(3080, () => {
    console.log("Application started and Listening on port 3080");
});

app.use(cors({credentials: true, origin: true}))

app.post("/", (req,res) =>{

    const cookie = req.headers.cookie;
    if (cookie)
        res.sendFile(`${__dirname}/cookie.png`)
    else{
        res.sendStatus(403);
        res.end();
    }
})

app.post("/login", (req, res) => {
    const cookie = "user=JeanLuc; samesite=none; secure";
    res.setHeader("set-cookie", [cookie])
    res.send("ok")
})

app.post("/login-lax", (req, res) => {
    const cookie = "user=JeanLuc; samesite=lax;";
    res.setHeader("set-cookie", [cookie])
    res.send("ok")
})

app.post("/login-strict", (req, res) => {
    const cookie = "user=JeanLuc; samesite=strict;";
    res.setHeader("set-cookie", [cookie])
    res.send("ok")
})

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/lax", (req, res) => {
    res.sendFile(`${__dirname}/lax.html`)
})

app.get("/strict", (req, res) => {
    res.sendFile(`${__dirname}/strict.html`)
})

app.get("/img", (req, res) => {
    const cookie = req.headers.cookie;
    if (cookie)
        res.sendFile(`${__dirname}/cookie.png`)
    else{
        res.sendStatus(403);
        res.end();
    }
})

app.delete("/user", (req, res) => {
    const cookie = req.headers.cookie;
    if (cookie)
        res.send("ok")
    else{
        res.sendStatus(403);
        res.end();
    }
})