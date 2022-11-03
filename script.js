alert("Welcome to my Calculator web app, still under construction so don't judge!")

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

    delete(){
        this.lowerDisplay = this.lowerDisplay.toString().slice(0, -1)
        // if(this.lowerDisplay === ''){
        //     this.lowerDisplay = '0'
        // }
    }

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
        let compute
        const upper = Number(this.upperDisplay)
        const lower = Number(this.lowerDisplay)
        if(isNaN(upper) || isNaN(lower)){return}
        switch(this.operation){
            case '+':
                compute =  upper + lower
                break
            case '*':
                compute = upper * lower
                break
            case '÷':
                compute = upper / lower
                break
            case '-':
                compute = upper - lower
            default:
                return
        }
        this.upperDisplay = ''
        this.lowerDisplay = compute;
        this.operation = undefined 
    }

    //updating the constructor values to the objects
    //working on why operation is still showing
    updateDisplay(){
        this.lowerDisplayText.innerHTML= this.lowerDisplay
        if(this.operation != null){
            this.upperDisplayText.innerHTML = `${this.upperDisplay} ${this.operation}`
        }else{
            this.upperDisplayText.innerHTML = ''
        }
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

//looping through numberButtons and appending(appendNumber method) the 'clicked' number to it, then updating display
numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

//looping through operationButtons then running the chooseOperation method, then updating display
operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})

//click runs compute function(Calculator method) then updates display
equalsBtn.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

//click runs clear function(Calculator method) then updates display
allClearBtn.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

//click runs delete function(Calculator method) then updates display
deleteBtn.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})