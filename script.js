

const outputTable = document.getElementById('output');

// Add a row that spans 2 columns with the exact text Loading...
const loadingRow = document.createElement('tr');
loadingRow.id = 'loading'; // Add an id to the tr element
loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
outputTable.appendChild(loadingRow);

// Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createPromise(index) {
  return new Promise((resolve) => {
    const time = getRandomTime(1, 3);
    setTimeout(() => {
      resolve({ index, time });
    }, time * 1000);
  });
}

let p1 = createPromise(1);
let p2 = createPromise(2);
let p3 = createPromise(3);

// Use Promise.all to wait for all the Promises to resolve
Promise.all([p1, p2, p3]).then((results) => {
  // Remove the loading text
  outputTable.removeChild(loadingRow);

  // Populate the table with the required values
  results.forEach((result, index) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const timeCell = document.createElement('td');

    nameCell.textContent = `Promise ${index + 1}`;
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    outputTable.appendChild(row);
  });

  const totalTime = results.reduce((sum, result) => sum + result.time, 0);
  const totalTimeRow = document.createElement('tr');
  const totalNameCell = document.createElement('td');
  const totalTimeCell = document.createElement('td');

  totalNameCell.textContent = 'Total';
  totalTimeCell.textContent = totalTime.toFixed(3);

  totalTimeRow.appendChild(totalNameCell);
  totalTimeRow.appendChild(totalTimeCell);
  outputTable.appendChild(totalTimeRow);
});








