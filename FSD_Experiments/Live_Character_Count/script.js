function attachCounter(textAreaId, counterId) {
  const textArea = document.getElementById(textAreaId);
  const counter = document.getElementById(counterId);

  function updateCounter() {
      counter.textContent = `Characters: ${textArea.value.length}`;
  }

  textArea.addEventListener('input', updateCounter);
  updateCounter(); // initialize count
}

attachCounter('textArea1', 'charCounter1');
attachCounter('textArea2', 'charCounter2');