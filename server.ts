import express from 'express'
import jsonServer from 'json-server'
import cors from 'cors'
import data from './src/data/data'

const PORT = process.env.PORT || 3500
const app = express();

app.use(cors())
app.use("/api", jsonServer.defaults(), jsonServer.router(data()))


app.listen(PORT, () => console.log(`Web service started running on port ${PORT}`))

