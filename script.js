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

const promises = [createPromise(1), createPromise(2), createPromise(3)];

const output = document.getElementById('output');
const loadingRow = document.getElementById('loading');

Promise.all(promises).then((results) => {
  if (loadingRow) {
    loadingRow.remove();
  }

  results.forEach(result => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const timeCell = document.createElement('td');

    nameCell.textContent = `Promise ${result.index}`;
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    output.appendChild(row);
  });

  const totalTime = results.reduce((sum, result) => sum + result.time, 0);
  const totalRow = document.createElement('tr');
  const totalNameCell = document.createElement('td');
  const totalTimeCell = document.createElement('td');

  totalNameCell.textContent = 'Total';
  totalTimeCell.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
});
