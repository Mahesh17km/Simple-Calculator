const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input
}

function clearScreen(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

// function calPercentage(){
//     try {
//         var currentInput = display.value;

//         var parts = currentInput.split('%');
//         var number = parseFloat(parts[0]);
//         var percentage = parseFloat(parts[1]);
//         if (isNaN(number) || isNaN(percentage)) {
//             display.value = "Invalid input";
//             return;
//         }
//         display.value = (number * percentage) / 100;
//     } 
//     catch (error) {
//         display.value = "Error";
//     }
// }
