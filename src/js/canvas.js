import Data from './data.json';
import { Midi } from '@tonejs/midi';

const colors = [
  '#1BE7FF',
  '#6EEB83',
  '#E4FF1A',
  '#E8AA14',
  '#FF5714'
]

// const Data = Midi.fromUrl('./test1.mid');
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerHeight
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
  console.log(Data.tracks[i]);
  ctx.fillStyle = colors[i % colors.length];
  for (let j = 0; j < d.length; j++) {
    let note = d[j];
    ctx.fillRect((note.midi-minNote) * dif, note.time * timeScale, dif, note.duration * timeScale);
  }
}
