const usuarios = [
{
nome: "João",
idade: 25,
},

{
nome: "Ana",
idade: 18,
},

{
nome: "Beatriz",
idade: 15,
},

{
nome: "Carlos",
idade: 16,
},

{
nome: "Antônio",
idade: 32,
},


];

const adultos = usuarios.filter(usuario => usuario.idade >= 18);
console.log("const adultos =", JSON.stringify(adultos, null, 2));
const jovens = usuarios.filter(usuario => usuario.idade < 18);
console.log("const jovens =", JSON.stringify(jovens, null, 2));