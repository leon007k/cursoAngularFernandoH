let skills: string[] = ["bash", "counter", "healing", "fireball"];

// * Con la interfaz se puede definir un objeto con propiedades y métodos
// * que deben ser implementados en un objeto
// * En este caso, se define una interfaz llamada Character para el objeto strider
// * se agrega al homeTown como una propiedad opcional con el signo de interrogación
interface Character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bash", "counter"],
};

strider.homeTown = "Gondor";

console.table(strider);
console.table(skills);

export {};
