const sentence = "Hello there from lighthouse labs";

const typewriter = function(input) {
  let time = 0;
  for (const char of input) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 50);
  }
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, time);
};

typewriter(sentence);