const outputTable = document.getElementById('output');

// Add a row that spans 2 columns with the exact text Loading...
const loadingRow = document.createElement('tr');
loadingRow.id = 'loading'; // Add an id to the tr element
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
outputTable.appendChild(loadingRow);

// Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

function createPromise(index) {
  return new Promise((resolve) => {
    const time = getRandomTime(1, 3);
    setTimeout(() => {
      resolve({ index, time });
    }, time * 1000);
  });
}

const p1 = createPromise(1);
const p2 = createPromise(2);
const p3 = createPromise(3);

// Use Promise.all to wait for all the Promises to resolve
Promise.all([p1, p2, p3]).then((results) => {
  // Remove the loading text
  outputTable.removeChild(loadingRow);

  // Populate the table with the required values
  const row1 = document.createElement('tr');
  const nameCell1 = document.createElement('td');
  const timeCell1 = document.createElement('td');

  nameCell1.textContent = `Promise 1`;
  timeCell1.textContent = results[0].time.toFixed(3);

  row1.appendChild(nameCell1);
  row1.appendChild(timeCell1);

  const row2 = document.createElement('tr');
  const nameCell2 = document.createElement('td');
  const timeCell2 = document.createElement('td');

  nameCell2.textContent = `Promise 2`;
  timeCell2.textContent = results[1].time.toFixed(3);

  row2.appendChild(nameCell2);
  row2.appendChild(timeCell2);

  const row3 = document.createElement('tr');
  const nameCell3 = document.createElement('td');
  const timeCell3 = document.createElement('td');

  nameCell3.textContent = `Promise 3`;
  timeCell3.textContent = results[2].time.toFixed(3);

  row3.appendChild(nameCell3);
  row3.appendChild(timeCell3);

  const totalTime = results.reduce((sum, result) => sum + result.time, 0);
  const totalTimeRow = document.createElement('tr');
  const totalNameCell = document.createElement('td');
  const totalTimeCell = document.createElement('td');

  totalNameCell.textContent = 'Total';
  totalTimeCell.textContent = totalTime.toFixed(3);

  totalTimeRow.appendChild(totalNameCell);
  totalTimeRow.appendChild(totalTimeCell);

  outputTable.appendChild(row1);
  outputTable.appendChild(row2);
  outputTable.appendChild(row3);
  outputTable.appendChild(totalTimeRow);
});

// const outputTable = document.getElementById('output');

// // Add a row that spans 2 columns with the exact text Loading...
// const loadingRow = document.createElement('tr');
// loadingRow.id = 'loading'; // Add an id to the tr element
// loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
// outputTable.appendChild(loadingRow);

// // Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
// function getRandomTime(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function createPromise(index) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(1, 3);
//     setTimeout(() => {
//       resolve({ index, time });
//     }, time * 1000);
//   });
// }

// const p1 = createPromise(1);
// const p2 = createPromise(2);
// const p3 = createPromise(3);

// // Use Promise.all to wait for all the Promises to resolve
// Promise.all([p1, p2, p3]).then((results) => {
//   // Remove the loading text
//   outputTable.removeChild(loadingRow);

//   // Populate the table with the required values
//   const row1 = document.createElement('tr');
//   const nameCell1 = document.createElement('td');
//   const timeCell1 = document.createElement('td');

//   nameCell1.textContent = `Promise ${results[0].index}`;
//   timeCell1.textContent = results[0].time.toFixed(3);

//   row1.appendChild(nameCell1);
//   row1.appendChild(timeCell1);

//   const row2 = document.createElement('tr');
//   const nameCell2 = document.createElement('td');
//   const timeCell2 = document.createElement('td');

//   nameCell2.textContent = `Promise ${results[1].index}`;
//   timeCell2.textContent = results[1].time.toFixed(3);

//   row2.appendChild(nameCell2);
//   row2.appendChild(timeCell2);

//   const row3 = document.createElement('tr');
//   const nameCell3 = document.createElement('td');
//   const timeCell3 = document.createElement('td');

//   nameCell3.textContent = `Promise ${results[2].index}`;
//   timeCell3.textContent = results[2].time.toFixed(3);

//   row3.appendChild(nameCell3);
//   row3.appendChild(timeCell3);

//   const totalTime = results.reduce((sum, result) => sum + result.time, 0);
//   const totalTimeRow = document.createElement('tr');
//   const totalNameCell = document.createElement('td');
//   const totalTimeCell = document.createElement('td');

