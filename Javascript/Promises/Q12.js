
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Random number > 0.5 means success
      if (success) {
        resolve("Fetched data successfully!");
      } else {
        reject("Server error or network issue");
      }
    }, 1000); 
  });
}


async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result); // Logs: "Fetched data successfully!"
  } catch (error) {
    console.log("Error fetching data:", error); // Logs error message
  }
}


fetchDataHandler();

// output
// Fetched data successfully!
// Error fetching data: Server error or network issue

