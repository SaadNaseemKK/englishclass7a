console.log("Befor Preparaing Dinner");

function prepareFood(callback) {

    setTimeout(() => {
        console.log("Preparing Dinner");
        callback("Food Prepared by preparefood function");
    },20);
}

function myCallback(value){
    console.log("value :",value);
}

prepareFood(myCallback);

console.log("Dinner is ready");