//   totalNameCell.textContent = 'Total';
//   totalTimeCell.textContent = totalTime.toFixed(3);

//   totalTimeRow.appendChild(totalNameCell);
//   totalTimeRow.appendChild(totalTimeCell);

//   outputTable.appendChild(row1);
//   outputTable.appendChild(row2);
//   outputTable.appendChild(row3);
//   outputTable.appendChild(totalTimeRow);
// });


// // const outputTable = document.getElementById('output');

// // // Add a row that spans 2 columns with the exact text Loading...
// // const loadingRow = document.createElement('tr');
// // loadingRow.id = 'loading'; // Add an id to the tr element
// // loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
// // outputTable.appendChild(loadingRow);

// // // Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
// // function getRandomTime(min, max) {
// //   return Math.random() * (max - min) + min;
// // }

// // function createPromise(index) {
// //   return new Promise((resolve) => {
// //     const time = getRandomTime(1, 3);
// //     setTimeout(() => {
// //       resolve({ index, time });
// //     }, time * 1000);
// //   });
// // }

// // const promises = [createPromise(1), createPromise(2), createPromise(3)];

// // // Use Promise.all to wait for all the Promises to resolve
// // Promise.all(promises).then((results) => {
// //   // Remove the loading text
// //   outputTable.removeChild(loadingRow);

// //   // Populate the table with the required values
// //   const rows = results.map((result) => {
// //     const row = document.createElement('tr');
// //     const nameCell = document.createElement('td');
// //     const timeCell = document.createElement('td');

// //     nameCell.textContent = `Promise ${result.index}`;
// //     timeCell.textContent = result.time.toFixed(3);

// //     row.appendChild(nameCell);
// //     row.appendChild(timeCell);
// //     return row;
// //   });

// //   const totalTime = results.reduce((sum, result) => sum + result.time, 0);
// //   const totalTimeRow = document.createElement('tr');
// //   const totalNameCell = document.createElement('td');
// //   const totalTimeCell = document.createElement('td');

// //   totalNameCell.textContent = 'Total';
// //   totalTimeCell.textContent = totalTime.toFixed(3);

// //   totalTimeRow.appendChild(totalNameCell);
// //   totalTimeRow.appendChild(totalTimeCell);

// //   rows.push(totalTimeRow);

// //   rows.forEach((row) => outputTable.appendChild(row));
// // });


// // // const outputTable = document.getElementById('output');

// // // // Add a row that spans 2 columns with the exact text Loading...
// // // const loadingRow = document.createElement('tr');
// // // loadingRow.id = 'loading'; // Add an id to the tr element
// // // loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
// // // outputTable.appendChild(loadingRow);

// // // // Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
// // // function getRandomTime(min, max) {
// // //   return Math.random() * (max - min) + min;
// // // }

// // // function createPromise(index) {
// // //   return new Promise((resolve) => {
// // //     const time = getRandomTime(1, 3);
// // //     setTimeout(() => {
// // //       resolve({ index, time });
// // //     }, time * 1000);
// // //   });
// // // }

// // // const promises = [createPromise(1), createPromise(2), createPromise(3)];

// // // // Use Promise.all to wait for all the Promises to resolve
// // // Promise.all(promises).then((results) => {
// // //   // Remove the loading text
// // //   outputTable.removeChild(loadingRow);

// // //   // Populate the table with the required values
// // //   const rows = results.map((result) => {
// // //     const row = document.createElement('tr');
// // //     const nameCell = document.createElement('td');
// // //     const timeCell = document.createElement('td');

// // //     nameCell.textContent = `Promise ${result.index}`;
// // //     timeCell.textContent = Math.round(result.time);

// // //     row.appendChild(nameCell);
// // //     row.appendChild(timeCell);
// // //     return row;
// // //   });

// // //   const totalTimeRow = document.createElement('tr');
// // //   const totalTime = results.reduce((sum, result) => sum + result.time, 0);
// // //   const totalNameCell = document.createElement('td');
// // //   const totalTimeCell = document.createElement('td');

// // //   totalNameCell.textContent = 'Total';
// // //   totalTimeCell.textContent = Math.round(totalTime);

// // //   totalTimeRow.appendChild(totalNameCell);
// // //   totalTimeRow.appendChild(totalTimeCell);

// // //   rows.push(totalTimeRow);

// // //   rows.forEach((row) => outputTable.appendChild(row));
// // // });