/*
Here one more task is added making 3 tasks so 3 function and 3 callbacks.
*/
console.log("index2.js");
console.log("Breakfast");

function prepareFood(callback) {

    setTimeout(() => {
        console.log("prepareFood: Preparing.");
        callback("Done.");
    }, 10);
}

function prepareFoodCallback(value) {
    console.log("prepareFoodCallback :", value);
    prepareFrenchToast(prepareFrenchToastCallback);
}

function prepareFrenchToast(callback) {

    setTimeout(() => {
        console.log("prepareFrenchToast: Preparing.");
        callback("Done.");
    }, 10);
}

function prepareFrenchToastCallback(value) {
    console.log("prepareFrenchToastCallback :", value);
    prepareCoffee(prepareCoffeeCallback);
}


function prepareCoffee(callback) {

    setTimeout(() => {
        console.log("prepareCoffee: Preparing.");
        callback("Done.");
    }, 10);
}

function prepareCoffeeCallback(value) {
    console.log("prepareCoffeeCallback :", value);
}

prepareFood(prepareFoodCallback);


console.log("Dinner");