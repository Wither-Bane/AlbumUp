import Data from './data.json';

const colors = [
  '#BA89B6',
  '#A3AFFF',
  '#DBFFB5',
  '#FFECA0',
  '#FF907A'
];

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
max *= 1.1


ctx.lineWidth = 5;
for (let i = 0; i < colors.length; i++) {
  ctx.strokeStyle = colors[i];
  ctx.beginPath();
  ctx.moveTo((Math.floor(i * (Data.length / colors.length)) + 1) * (canvas.width / Data.length), canvas.height / 2 - (Math.log(Data[Math.floor(i * (Data.length / colors.length))]) * ((canvas.height / 2) / max)));
  for (let j = Math.floor(i * (Data.length / colors.length)); j < (i + 1) * (Data.length / 5); j++) {
    ctx.lineTo((j + 1) * (canvas.width / Data.length), canvas.height / 2 - (Math.log(Data[j]) * ((canvas.height / 2) / max)));
  }
  ctx.stroke();
}
