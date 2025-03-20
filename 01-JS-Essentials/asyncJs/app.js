// Example of basic async/await in JavaScript

// Simulate an asynchronous operation using a promise
function fetchData() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("Data fetched successfully!");
          }, 2000); // Simulates a 2-second delay
     });
}

// Async function to use await
async function getData() {
     console.log("Fetching data...");
     try {
          const data = await fetchData(); // Wait for the promise to resolve
          console.log(data);
     } catch (error) {
          console.error("Error fetching data:", error);
     }
}

// Call the async function
getData();