// Funções da Calculadora

export const somar = (x, y) => x + y;

export const subtrair = (x, y) => x - y;

export const multiplicar = (x, y) => x * y;

export const dividir = (x, y) => {
  if (y === 0) {
    return "Não é possível dividir por zero!";
  }
  return x / y;
};
