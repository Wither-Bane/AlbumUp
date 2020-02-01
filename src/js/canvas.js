import Data from './dummy.json';

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

ctx.fillStyle = 0xFFFFFF;
ctx.fillRect(0, 0, canvas.width, canvas.height);
console.log(Data.length);

for (let i = 0; i < Data.length; i++) {
  draw_line(Data[i], canvas.height/Data.length, i);
}
draw_graph(Data[100])

function draw_line(d, thickness, y) {
  let bars = 512;
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
    draw_bar(i * canvas.width/bars, y, canvas.width/bars, thickness, m, Math.abs(avg[i]));
  }
}

/**
 * Draws a bar on the screen with given parameters
 * @param x furthest left x point
 * @param w width of bar chart
 * @param th height of the bar chart
 * @param max largest value of the bars
 * @param avg current value of the bar
 */
function draw_bar(x, y, w, th, max, avg) {
  ctx.fillStyle = "rgba(255, 255, 255,"+ (1 - ((avg + max)/(2 * max))) +")";
  ctx.fillRect(x, y*th, w, th);
}

// Gets average of an array
function get_average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}

function draw_graph(data) {
  let max = 0;
  for (let i = 0; i < data.length; i++) {
    if (Math.abs(Math.log(data[i])) > max) {
      max = Math.abs(Math.log(data[i]));
    }
  }

  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 5;
  ctx.moveTo(0, canvas.height/2);
  for (let j = 0; j < data.length; j++) {
    ctx.lineTo((j + 1) * (canvas.width/data.length), canvas.height/2 - (Math.log(data[j]) * ((canvas.height/2)/max)));
  }
  ctx.stroke()
}
