const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('#email-input');
const textarea = form.querySelector('textarea');
const formData = {
  email: '',
  message: '',
};
emailInput.addEventListener('focus', () => {
  emailInput.setAttribute('placeholder', 'Type area');
});
emailInput.addEventListener('blur', () => {
  emailInput.setAttribute('placeholder', '');
});

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', () => {
  formData.email = emailInput.value;
  formData.message = textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function populateText() {
  const user = localStorage.getItem(STORAGE_KEY);
  if (user) {
    const userParse = JSON.parse(user);
    emailInput.value = userParse.email;
    textarea.value = userParse.message;
  }
}
populateText();

function handleSubmit(event) {
  event.preventDefault();
  if (!emailInput.value || !textarea.value) {
    alert('Fill please all fields');
    return;
  }
  formData.email = emailInput.value;
  formData.message = textarea.value;
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}
