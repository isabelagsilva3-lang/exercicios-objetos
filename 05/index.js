const curso = {
id: 1234,
nome: "Lógica de Programação",
aulas: [
    {
        id: 1,
        nome: "Introdução a programação"
    },
    {
        id: 2,
        nome: "Variáveis"
    },
    {
        id: 3,
        nome: "Condicionais"
    },
    {
        id: 4,
        nome: "Arrays"
    },
]
};

console.log(JSON.stringify(curso.aulas, null, 2));

