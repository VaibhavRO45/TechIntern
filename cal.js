
let screen = document.getElementById('screen');
//buttons = document.querySelectorAll('button');
buttons = document.getElementsByClassName('box');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'DE') {
            screenValue = screenValue.
            slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}




function calculateAge(){
    var dob = document.getElementById('dob').value;
    var today = new Date();
    var birthDate = new Date(dob);
    var ageInYears = today.getFullYear() - birthDate.getFullYear();
    var ageInMonths = (ageInYears * 12) + (today.getMonth() - birthDate.getMonth());
    var ageInHours = ageInYears * 365 * 24 ;
    var ageInMinutes = ageInYears * 365 * 24 * 60;  
    var ageInSeconds = ageInYears * 365 * 24 * 60 * 60;

    document.getElementById('years').textContent = ageInYears;
    document.getElementById('month').textContent = ageInMonths;
    document.getElementById('hour').textContent = ageInHours;
    document.getElementById('min').textContent = ageInMinutes;
    document.getElementById('sec').textContent = ageInSeconds;
}