// Typer une variable
let userName: string;
userName = `Julien`

// Typer un tableau
let myArray: Array<string|number> = [
    `Javascript`,
    `ES6`,
    `TypeScript`,
    12345
];
 
// Typer une fonction
let twice = (numberParam: number): string => {
    return `Le double de ${numberParam} est ${numberParam * 2}`
};
twice(5)

// Typer un objet
interface User {
    firstname: string,
    lastname: string,
    age: number,
    skills: Array<string>
    isMajor: boolean
};

let julien: User = {
    firstname: `Julien`,
    lastname: `Noyer`,
    age: 38,
    skills: [`Javascript`],
    isMajor: true
};