function fetchUserData(callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    const userData = "User data received";
    console.log(userData);

   
    callback();
  }, 1000); // 1 second delay
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");

  setTimeout(() => {
    const userPosts = "User posts received";
    console.log(userPosts);

    // Final message
    callback();
  }, 1500); // 1.5 second delay
}


fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});

// output
// Fetching user data...
// // (after 1 second)
// User data received
// Fetching user posts...
// // (after 1.5 seconds)
// User posts received
// All data loaded successfully!

