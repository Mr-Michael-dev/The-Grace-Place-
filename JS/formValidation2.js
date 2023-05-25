const form = document.getElementById('form'); 

const name = document.getElementById('name'); 

const email = document.getElementById('email'); 

const question = document.getElementById('question'); 


form.addEventListener('submit', e => { e.preventDefault(); 

validateInputs(); 

alert("Submitted successfully! We will get back to you");

this.reset();
}); 

const setError = (element, message) => { const inputControl = element.parentElement; 

const errorDisplay = inputControl.querySelector('.error'); 

errorDisplay.innerText = message; 

inputControl.classList.add('error'); 

inputControl.classList.remove('success') } 

const setSuccess = element => { const inputControl = element.parentElement; 

const errorDisplay = inputControl.querySelector('.error'); 

errorDisplay.innerText = ''; 

inputControl.classList.add('success'); 

inputControl.classList.remove('error'); }; 

const isValidEmail = email => { const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; return re.test(String(email).toLowerCase()); } 

const validateInputs = () => { 

const nameValue = name.value.trim(); 
const emailValue = email.value.trim(); 
const questionValue = question.value.trim(); 
 

if(nameValue === '') { 
setError(name, 'Name is required'); } 
else { setSuccess(name); } 

if(emailValue === '') { 
setError(email, 'Email is required'); } 
else if (!isValidEmail(emailValue)) { setError(email, 'Provide a valid email address'); } 
else { setSuccess(email); } 

if(questionValue === '') { 
setError(question, 'Please enter your question'); } 
else { setSuccess(question); } }; 


form.onsubmit = () => {
alert{"Submitted successfully. We will reach out to you."};

// JavaScript code to toggle the visibility of the navigation links
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

