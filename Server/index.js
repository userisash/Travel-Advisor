const express = require('express')
const ConnectToDb = require('./Connect')
const mongoose = require('mongoose');
const PinRouter = require('./routes/PinRoutes');
const UserRouter = require('./routes/UserRoutes');
const app = express()
const port = process.env.PORT;
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use("/api/pins/", PinRouter)
app.use("/api/users/", UserRouter)

ConnectToDb()


app.listen(port, ()=>{
    console.log(`run in port ${port}`);
})