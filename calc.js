const operators = ['+','-','/','*'];
const operation = "";




const addNums = (...nums) =>{
    let result = nums.reduce((num1,num2)=>num1+num2);
    return result;

};

const subTract = (a,b)=> {
    let result = (a-b);
    return result;

};


const multiply = (a,b)=> {
    let result = (a*b);
    return result;
    
 };


 const divide = (a,b)=>{
    let result = (a/b);
    return result;
 };


 function operate(firstNum,secondNum,operation){


 };

 function dis(val)
         {
             document.getElementById("result").value+=val
         }

 function clr()
         {
             document.getElementById("result").value = ""
         }

function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }

