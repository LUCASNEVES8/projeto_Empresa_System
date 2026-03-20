const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Rotas
const funcionarioController = require("./controller/funcionarioController")
app.use("/", funcionarioController)

// Inicialização
const PORT = process.env.PORT || 3306

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})