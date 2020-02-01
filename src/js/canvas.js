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

draw_line(Data, 10);

function draw_line(d, thickness) {
  let bars = 64;
  let avg = [];
  for (let i = 0; i < bars; i++) {
    let l = Math.floor(d.length/bars);
    let data = d.slice(i * l, (i + 1) * l)
    avg.push(Math.log(get_average(data)))
  }
  let m = 0;
  for (let i = 0; i < avg.length; i++) {
    if (Math.abs(avg[i]) > m) {
      m = Math.abs(avg[i]);
    }
  }
  for (let i = 0; i < bars; i++) {
    let l = Math.floor(Data.length/bars);
    let data = d.slice(i * l, (i + 1) * l)
    let a = avg[i];
    draw_bar(i * canvas.width/bars, canvas.width/bars, m, Math.abs(avg[i]), colors[i], thickness);
  }
}


function draw_bar(x, w, max, avg, color, th) {
  ctx.fillStyle = "rgba(255, 255, 255,"+ (1 - ((avg + max)/(2 * max))) +")";
  ctx.fillRect(x, 0, w, th);
}

function get_average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}
