import Data from './data.json';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

ctx.fillStyle = 0xFFFFFF;
ctx.fillRect(0, 0, canvas.width, canvas.height);


let dataLength = Data.tracks.length;
let timeScale = canvas.height / Data.duration;
let minNote = 25;
let maxNote = 90;
let dif = canvas.width / (maxNote - minNote)
for (let i = 0; i < dataLength; i++) {
  let d = Data.tracks[i].notes;
  for (let j = 0; j < d.length; j++) {
    let note = d[j];
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect((note.midi-minNote) * dif, note.time * timeScale, dif, note.duration * timeScale);
  }
}
