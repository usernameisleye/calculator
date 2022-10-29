//creating a class with a constructor function where the inputs on bothe upper and lower displays are stored and shown
class Calculator{
    constructor(upperDisplayTextElememt, lowerDisplayTextElememt){
        this.upperDisplayTextElememt = upperDisplayTextElememt;
        this.lowerDisplayTextElememt = lowerDisplayTextElememt;
        //this is to set all input to default(empty) immediately calculator is displayed
        this.clear();
    } 

    //functions that occur when using calculator
    clear(){
        this.upperDisplay = '';
        this.lowerDisplay = '';
        this.operation = undefined;
    }

    delete(){

    }

    //function taking the number the user selected and using it
    appendNum(number){
        this.upperDisplay = number
    }

    //function taking the operation that the user selected and using it
    choseOperation(operation){

    }

    //'take values inside calculator and compute a single value needed for display'
    compute(){

    }

    updateDisplay(){
        this.upperDisplayTextElememt.innerText = this.upperDisplay
    }
}

//the numbers and operations
const calcOperations = document.querySelectorAll('.operation');
const calcButtons = document.querySelectorAll('.number');
//the sections of display
const upperDisplay = document.getElementById('upperDisplay');
const lowerDisplay = document.getElementById('lowerDisplay');
//special buttons
const allClearBtn = document.getElementById('all-clear');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');

//storing Calculator class in a var and passing in constructor values
const calculator = new Calculator(upperDisplayTextElememt, lowerDisplayTextElememt);

calcButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();

        console.log('WHYYYY')
    })
})
