import { Greeter } from './greeter';
// import * as MyGenericClass from './greeter';

// Import stylesheets
import './style.css';

// CONSOLE.log

/*
console.log("Olá, Mundo!");
console.log("Olá, Typescript");

alert("Olá Mundo"); */

// laços e condicionais

/* 
for (let j = 0; j < 5; j++) {
  console.log(j);
}

for(let i=0; i<20; i++){
  if(i%2==0){
  console.log(i);
  }
} */

// Write TypeScript code!

// let title: string = 'Apresentando o Typescript';
// let paragraph: string = 'Aprendendo código em Typescript';

// Forma 1

/*const appDiv: HTMLElement = document.getElementById('app.title');
appDiv.innerHTML = `
<h1>${title}</h1>
<h2>Aprendendo Typescript</h2>
<p>${paragraph}</p>
`;*/

// Forma 2 - com index.html

/*const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = paragraph; */

// Contador
let title: string = 'Apresentando o Typescript';
let paragraph: string = 'App Contador';

let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter + '';
}, 1000);

// eventos
const btn = document.getElementById('app.btn');
btn.addEventListener('click', alertMethod);

function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando pelo Typescript');
}

const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

let greeter = new Greeter('Dev!');

const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();
