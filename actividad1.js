function fibonacci(num){
    if (num == 0){
        return num;
    }
    if (num == 1){
        return num;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Ingrese un numero: ", numero => {
    console.log(`F(${numero}) = ${fibonacci(numero)}`);
    readline.close();
  });