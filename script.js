function createPromise() {
  const time = Math.floor(Math.random() * 3) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();


const output = document.getElementById('output');
output.innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>';


Promise.all([promise1, promise2, promise3]).then((results) => {
  output.innerHTML = '';
  results.forEach((result, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>Promise ${index + 1}</td><td>${result}</td>`;
    output.appendChild(row);
  });
});



const totalTime = results.reduce((total, current) => total + current, 0);
const totalRow = document.createElement('tr');
totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
output.appendChild(totalRow);

// // Helper function to generate a promise that resolves after a random time between 1 and 3 seconds
// function createRandomPromise(name) {
//   const time = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name, time });
//     }, time * 1000);
//   });
// }

// // Create three promises
// const promise1 = createRandomPromise('Promise 1');
// const promise2 = createRandomPromise('Promise 2');
// const promise3 = createRandomPromise('Promise 3');

// // Insert the loading row into the table
// const output = document.getElementById('output');
// output.innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>';

// // Use Promise.all to wait for all promises to resolve
// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     // Clear the loading row
//     output.innerHTML = '';

//     // Calculate total time
//     const totalTime = results.reduce((sum, result) => sum + result.time, 0);

//     // Add rows for each promise
//     results.forEach((result) => {
//       const row = document.createElement('tr');
//       row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
//       output.appendChild(row);
//     });

//     // Add row for total time
//     const totalRow = document.createElement('tr');
//     totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
//     output.appendChild(totalRow);
//   });






// const outputTable = document.getElementById('output');

// // Add a row that spans 2 columns with the exact text Loading...
// const loadingRow = document.createElement('tr');
// loadingRow.id = 'loading'; // Add an id to the tr element
// loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
// outputTable.appendChild(loadingRow);

// // Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function createPromise(index) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(1, 3);
//     setTimeout(() => {
//       resolve({ index, time });
//     }, time * 1000);
//   });
// }

// let p1 = createPromise(1);
// let p2 = createPromise(2);
// let p3 = createPromise(3);

// // Use Promise.all to wait for all the Promises to resolve
// Promise.all([p1, p2, p3]).then((results) => {
//   // Remove the loading text
//   outputTable.removeChild(loadingRow);

//   // Populate the table with the required values
//   results.forEach((result, index) => {
//     const row = document.createElement('tr');
//     const nameCell = document.createElement('td');
//     const timeCell = document.createElement('td');

//     nameCell.textContent = `Promise ${index + 1}`;
//     timeCell.textContent = result.time.toFixed(3);

//     row.appendChild(nameCell);
//     row.appendChild(timeCell);
//     outputTable.appendChild(row);
//   });

//   const totalTime = results.reduce((sum, result) => sum + result.time, 0);
//   const totalTimeRow = document.createElement('tr');
//   const totalNameCell = document.createElement('td');
//   const totalTimeCell = document.createElement('td');

//   totalNameCell.textContent = 'Total';
//   totalTimeCell.textContent = totalTime.toFixed(3);

//   totalTimeRow.appendChild(totalNameCell);
//   totalTimeRow.appendChild(totalTimeCell);
//   outputTable.appendChild(totalTimeRow);
// });








