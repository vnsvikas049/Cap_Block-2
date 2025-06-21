// Start loading message every 1 second
let intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);


setTimeout(() => {
  clearInterval(intervalId); 
  console.log("Loaded successfully!");
}, 5000);

// output
// Loading...
// Loading...
// Loading...
// Loading...
// Loading...
// Loaded successfully!
