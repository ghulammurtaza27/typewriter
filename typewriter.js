const sentence = "hello there from lighthouse labs";
let t = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t) // <= 1s delay to make it noticeable. Can dial it down later.
  t += 100;
}
setTimeout(() => {
  console.log('');
}, t + 50);