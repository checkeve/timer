const timers = process.argv.slice(2);

for (let timer of timers) {
  timer = Number(timer);
  if (timer > 0 && !isNaN(timer)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * timer);
  }
}


