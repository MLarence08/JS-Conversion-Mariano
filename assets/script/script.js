
function MultiplicationConvert(x, y) {
    return parseFloat(x) * parseFloat(y);
}
function DivisionConvert(x, y) {
    return parseFloat(x) / parseFloat(y);
}


function displayKiloConv() {
    let KiloValue = document.getElementById("kilograms").value;
    let Ounce = 35.274;
    let Grams = 1000;
    let Pounds = 2.205;
    
    document.getElementById("displayKgOunce").innerHTML = MultiplicationConvert(KiloValue, Ounce).toFixed(2) + " oz.";

    document.getElementById("displayKgGrams").innerHTML = MultiplicationConvert(KiloValue, Grams).toFixed(2) + " g.";

    document.getElementById("displayKgPounds").innerHTML = MultiplicationConvert(KiloValue, Pounds).toFixed(2) + " lbs.";

}

function displayGramsConv() {
    let GramsValue = document.getElementById("grams").value;
    let Ounce = 28.35;
    let Kilograms = 1000;
    let Pounds = 453.6;
    
    document.getElementById("displayGOunce").innerHTML = DivisionConvert(GramsValue, Ounce).toFixed(5) + " oz.";

    document.getElementById("displayGKilograms").innerHTML = DivisionConvert(GramsValue, Kilograms).toFixed(5) + " kg.";

    document.getElementById("displayGPounds").innerHTML = DivisionConvert(GramsValue, Pounds).toFixed(5) + " lbs.";

}

function displayPoundsConv() {
    let GramsValue = document.getElementById("pounds").value;
    let Ounce = 16;
    let Kilograms = 2.205;
    let Grams = 453.6;
    
    document.getElementById("displayPOunce").innerHTML = MultiplicationConvert(GramsValue, Ounce).toFixed(2) + " oz.";

    document.getElementById("displayPKilograms").innerHTML = DivisionConvert(GramsValue, Kilograms).toFixed(2) + " kg.";

    document.getElementById("displayPGrams").innerHTML = MultiplicationConvert(GramsValue, Grams).toFixed(2) + " g.";

}

