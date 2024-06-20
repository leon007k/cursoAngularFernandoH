const name: string = "John Doe";

// ! se determina que esta variable puede ser un numero o una cadena de FLow
let hpPoints: number | "FLow" = 95; 
const isValid: boolean = true;

hpPoints = "FLow";

console.log({
  name,
  hpPoints,
  isValid,
});

export {};
