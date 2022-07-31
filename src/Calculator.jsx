
function add( a,b){
            let sum=a+b;
    return `the sum of ${a} and ${b} is ${sum}`;
}
function sub(c,d){
     let diff=c-d;
    return `the sum of ${c} and ${d} is ${diff}`;
}
function mul(a,b)
{
    return  `the mul of ${a} and ${b} is ${a*b}`;    
}
function div(a,b)
{
    let div=a/b;
    div=div.toFixed(2); 
    return `the div of ${a} and ${b} is ${div}`; 
}
 export {add,sub,mul,div};
