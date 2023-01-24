const π=3.14159265359;
const e =2.7182818284;
let history=document.getElementById("history-value");
let result=document.getElementById("output-value");
let store=0;

function Num(value){
    if(result.innerHTML !="")
    {
        history.innerHTML=result.innerHTML + value;
        result.innerHTML="";
    }
    else{
        history.innerHTML+=value;
    }
}
function Remove(){
    document.getElementById("equal").disabled=false;
    document.getElementById("trigo").selected=true;
    document.getElementById("fun").selected=true;
    history.innerHTML="";
    result.innerText="";
}
function Equal(){
    result.innerHTML= eval(history.innerHTML).toFixed(2);
}
function Backspace(){
    history.innerHTML=(history.innerHTML).substr(0, (history.innerHTML).length-1);
}
function PlusMinus(value){
    if (value=="modeX")
    {
        let a=(history.innerHTML).substr(0,1);
        if (a== "-")
        {
            let mode=history.innerHTML;
            history.innerHTML=`|${mode}|`;
            result.innerHTML=0-mode;
        }
        else
        {
            let mode=history.innerHTML;
            history.innerHTML=`|${history.innerHTML}|`;
            result.innerHTML=mode;
        }
    }
    else
    {
        history.innerHTML=0-history.innerHTML;
    }
}
//Trigonometry Function//
function Trigonometry(){
    let x=document.getElementById("Trigonometry").value;
    switch(x){
        case "sin":
            if (document.getElementById('degtorad').innerText== 'DEG'){
                let rad1=history.innerHTML;
                history.innerHTML=`sin (${rad1})`;
                result.innerHTML=Math.sin(rad1*(π/180));
            }
            else{
                let rad1=history.innerHTML;
                history.innerHTML=`sin(${rad1})`;
                console.log(rad1);
                result.innerHTML=Math.sin(eval(rad1));
            }
        break;
        case "cos":
            if (document.getElementById('degtorad').innerText =='DEG') {
            let rad2 = history.innerHTML;
            history.innerHTML =`cos(${rad2})`;
            result. innerHTML = Math.cos (rad2*(π/ 180) ) ;
            }
            else
            {
            let rad2 = history. innerHTML;
            history.innerHTML = `cos (${rad2})`;
            result. innerHTML = Math. cos (eval (rad2) ) ;
           }
        break;
        case "tan":
            if (document.getElementById('degtorad').innerText =='DEG') {
            let rad3 = history.innerHTML;
            history.innerHTML =`tan(${rad3})`;
            result. innerHTML = Math.tan(rad3 * (π/ 180) ) ;
            }
            else
            {
            let rad3 = history. innerHTML;
            history.innerHTML = `tan(${rad3})`;
            result. innerHTML = Math. tan(eval (rad3) ) ;
           }
        break;
        case "tan":
            if (document.getElementById('degtorad').innerText =='DEG') {
            let rad4 = history.innerHTML;
            history.innerHTML =`cot(${rad4})`;
            result. innerHTML = Math.cot(rad4 * (π/ 180) ) ;
            }
            else
            {
            let rad4 = history. innerHTML;
            history.innerHTML = `cot(${rad4})`;
            result. innerHTML = Math.cot(eval (rad4) ) ;
           }
        break;
        default:
            alert("please select any trigonometry Function")
    }
}
// ƒ Function//
Function=()=>{
    let x=document.getElementById('Function').value;
    switch(x){
        case "abc":
            let fun1=history.innerHTML;
            history.innerHTML=`abc(${fun1})`;
            result.innerHTML=Math.abc(fun1);
            break;
        case "acos":
            let fun2=history.innerHTML;
            history.innerHTML=`acos(${fun2})`;
            result.innerHTML=Math.acos(fun2);
            break;
        case "asin":
            let fun3=history.innerHTML;
            history.innerHTML=`asin(${fun3})`;
            result.innerHTML=Math.asin(fun3);
            break;
        case "acosh":
            let fun4=history.innerHTML;
            history.innerHTML=`acosh(${fun4})`;
            result.innerHTML=Math.acosh(fun4);
        break;
        default:
            alert("please select any function !!");
    }
}
//Factorial//
Factorial=(value) =>{
    document.getElementById('equal').disabled=true;
    let num=history.innerHTML;
    let fact=1;
    history.innerHTML += value;
    for(let i=2;i<=num;i++);{
    fact=fact*1;
    }
    result.innerHTML=fact;
}
//F-E//
toExp=()=>{
    let number = number(history.innerHTML);
    result.innerHTML=number.toExponential();
}
//logerithm//
logerithm=(value)=>{
    let log=history.innerHTML;
    document.getElementById('equal').disabled=true;
    if(value="log"){
        history.innerHTML=`log${log}`;
        result.innerHTML=Math.log10(log);
    }
    else{
        history.innerHTML=`ln<sub>e</sub> ${log}`;
        result.innerHTML=Math.log(log);
    }

}
//MS//
Memory=()=>{
    // document.getElementById('mr').false;
    // document.getElementById('mc').false;
   
    store=eval(document.getElementById("history-value").innerText);
    console.log(store);
}
//MR//
MemoryRead=()=>{
    
    history.innerHTML=store;
    console.log(store);
}
//MC//
MemoryClear=()=>{
    
    store=0;
}
//M+//
MemoryPlus=()=>{
    store += eval(history.innerText);
    console.log(store);
}
//M-//
MemoryMinus=()=>{
    store -= eval(history.innerText);
    console.log(store);
}
//DEG//
DegtoRad=()=>{
    if (document.getElementById('degtorad').innerText =='DEG'){
        document.getElementById('degtorad').innerText =='RAD';
        document.getElementById('degtorad').value =='DEG';
    }
    else{
        document.getElementById('degtorad').innerText ='DEG';
        document.getElementById('degtorad').value =='DEG';
    }
}
//power//
power=(value)=>{
    document.getElementById("equal").disabled ==true;
    if(value=="x^2"){
        result.innerHTML=Math.pow(history.innerHTML, 2);
        history.innerHTML=`${history.innerHTML}<sup>2</sup>`;
    }
    else if(value=="10^x") {
        result.innerHTML=Math.pow(10,history.innerHTML);
        history.innerHTML=`10<sup>${history.innerHTML}</sup>`;
    }
    else if(value=="x^0.5") {
        result.innerHTML=Math.pow(10,history.innerHTML);
        history.innerHTML=`<sup>2</sup>${history.innerHTML}`;
    }
    else if(value=="e^x") {
        result.innerHTML=Math.pow(history.innerHTML);
        history.innerHTML=`e<sup>${history.innerHTML}</sup>`;
    }
    else  {
        result.innerHTML=Math.pow(history.innerHTML,-1);
        history.innerHTML=`1/${history.innerHTML}`;
    }
}