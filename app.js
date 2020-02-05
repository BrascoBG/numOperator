function numbers([arg1, arg2 ,arg3]){
  let n1 = Number(arg1);
  let n2 = Number(arg2);
  let operator = arg3;
  let solution;
  let evenOdd;

  if(operator === "-"){
    solution = n1 - n2;
  } else if(operator === "+"){
    solution = n1 + n2;
  } else if(operator === "*"){
    solution = n1 * n2;
  } else if(operator === "/" && n2 === 0 || operator === "%" && n2 === 0){
    console.log('Error! Cannot divide ' + n1 + ' by zero!')
  } else if(operator === "/"){
    solution = n1 / n2;
  } else if(operator === "%"){
    solution = n1 % n2;
  }
  if(solution % 2 == 0){
    evenOdd = "Even";
  } else{
    evenOdd = "Odd"
  }
  if(solution){
    console.log(n1 + " "+ operator + " " + n2 + " = " + solution + " - " + evenOdd);
  }
}

numbers([10,5,'+']);
