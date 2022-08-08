var throttle = require('lodash.throttle');


const form = document.querySelector('.feedback-form');
const email = form.email;
const message = form.message;
populateTextArea();


form.addEventListener('input', throttle(saveFormData, 500))
form.addEventListener('submit', showInputValue)
form.addEventListener('submit', getSubmitForm)



// збереження даних
function saveFormData() {
    const data = form.elements
    const dates = {
        email: data.email.value,
        text: data.message.value
    }     
    
    localStorage.setItem('feedback-form-state', JSON.stringify({ dates })
)
  
    
}

const getThrottleSaveFromData = throttle(saveFormData, 500);

// заповнення полів
function populateTextArea() {
    const savedData = localStorage.getItem('feedback-form-state');
    const parsedData = JSON.parse(savedData);

    if (savedData) {
        email.value = parsedData.dates.email;
        message.value = parsedData.dates.text;

    }
};

function showInputValue(evt) {
     const data = evt.currentTarget.elements
    const dates = {
        email: data.email.value,
        text: data.message.value
    } 
}


function getSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
};







   




