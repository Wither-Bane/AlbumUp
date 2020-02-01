import Data from './data.json';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

let dataLength = Data.tracks.length;
let timeScale = canvas.height / Data.duration;
console.log(timeScale);
for (let i = 0; i < dataLength; i++) {
  let d = Data.tracks[i].notes;
  for (let j = 0; j < d.length; j++) {
    let note = d[j];
  }
}
ctx.fillStyle = 0xFFFFFF;
ctx.fillRect(0, 0, canvas.width, canvas.height);
