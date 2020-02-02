import data from './data.json';
import { Midi } from '@tonejs/midi';
import colors from './colors';

// const colors = [
//   '#1BE7FF',
//   '#6EEB83',
//   '#E4FF1A',
//   '#E8AA14',
//   '#FF5714'
// ]

// const Data = Midi.fromUrl('./test1.mid');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerHeight;
canvas.height = innerHeight;
const file = 

ctx.fillStyle = 'hsl(0, 0%, 4%)';
// document.body.style.background = 'rgb(' + colors[bpm][0] +
//   ',' + colors[bpm][1] +
//   ',' + colors[bpm][2] +
//   ')';

ctx.fillRect(0, 0, canvas.width, canvas.height);

generateArt(data);

function generateArt(data) {

  let bpm = parseInt(data.header.bpm);
  let dataLength = data.tracks.length;
  let timeScale = canvas.height / data.duration;
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
      ctx.fillStyle = 'rgb(' + colors[c % index][0] +
        ',' + colors[c % index][1] +
        ',' + colors[c % index][2] +
        ')';

      let note = d[j];
      ctx.fillRect((note.midi - minNote) * dif, note.time * timeScale, dif, note.duration * timeScale);
    }
  }

}
