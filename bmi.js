document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');

    heightInput.addEventListener('input', calculateBMI);
    weightInput.addEventListener('input', calculateBMI);
    const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');
const heightLabel = document.getElementById('H');
const weightLabel = document.getElementById('W');


metricRadio.addEventListener('change', () => {
    if (metricRadio.checked) {
        heightLabel.textContent = 'cm';
        weightLabel.textContent = 'kg';
    }
});

imperialRadio.addEventListener('change', () => {
    if (imperialRadio.checked) {
        heightLabel.textContent = 'in';
        weightLabel.textContent = 'lbs';
    }
});
    
});

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        const measurementSystem = document.querySelector('input[name="measurement-system"]:checked').value;
        let bmi;

        if (measurementSystem === 'imperial') {
            bmi = (weightPounds / (heightInches * heightInches)) * 703;
        } else {
            bmi = (weight) / ((height/100) * (height/100)); 
        }
        console.log(bmi)

        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = 'Overweight';
        } else if (bmi >= 30 && bmi < 34.9) {
            bmiCategory = 'Obesity Class I';
        } else if (bmi >= 35 && bmi < 39.9) {
            bmiCategory = 'Obesity Class II';
        } else {
            bmiCategory = 'Obesity Class III';
        }
        const result = document.getElementById('result');
        result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}. (${bmiCategory})`;
        const healthProperties = document.createElement('div');
        healthProperties.classList.add('health-properties');
        switch(bmiCategory) {
            case 'Underweight':
                healthProperties.innerHTML = "You are under the ideal weight for your height. It's recommended to eat more nutrient-rich foods and possibly consult a healthcare provider for advice.";
                break;
            case 'Normal weight':
                healthProperties.innerHTML = "You have a normal body weight. Maintain a balanced diet and regular exercise to stay healthy.";
                break;
            case 'Overweight':
                healthProperties.innerHTML = "You are above the ideal weight for your height. Consider adopting a healthier diet and increasing physical activity to reach a healthier weight.";
                break;
            case 'Obesity Class I':
                healthProperties.innerHTML = "It is advisable to consult a healthcare provider for guidance on weight loss strategies. A combination of diet modification and increased physical activity is often recommended.";
                break;
            case 'Obesity Class II':
                healthProperties.innerHTML = "It's important to seek medical advice to develop a safe and effective weight loss plan. Lifestyle changes and possibly medical interventions may be necessary.";
                break;
            case 'Obesity Class III':
                healthProperties.innerHTML = "This is considered severe obesity. A healthcare provider should be consulted immediately to discuss weight loss strategies, which may include diet, exercise, medication, or surgery.";
                break;
        }

        result.appendChild(healthProperties);
    } else {
        const result = document.getElementById('result');
        result.innerHTML = '';
    }
}