const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { v4 } = require("uuid")

const server = express()
server.use(cors()) //we can access api from react
server.use(bodyParser.json()) // to parse incoming request body format 1
server.use(bodyParser.urlencoded({ extended: false })) // to parse incoming request body format 2

const db = [
  {
    id: v4(),
    value: 2000,
    reason: "lottery",
  },
  {
    id: v4(),
    value: 10000,
    reason: "income",
  },
  {
    id: v4(),
    value: -2000,
    reason: "cinema",
  },
]
//api 1
server.get("/transactions", (req, res) => {
  res.send(db)
})
server.delete("/transactions/:id", (req, res) => {
  const idFromClient = req.params.id
  const index = db.findIndex((row) => row.id === idFromClient)
  db.splice(index, 1)
  res.send(idFromClient)
})

server.listen(4444, () => {
  console.log("server started")
})
