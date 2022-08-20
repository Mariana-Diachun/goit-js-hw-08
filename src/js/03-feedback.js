import throttle from 'lodash.throttle';
import { getValue } from './getValueFromLS';

const STORAGE_KEY = 'feedback-form-state';

const feedbackformData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormInput(evt) {
    feedbackformData[evt.target.name] = evt.target.value;
    const storageData = JSON.stringify(feedbackformData);
    localStorage.setItem(STORAGE_KEY, storageData)
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea () {
    const savedStoragedata = getValue(STORAGE_KEY, "");
    console.log(savedStoragedata );
        if (savedStoragedata) {
    refs.input.value = savedStoragedata.email;
    refs.textarea.value = savedStoragedata.message;
        }
}
