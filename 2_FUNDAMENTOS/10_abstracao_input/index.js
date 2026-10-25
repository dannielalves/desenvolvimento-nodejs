import { input } from '@inquirer/prompts';

// Pergunta a primeira nota
const p1 = await input({
    message: 'Qual a primeira nota?'
});

// Pergunta a segunda nota
const p2 = await input({
    message: 'Qual a segunda nota?'
});

// Exibe as respostas
// console.log({ p1, p2 });

const media = (parseInt(p1) + parseInt(p2))/2

console.log(`Média: ${media}`)
