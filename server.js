//Vou instalar o express - 
//Gerenciador de pacotes - NPM

//npm run dev ligar git

const express = require('express')

const server = express()

//server.use(express.json());//Possibilidade de usar o JSON

//importar para ter acesso dos arquivos
const path = require('path')

//expor arquivos estaticos
server.use(express.static('public'));
server.use(express.json())//possitbilita de usar o json

//Eu desenvolvedor, criei este ENDPOINT
server.get('/views/cadastro', (req, res) => {
    res.send(path.join(__dirname, 'views/index.html'));
});

server.get('/pets', (req, res)=>{
    res.send({
        name:"Meu Gato",
        idade: "4 anos",
        peso: "300kg"
    });
});

//http://localhost:3000/cadastro

//Expor para o mundo na porta 3000
server.listen(3000, () => {
    console.log("servidor no ar...");
});


