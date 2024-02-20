let time = 50;

let countdown = setInterval(update, 1000);

function update() {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  console.log(`${min}:${sec}`);
  time--;

  if (time == 0 && sec == 0) clearInterval(countdown);
}
