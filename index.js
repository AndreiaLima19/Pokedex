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
        {numero: '010',
        nome: 'Caterpie ',
        tipo: 'Bug',
        imagem: '/img/caterpie.png',
        descricao: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies',
        altura: '0.3 m',
        peso: '2.9 kg',
        categoria: 'Worm',
        habilidade: 'Shield Dust'
        },
        {numero: '011',
        nome: 'Metapod',
        tipo: 'Bug',
        imagem: '/img/metapod.png',
        descricao: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack',
        altura: '0.7 m',
        peso: '9.9 kg',
        categoria: 'CategoryCocoon',
        habilidade: 'Shed Skin'
        },
        {numero: '012',
        nome: 'Butterfree',
        tipo: 'Bug, Flying',
        imagem: '/img/butterfree.png',
        descricao: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air',
        altura: '1.1 m',
        peso: '32.0 kg',
        categoria: 'Butterfly',
        habilidade: 'Compound Eyes'
        }

        // {nome: 'teste nome',
        // tipo: 'teste tipo',
        // descricao: 'teste descricao'
        // },
        // {nome: 'teste nome2',
        // tipo: 'teste tipo2',
        // descricao: 'teste descricao2'
        // },
        // {nome: 'teste nome3',
        // tipo: 'teste tipo3',
        // descricao: 'teste descricao3'
        // },
    ];
    res.render("index", {titulo: "Pokédex", lista:conteudos}); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.get("/detalhes", (req, res) => {
    res.render("detalhes"); // Nome do arquivo, o EJS já busca dentro da pasta views.
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));