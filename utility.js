function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';

    if (isNaN(inputFieldValue)) {
        alert('plasce valid a number');
        return;
    }

    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const TextField = document.getElementById(elementId);
    const TextFieldString =  TextField.innerText;
    const TextFieldValue = parseFloat(TextFieldString);
    return TextFieldValue;
}

function setTextElementValueById(elementId, newValue){
    const TextField = document.getElementById(elementId);
    TextField.innerText = newValue;

}