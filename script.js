const outputTable = document.getElementById('output');

// Add a row that spans 2 columns with the exact text Loading...
const loadingRow = document.createElement('tr');
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
outputTable.appendChild(loadingRow);

// Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
const promises = [];
for (let i = 1; i <= 3; i++) {
  promises.push(new Promise((resolve) => {
    const timeout = Math.floor(Math.random() * 2000) + 1000; // random time between 1 and 3 seconds
    setTimeout(() => {
      resolve(`Promise ${i}`);
    }, timeout);
  }));
}

// Use Promise.all to wait for all the Promises to resolve
Promise.all(promises).then((results) => {
  // Remove the loading text
  outputTable.removeChild(loadingRow);

  // Populate the table with the required values
  const startTime = performance.now();
  results.forEach((result, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${Math.round(performance.now() - startTime) / 1000}</td>
    `;
    outputTable.appendChild(row);
  });

  // Add a row for the total time taken
  const totalTimeRow = document.createElement('tr');
  totalTimeRow.innerHTML = `
    <td>Total</td>
    <td>${Math.round(performance.now() - startTime) / 1000}</td>
  `;
  outputTable.appendChild(totalTimeRow);
});

// function getRandomTime(min, max) {
//     return Math.random() * (max - min) + min;
// }

// function createPromise(index) {
//     return new Promise((resolve) => {
//         const time = getRandomTime(1, 3);
//         setTimeout(() => {
//             resolve({ index, time });
//         }, time * 1000);
//     });
// }

// const promises = [createPromise(1), createPromise(2), createPromise(3)];

// const output = document.getElementById('output');
// const loadingRow = document.getElementById('loading');

// Promise.all(promises).then((results) => {
//     if (loadingRow) {
//         loadingRow.remove();
//     }

//     results.forEach(result => {
//         const row = document.createElement('tr');
//         const nameCell = document.createElement('td');
//         const timeCell = document.createElement('td');

//         nameCell.textContent = `Promise ${result.index}`;
//         timeCell.textContent = result.time.toFixed(3);

//         row.appendChild(nameCell);
//         row.appendChild(timeCell);
//         output.appendChild(row);
//     });

//     const totalTime = results.reduce((sum, result) => sum + result.time, 0);
//     const totalRow = document.createElement('tr');
//     const totalNameCell = document.createElement('td');
//     const totalTimeCell = document.createElement('td');

//     totalNameCell.textContent = 'Total';
//     totalTimeCell.textContent = totalTime.toFixed(3);

//     totalRow.appendChild(totalNameCell);
//     totalRow.appendChild(totalTimeCell);
//     output.appendChild(totalRow);
// });
