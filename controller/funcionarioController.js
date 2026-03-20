const express = require("express")
const router = express.Router()
const repository = require("../repository/funcionarioRepository.js")

// GET
router.get("/funcionarios", async (req, res) => {
  try {
    const funcionarios = await repository.listar()
    res.json(funcionarios)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

// POST
router.post("/funcionarios", async (req, res) => {
  try {
    const { nome, cpf, funcao } = req.body

    // ✅ Validação de campos obrigatórios
    if (!nome || !cpf || !funcao) {
      return res.status(400).json({
        erro: "Todos os campos são obrigatórios"
      })
    }

    // ✅ Validação de CPF duplicado (CORRETO AGORA)
    const existe = await repository.buscarPorCPF(cpf)

    if (existe) {
      return res.status(400).json({
        erro: "CPF já cadastrado"
      })
    }

    // ✅ Cadastro
    await repository.cadastrar({ nome, cpf, funcao })

    res.status(201).json({
      mensagem: "Funcionário cadastrado com sucesso"
    })

  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

module.exports = router