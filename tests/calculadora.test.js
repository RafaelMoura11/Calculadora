import { somar, subtrair, multiplicar, dividir } from "../src/calculadora.js";

describe("Função somar", () => {
  test("CT01: somar 10 + 0 deve resultar em 10", () => {
    // Arrange
    const x = 10;
    const y = 0;
    const resultadoEsperado = 10;

    // Act
    const resultado = somar(x, y);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("Função subtrair", () => {
  test("CT01: 10 - 4 deve resultar em 6", () => {
    const x = 10;
    const y = 4;
    const resultadoEsperado = 6;
    const resultado = subtrair(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });

  test("CT02: 5 - (-3) deve resultar em 8", () => {
    const x = 5;
    const y = -3;
    const resultadoEsperado = 8;
    const resultado = subtrair(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });

  test("CT03: 7 - 7 deve resultar em 0", () => {
    const x = 7;
    const y = 7;
    const resultadoEsperado = 0;
    const resultado = subtrair(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("Função multiplicar", () => {
  test("CT01: 4 * 5 deve resultar em 20", () => {
    const x = 4;
    const y = 5;
    const resultadoEsperado = 20;
    const resultado = multiplicar(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });

  test("CT02: 0 * 10 deve resultar em 0", () => {
    const x = 0;
    const y = 10;
    const resultadoEsperado = 0;
    const resultado = multiplicar(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });

  test("CT03: -3 * 6 deve resultar em -18", () => {
    const x = -3;
    const y = 6;
    const resultadoEsperado = -18;
    const resultado = multiplicar(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("Função dividir", () => {
  test("CT01: 10 / 2 deve resultar em 5", () => {
    const x = 10;
    const y = 2;
    const resultadoEsperado = 5;
    const resultado = dividir(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });

  test("CT02: 12 / -3 deve resultar em -4", () => {
    const x = 12;
    const y = -3;
    const resultadoEsperado = -4;
    const resultado = dividir(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });

  test("CT03: 9 / 0 deve retornar mensagem de erro", () => {
    const x = 9;
    const y = 0;
    const resultadoEsperado = "Não é possível dividir por zero!";
    const resultado = dividir(x, y);
    expect(resultado).toBe(resultadoEsperado);
  });
});
