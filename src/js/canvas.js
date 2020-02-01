import Data from './data.json';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

let dataLength = Data.data.length;
for (let i = 0; i < dataLength; i++) {
  let d = Data.data[i];

  console.log(d.length);
}
ctx.fillStyle = 0xFFFFFF;
ctx.fillRect(0, 0, canvas.width, canvas.height);
