const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { noteRouter } = require("./routes/note.routes")
const { authenticate } = require("./middlewares/authenticate.middlewares")
const cors=require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/users", userRouter)
app.use(authenticate)
app.use("/notes", noteRouter)


app.listen(7070, async () => {
    try {
        await connection
        console.log("connected with Database")
    } catch (err) {
        console.log(err.message)
    }
    console.log("server is running at port 7070")
})