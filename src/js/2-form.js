const emailInput = document.querySelector('#email-input');

emailInput.addEventListener('focus', () => {
  emailInput.setAttribute('placeholder', 'Type area');
});

emailInput.addEventListener('blur', () => {
  emailInput.setAttribute('placeholder', '');
});

