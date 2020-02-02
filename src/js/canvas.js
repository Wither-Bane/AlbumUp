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
  ctx.fillStyle = "hsl(0, 0%, 4%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let bpm = parseInt(data.header.tempos.bpm);
  let dataLength = data.tracks.length;
  // assume: songDuration = last note of first track
  let songDuration = data.tracks[0].notes[data.tracks[0].notes.length - 1].time;
  let timeScale = canvas.height / songDuration;
  let minNote = 25;
  let maxNote = 90;
  let dif = canvas.height / (maxNote - minNote);
  let index = colors.length;
  let c = 0;

  for (let i = 0; i < dataLength; i++) {
    let d = data.tracks[i].notes;
    console.log(data.tracks[i]);
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
