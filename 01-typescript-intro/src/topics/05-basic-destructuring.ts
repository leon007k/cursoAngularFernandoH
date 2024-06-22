interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const song = "New song";

// # Destructuracion de Objetos
// * Se puede realizar la destructuracion de details en esta misma linea
// ! const { details: { author } } = audioPlayer
// * el tema, es que seria muy facil perderse en la destructuracion
// * Por lo tanto, se realiza agregando una linea mas
const { song: anotherSong, songDuration, details } = audioPlayer;
const { author } = details;

/* console.log({
  Song: song,
  Duration: songDuration,
  Author: author,
}); */

// # Destructuracion de arreglos
// * Manera 1
const dbz: string[] = ["Goku", "Vegeta"];
//const trunks = dbz[3] || "No hay personaje";
const [, , trunks = "not found"] = dbz;
console.log("Personaje 3:", trunks);

// * Manera 2
const artist: string[] = ["Ed Sheeran", "Michael Jackson", "Taylor Swift"];
const { 1: MJ } = artist;
console.log("Artista favorito: ", MJ);
