/*
Script ES6
*/
// Les variables / Les constantes
const firstName = `Julien Noyer`;
const birthDate = 1979;
let mainTitle = document.getElementById('mainTitle');

// Le templating de string
mainTitle.innerHTML = `Bonjour ${firstName}, vous avez ${ 2018 - birthDate }`

// Fonction fléchée
const twice = paramNumber => console.log( paramNumber * 2 );
twice(5);

// Valeur par défaut des paramêtres
const sayHello = (userName = `Julien`, userAge = 38) => {
    console.log( `Bonjour ${userName}, vous avez ${userAge} ans`);
};

sayHello(`Abdel`, 34);
sayHello(`Pierre`);
sayHello();


// Rest parameter
const userSkills = ( userName, ...skills ) => {

    console.log( userName, skills )

    for( let item of skills ){
        console.log(item)
    }

}

userSkills( `Julien`, true, `test`, 12345 );
userSkills( `Julien`, 12345 );
userSkills( `Julien`, 12345, true, `test`, 12345, true, `test` );



// Spread operator
let spread = [true, 14]
let myArray = [`Sophia`, ...spread]
console.log(myArray)