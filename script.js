const countBMI = (event) => {
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  if (!height || !weight) {
    alert('Height or weight can\'t be empty');
  }

  const result = weight / Math.pow(height / 100, 2);

  let complement = '';

  if (result >= 30) {
    complement = 'Obesity';
  } else if (result >= 25) {
    complement = 'Overweight';
  } else if (result >= 18.5) {
    complement = 'Normal weight';
  } else {
    complement = 'Underweight';
  }

  const resultHtml = document.getElementById('result');
  resultHtml.innerHTML = `Your BMI is <b>${result.toFixed(1)}</b> which means You are <b>${complement}</b>`;
}

const submit = document.getElementById('submit');
submit.addEventListener('click', countBMI);