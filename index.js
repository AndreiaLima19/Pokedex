const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

const pokedex = [
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
];

let message = "";

app.get("/", (req, res) => {

    setTimeout(() => {
        message = ""
    }, 5000);

    res.render("index", {titulo: "Pokédex", lista:pokedex, message}); 
});
 
app.get("/cadastro", (req, res) => {
    res.render("cadastro",{titulo: "Cadastrar Pokémon"}); 
});

app.post("/new", function (req, res){
    const pokemon = req.body;

    pokedex.push(pokemon);

    message = "Pokémon cadastrado";

    setTimeout(() => {
        message = "";
    }, 1000);

    res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = pokedex[id];
    message = "";
    res.render("detalhes", {titulo: "Detalhes Pokémon", pokemon}); 
});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));