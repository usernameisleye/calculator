class Calculator{
    constructor(upperDisplayText, lowerDisplayText){
        this.upperDisplayText = upperDisplayText;
        this.lowerDisplayText = lowerDisplayText;
        this.clear();
    }

    //clearing all displays and opration from the onset
    clear(){
        this.lowerDisplay = '';
        this.upperDisplay = '';
        this.operation = undefined;
    }

    delete(){}

    //first of is checking if an '.' is in the lower display and setting a condition that only one can display, and secondly is appending new input value to the display
    appendNumber(number){
        if(number === '.' && this.lowerDisplay.includes('.')){return}
        this.lowerDisplay = this.lowerDisplay.toString() + number.toString()
    }

    //set of funcs dealing with operation values and updating(and calculationg(what the compute() function is for!)) upper display when lower is cleared
    chooseOperation(operation){
        if(lowerDisplay === ''){return}
        if(upperDisplay != ''){
            this.compute()
        }
        this.operation = operation;
        this.upperDisplay = this.lowerDisplay
        this.lowerDisplay = ''
    }

    compute(){

    }

    //updating the constructor values to the objects
    updateDisplay(){
        this.lowerDisplayText.innerHTML= this.lowerDisplay
        this.upperDisplayText.innerHTML = this.upperDisplay
    }
}


const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation'); 
const equalsBtn = document.getElementById('equals');
const deleteBtn = document.getElementById('delete');
const allClearBtn = document.getElementById('all-clear');
const upperDisplay = document.getElementById('upperDisplay');
const lowerDisplay = document.getElementById('lowerDisplay');

//calculator object taking blueprint for Calculator class
const calculator = new Calculator(upperDisplay, lowerDisplay)

//looping through numberButtons and appending the 'clicked' number to it, then updating display
numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

//
operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})