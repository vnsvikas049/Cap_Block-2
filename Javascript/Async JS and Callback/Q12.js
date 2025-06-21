console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("Message 3");

// output
//  Message 1
// Message 3
// ... (2 seconds later)
// Message 2 after 2 seconds
