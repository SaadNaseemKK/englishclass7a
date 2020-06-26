/*
Here we are coding in pyramid way
in this approach all the callbacks functions are passed as argument to another function.
*/
console.log("index3.js");
console.log("Breakfast");

function prepareFood(callback) {

    setTimeout(() => {
        console.log("prepareFood: Preparing.");
        callback("Done.");
    }, 10);
}

function prepareFrenchToast(callback) {

    setTimeout(() => {
        console.log("prepareFrenchToast: Preparing.");
        callback("Done.");
    }, 10);
}

function prepareCoffee(callback) {

    setTimeout(() => {
        console.log("prepareCoffee: Preparing.");
        callback("Done.");
    }, 10);
}

prepareFood(function (value) {
    console.log("prepareFoodCallback :", value);
    prepareFrenchToast(function (value) {
        console.log("prepareFrenchToastCallback :", value);
        prepareCoffee(function (value) {
            console.log("prepareCoffeeCallback :", value);
        });
    });
});

console.log("Dinner");