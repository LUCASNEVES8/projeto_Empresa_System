const db = require("../server/bd.js")

class FuncionarioRepository {

  async listar() {
    const [rows] = await db.query("SELECT * FROM funcionario")
    return rows
  }

  async cadastrar(funcionario) {
    const { nome, cpf, funcao } = funcionario

    const sql = `
      INSERT INTO funcionario (nome, cpf, funcao)
      VALUES (?, ?, ?)
    `

    const [result] = await db.query(sql, [nome, cpf, funcao])
    return result
  }

  async buscarPorCPF(cpf) {
  const [rows] = await db.query(
    "SELECT * FROM funcionario WHERE cpf = ?",
    [cpf]
  )
  return rows[0]
  }
}

module.exports = new FuncionarioRepository()