import data from "./ourdata.json";
import colors from "./colors";

document.querySelector("#text").value = JSON.stringify(data, undefined, 2);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerHeight;
canvas.height = innerHeight;

generateArt(data);

document.getElementById("play").addEventListener("click", () => {
  generateArt(JSON.parse(document.getElementById("text").value));
}, false);

function generateArt(data) {
<<<<<<< HEAD

  ctx.fillStyle = "hsl(0, 0%, 4%)";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

=======
  ctx.fillStyle = "hsl(0, 0%, 4%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
>>>>>>> 6c9f0b327a526993c5cbe4e5c63ed6cf493164fd
  let bpm = parseInt(data.header.tempos.bpm);
  let dataLength = data.tracks.length;
  // assume: songDuration = last note of first track
  let songDuration = data.tracks[0].notes[data.tracks[0].notes.length - 1].time;
  let timeScale = canvas.height / songDuration;
  let minNote = 200;
  let maxNote = 0;
  for (let i = 0; i < dataLength; i++) {
    let d = data.tracks[i].notes
    for (let j = 0; j < d.length; j++) {
      let n = d[j];
      if (n.midi < minNote) {
        minNote = n.midi;
      }
      if (n.midi > maxNote) {
        maxNote = n.midi;
      }
    }
  }
  minNote--;
  maxNote++;
  let dif = canvas.height / (maxNote - minNote);
  let index = colors.length;
  let c = 0;

  for (let i = 0; i < dataLength; i++) {
    let d = data.tracks[i].notes;
    for (let j = 0; j < d.length; j++) {
      c++;
      ctx.fillStyle =
        "rgb(" +
        colors[c % index][0] +
        "," +
        colors[c % index][1] +
        "," +
        colors[c % index][2] +
        ")";

      let note = d[j];
      ctx.fillRect(
        (note.midi - minNote) * dif,
        note.time * timeScale,
        dif,
        note.duration * timeScale
      );
    }
  }
}
