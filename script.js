const inputArray = [1, 2, 3, 4];
const outputDiv = document.getElementById("output");

// Start immediately
Promise.resolve(inputArray)
  .then((arr) => {
    // After 1 second: filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        outputDiv.textContent = evenNumbers.join(",");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenArr) => {
    // After 2 more seconds: multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const multiplied = evenArr.map(num => num * 2);
        outputDiv.textContent = multiplied.join(",");
        resolve(multiplied);
      }, 2000);
    });
  });
