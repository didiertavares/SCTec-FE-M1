// essa forma abaixo ("require") é de Common.js; é considerada obsoleta no uso de Node.js.
// const prompt = require("prompt-sync")();
// const chalk = require("chalk");

// abaixo, forma + moderna de tratar importação de libs e dados:
// para tanto, é preciso trocar type: Common.js por module no arquivo package.json 
import promptSync from "prompt-sync";

// elimino a versão 4.1.2 incompatível da lib chalk pelo terminal: npm remove chalk
// e reinstala-se sem especificar versão -> última versão por padrão
import chalk from "chalk";

// import perguntas from "./perguntas.js";

const prompt = promptSync();

const resposta = prompt("Qual o seu nome? ");
console.log(chalk.bold.blue(resposta));

// let acertos = 0;

// for (let i = 0; i < perguntas.length; i++) {
//   const questao = perguntas[i];

//   console.log(chalk.bold.blue("\n" + questao.pergunta));
//   console.log(chalk.bold.hex("#FFA500")(questao.alternativas.join("    ")));

//   const resposta = prompt("Qual a sua resposta (número)?");

//   if (Number(resposta) === questao.correta) {
//     console.log(chalk.bold.green("Acertou!"));
//     acertos++;
//   } else {
//     console.log(chalk.bold.red("Errou!"));
//   }

//   // console.log(questao);
// }

// console.log("Você acertou " + acertos + " perguntas!");
// // export const perguntas = [...]
