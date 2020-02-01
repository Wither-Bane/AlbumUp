import Data from './data.json';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

ctx.fillStyle = 0xFFFFFF;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let max = 0;
for (let i = 0; i < Data.length; i++) {
  if (Math.abs(Math.log(Data[i])) > max) {
    max = Math.abs(Math.log(Data[i]));
  }
}

ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 5;
ctx.moveTo(0, canvas.height/2);
for (let j = 0; j < Data.length; j++) {
  ctx.lineTo((j + 1) * (canvas.width/Data.length), canvas.height/2 - (Math.log(Data[j]) * ((canvas.height/2)/max)));
}
ctx.stroke()
