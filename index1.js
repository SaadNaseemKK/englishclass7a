/*
Here we have used callbacks for 2 tasks so 2 functions and 2 callbacks
*/
console.log("index1.js");
console.log("Breakfast");

function prepareFood(callback) {

    setTimeout(() => {
        console.log("prepareFood: Preparing.");
        callback("Done.");
    }, 20);
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
}

prepareFood(prepareFoodCallback);


console.log("Dinner");