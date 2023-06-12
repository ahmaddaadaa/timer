const args = process.argv.slice(2);

for (const arg of args) {
  const time = Number(arg);
    setTimeout(() => {
      process.stdout.write(`\x07${ time }`); // Beep sound
    }, time * 1000);
}