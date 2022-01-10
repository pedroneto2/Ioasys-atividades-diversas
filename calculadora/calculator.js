const readline = require("readline");

const calculate = (num1, num2, operation) => {
  operation = operation.toLowerCase();
  if (typeof +num1 !== 'number' || typeof +num2 !== 'number')
    return { result: null, error: "Please, insert valid numbers!" };
  const operations = {
    sum: (num1, num2) => +num1 + +num2,
    sub: (num1, num2) => num1 - num2,
    mult: (num1, num2) => num1 * num2,
    div: (num1, num2) => num1 / num2,
    pot: (num1, num2) => num1 ** num2,
    raiz: (num1, num2) => num1 ** 1 / num2,
  };
  if (Object.keys(operations).every((key) => key !== operation))
    return { result: null, error: "Please, insert a valid operation!" };
  return { result: operations[operation](num1, num2) };
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runsCalculator = async () => {
  let validation;
  while (!validation) {
    let num1, num2, operation;
    await new Promise((resolve) =>
      rl.question("Digite o primeiro número: ", (num) => resolve((num1 = num)))
    );
    await new Promise((resolve) =>
      rl.question("Digite o segundo número: ", (num) => resolve((num2 = num)))
    );
    await new Promise((resolve) =>
      rl.question("Digite qual operação você deseja: ", (op) =>
        resolve((operation = op))
      )
    );
    const { result, error } = calculate(num1, num2, operation);
    error
      ? console.log(error)
      : console.log("O resultado da operação é: " + result);
    console.log("\n");
    validation = !error; // If error occurs, validation = false, else validation = true
  }

  await new Promise((resolve) =>
    rl.question("Deseja fazer outra operação? ", (ans) => {
      resolve(ans.match(/[nN(nao)(no)]/gi) ? process.exit() : runsCalculator());
    })
  );
};

console.log("Calculadora JavaScript");
console.log(`
Operações:
  soma = sum;
  subtração = sub;
  multiplicação = mult;
  divisão = div;
  potência = pot;
  raiz = raiz;
`);
runsCalculator();
