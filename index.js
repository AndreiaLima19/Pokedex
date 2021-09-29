const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Const para armanezar a porta do servidor

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Substituição de function por arrow function
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/", (req, res) => {
    //const conteudos = ["Express","Dependências","Projeto 2"];
    const conteudos = [
        {nome: 'teste nome',
        tipo: 'teste tipo',
        descricao: 'teste descricao'
        },
        {nome: 'teste nome2',
        tipo: 'teste tipo2',
        descricao: 'teste descricao2'
        },
        {nome: 'teste nome3',
        tipo: 'teste tipo3',
        descricao: 'teste descricao3'
        },
    ];
    res.render("index", {titulo: "Codelab Aula 07", lista:conteudos}); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/detalhes", (req, res) => {
    res.render("detalhes"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));