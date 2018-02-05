'use strict';

/*
Script ES6
*/
// Les variables / Les constantes
var firstName = 'Julien Noyer';
var birthDate = 1979;
var mainTitle = document.getElementById('mainTitle');

// Le templating de string
mainTitle.innerHTML = 'Bonjour ' + firstName + ', vous avez ' + (2018 - birthDate);

// Fonction fléchée
var twice = function twice(paramNumber) {
    return console.log(paramNumber * 2);
};
twice(5);

// Valeur par défaut des paramêtres
var sayHello = function sayHello() {
    var userName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Julien';
    var userAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 38;

    console.log('Bonjour ' + userName + ', vous avez ' + userAge + ' ans');
};

sayHello('Abdel', 34);
sayHello('Pierre');
sayHello();

// Rest parameter
var userSkills = function userSkills(userName) {
    for (var _len = arguments.length, skills = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skills[_key - 1] = arguments[_key];
    }

    console.log(userName, skills);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = skills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

userSkills('Julien', true, 'test', 12345);
userSkills('Julien', 12345);
userSkills('Julien', 12345, true, 'test', 12345, true, 'test');

// Spread operator
var spread = [true, 14];
var myArray = ['Sophia'].concat(spread);
console.log(myArray);