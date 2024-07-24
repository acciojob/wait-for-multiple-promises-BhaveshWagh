const outputTable = document.getElementById('output');

// Add a row that spans 2 columns with the exact text Loading...
const loadingRow = document.createElement('tr');
loadingRow.id = 'loading'; // Add an id to the tr element
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