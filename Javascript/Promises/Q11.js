function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}


timer(2000, (message) => {
  console.log(message); // Output after 2 seconds
});
