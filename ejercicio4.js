function multiplicar(num) {
    return num * 23;
  }
  
  const num = parseInt(process.argv[2]);
  const resultado = multiplicar(num);
  console.log(`El resultado es: ${resultado}`);
  