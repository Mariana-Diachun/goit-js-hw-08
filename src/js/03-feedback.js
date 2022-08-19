const refs = {
    textInput: document.querySelector('input'),
    textareaInput: document.querySelector('textarea'),
    formSubmit: document.querySelector('.feedback-form'),
}

// refs.textInput.addEventListener('input', onTextInput);
refs.textareaInput.addEventListener('input', onTextAreaInput);
refs.formSubmit.addEventListener('submit', onFormSubmit);


// function onTextInput (evt) {
//     const emailValue = evt.currentTarget.value;
//     // console.log(emailValue);
//     localStorage.setItem('feedback-form-state', emailValue)
// }

function onTextAreaInput (evt) {
    const message = evt.currentTarget.value;
    console.log(message);
    localStorage.setItem('feedback-form-state', message)

}

function onFormSubmit (evt) {
    evt.prevantdefoult();
    console.log('send form');
}