const usuario = [
{
    nome: "João",
    idade: 25,
    maiorDeIdade: true
},

{
    nome: "Ana",
    idade: 18,
    maiorDeIdade: true
},

{
    nome: "Beatriz",
    idade: 15,
    maiorDeIdade: false
},

{
    nome: "Carlos",
    idade: 16,
    maiorDeIdade: false
},

{
    nome: "Antõnio",
    idade: 32,
    maiorDeIdade: true
},

]

console.log(JSON.stringify(usuario, null, 2));