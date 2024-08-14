// 0 - Bajar repo, hacer hola mundo console.log
console.log("hola mundo");

// 2 - Funciones:
function add(firstOperator, secondOperator) {
    return firstOperator + secondOperator;
}
let resultAdd = add(1,3);
console.log(resultAdd);

function subtract(firstOperator, secondOperator) {
    return firstOperator - secondOperator;
}
let resultSubstract = subtract(3, 1);
console.log(resultSubstract);

function divide(firstOperator, secondOperator) {
    return firstOperator / secondOperator;
}
let resultDivide = divide(6,2);
console.log(resultDivide);

function multiply(firstOperator, secondOperator) {
    return firstOperator*secondOperator;
}
let resultMultiply = multiply(2,3);
console.log(resultMultiply);


// 3 - Funcion
function dress(temperature, isRaining) {
    let result;
    if (isRaining) {
        result = "llevar paraguas ☂️";
    }
    if (temperature > 30) {
        result = result + " ir de short y usar lentes";
    }
    if (temperature < 10) {
        result = result + "ir en auto";
    }
    return result;
}
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
let resultDress = dress(31, true);
console.log(resultDress);

// 4 - Funcion
function calculate(operation, firstOperator, secondOperator) {
    switch (operation) {
        case add:
            return add(firstOperator, secondOperator);
        case subtract:
            return subtract(firstOperator, secondOperator);
        case multiply:
            return multiply(firstOperator, secondOperator);
        case divide:
            return divide(firstOperator, secondOperator);
    }
}
let resultCalculate = calculate(add, 2, 3);
console.log(resultCalculate);

// 5 - Funcion
function eating(name, foods) {
    for (index in foods) {
        console.log(name + " is eating " + foods[index]);
    }
}
eating("serendipia",["🍓", "🥐", "🥟", "🥗", "🥂"]);

// 6 - Funcion
function finalCountDown(count) {
    for (let i = count; i >= 0; i--) {
        console.log(i);
    }
}
let resultCountDown = finalCountDown(5);

// 7 - Funcion
function getGrade(score) {
    if (score < 0) {
        return "invalid score";
    }
    if (score > 0 && score < 40) {
        return "D";
    } else if (score <= 60) {
        return "R";
    } else if (score <= 74) {
        return "B";
    } else if (score <= 84) {
        return "BMB";
    } else if (score <= 96) {
        return "MB";
    } else if (score <= 100) {
        return "S";
    }
}
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
console.log(getGrade(54));

// 8 - Funcion
function person(name) {
    this.name = name;
    this.cart = [];
}
function fillCart(person, articlesCollection) {
    for (index in articlesCollection) {
        person.cart[person.cart.lenght + index] = articlesCollection[index];
    }
}
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles
let persona = new person("kahoot");
fillCart(persona, ['🥑','🍌','🥭', '🍌']);
eating(persona.name, persona.cart);

// 9 - Funcion
function countBanana(inventory) {
    counter = 0;
    for (index in inventory) {
        if (inventory[index] == "🍌") {
            counter++;
        }
    }
    return counter;
}
let bananaaa = countBanana(['🥑','🍌','🥭', '🍌']);
console.log(bananaaa);

// 10 - Function
function getTotal(inventory) {
    let total = 0;
    for (index in inventory) {
        total = total + (inventory[index].price * inventory[index].quantity);
    }
    return total;
}
let total = getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]);
console.log(total);
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

