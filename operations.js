function showSum() {
  const val1 = parseFloat(document.getElementById('num1').value);
  const val2 = parseFloat(document.getElementById('num2').value);

  const resultEl = document.getElementById('result');

  if (isNaN(val1) || isNaN(val2)) {
    resultEl.textContent = 'Please enter valid numbers in both fields.';
  } else {
    resultEl.textContent = `The sum is: ${val1 + val2}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calculate').addEventListener('click', showSum);
});