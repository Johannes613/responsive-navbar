let operator = null;
let currentInput ='';
let previousInput = '';

for(let input1 of document.querySelectorAll('.num')){
    operator = '';
    input1.onclick = display;
    function display(){
        document.querySelector('#textArea').value = '';
        currentInput += input1.value;
        document.querySelector('#textArea').value = currentInput;
    }
}
for(let opt of document.querySelectorAll('.operator')){
    opt.onclick = displayOp;
    function displayOp(){
        previousInput = currentInput;
        currentInput = '';
        operator = opt.value;
        document.querySelector('#textArea').value = opt.value;
    }
}
document.getElementById('clear').onclick = clearDisplay;

function clearDisplay(){
    document.querySelector('#textArea').value = '';
    previousInput = '';
    currentInput = '';
}

let result = 0;
let equals = document.querySelector('#equalto');
equals.onclick = calculate;


function calculate(){
    if(previousInput && currentInput){
        in1= parseFloat(previousInput)
        in2 = parseFloat(currentInput)
            switch(operator){
            case '+':
                result =  in1 + in2;
                break;
            case '-':
                result = in1 - in2; 
                break; 
            case '*':
                result =  in1 * in2;     
                break;
            case '/':
                result =  in1 / in2;     
                break;
        }
        document.querySelector('#textArea').value = '' + result;
        currentInput = result;

            }
            


         }
        
            
