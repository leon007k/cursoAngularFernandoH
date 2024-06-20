function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: number = addNumbers(10, 20);

const resultArrowFunction = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

// * Es necesario que para ejecutar la funcion en la consola
// * esta sea asignada a una variable
// * como se muestra con => resultArrow: resultArrowFunction(1, 2)
/* console.log({
  result,
  resultArrow: resultArrowFunction(1, 2),
  multiply: multiply(20),
}); */

// # Interfaces con funciones
// * Se pueden definir interfaces con funciones
// * teniendo en cuenta los parametros y el tipo de retorno
interface Character {
  name: string;
  hp: number;
  showHp: (userName: string) => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 10,
  showHp(userName: string) {
    console.log(`Puntos de vida de ${userName}: ${this.hp}`);
  },
};

healCharacter(strider, 50);
strider.showHp("Leonardo");

export {};
