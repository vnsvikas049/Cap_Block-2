
function taskOne() {
  console.log("Task 1 completed");
}


function taskTwo(callback) {
  console.log("Task 2 completed");
  callback(); 
}

// Call taskTwo and pass taskOne as the callback
taskTwo(taskOne);

// output
// Task 2 completed
// Task 1 completed

