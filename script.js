window.onload = () => {
    var btn = document.getElementById("btn");

    btn.addEventListener("click", calculateBMI);
}

function calculateBMI() {
    var weight = +document.getElementById("weight").value;
    var height = +document.getElementById("height").value;

    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        alert('Please fill all field with valid numbers');
        return;
    }

    var bmi = (weight / Math.pow( (height/100),2 )).toFixed(1);

    showResult(bmi);

    function showResult(bmi) {
        var result = document.getElementById("result");
        var bmiStatus;
        if (bmi < 18.5) {
            bmiStatus = 'Underweight';
        } else if (bmi < 25){
            bmiStatus = 'Normal weight';
        } else if (bmi < 30){
            bmiStatus = 'Overweight';
        } else {
            bmiStatus = 'Obesity';
        }
        result.innerHTML = `Your BMI is <b>${bmi}</b> which means You are <b>${bmiStatus}</b>`;
    }
}