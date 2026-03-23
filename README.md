# 🏢 Empresa System

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js">
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge">
</p>

---

## 📌 Sobre o projeto

O **Empresa System** é uma API REST desenvolvida para simular o gerenciamento de dados empresariais, permitindo operações completas de CRUD (Create, Read, Update, Delete).

O projeto segue boas práticas de desenvolvimento com arquitetura **MVC**, separando responsabilidades entre rotas, regras de negócio e acesso aos dados.

---

## 🎯 Objetivo

Este projeto foi desenvolvido com foco em:

- Praticar **Node.js + Express**
- Aplicar arquitetura **MVC**
- Criar uma **API REST profissional**
- Estruturar código escalável
- Preparar projeto para portfólio

---

## 🧠 Tecnologias utilizadas

- ⚙️ Node.js
- 🚀 Express.js
- 📦 JavaScript (ES6+)
- 🗂️ JSON (Fake Database)
- 🔄 Nodemon (dev)

---

## 📂 Estrutura do projeto

📦 projeto_Empresa_System
├── 📁 controller
│ └── controller.js
│
├── 📁 service
│ └── service.js
│
├── 📁 repository
│ └── bd.json
│
├── server.js
├── package.json
└── README.md


---

## ⚙️ Funcionalidades

✔️ Listar todos os usuários  
✔️ Buscar usuário por ID  
✔️ Cadastrar novo usuário  
✔️ Atualizar dados  
✔️ Remover usuário  
✔️ Tratamento de erros  

---

## 🌐 Endpoints da API

| Método | Rota                | Descrição              |
|--------|---------------------|------------------------|
| GET    | /usuarios           | Listar usuários        |
| GET    | /usuarios/:id       | Buscar por ID          |
| POST   | /usuarios           | Criar usuário          |
| PUT    | /usuarios/:id       | Atualizar usuário      |
| DELETE | /usuarios/:id       | Remover usuário        |

---

## ▶️ Como executar o projeto

### 🔽 Clonar repositório

```bash
git clone https://github.com/LUCASNEVES8/projeto_Empresa_System

📁 Entrar na pasta
cd projeto_Empresa_System
📦 Instalar dependências
npm install
▶️ Rodar o servidor
node server.js

ou (modo desenvolvimento):

npx nodemon server.js
