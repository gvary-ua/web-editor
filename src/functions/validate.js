const requestData = (type, text) => {};

function validateEmail(text) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!text || text.length === 0) return [false, 'Please enter email'];
  else if (!text.match(emailRegex)) return [false, 'Please enter correct email'];
  else if (requestData('email', text)) return [false, 'This email is already taken'];

  return [true, ''];
}

function validateUsername(text) {
  const usernameRegex = ''; // We can change it in the future

  if (!text || text.length === 0) return [false, 'Please enter username'];
  else if (!text.match(usernameRegex)) return [false, 'Please enter correct username'];
  else if (requestData('user', text)) return [false, 'This username is already taken'];

  return [true, ''];
}

function validatePassword(text) {
  const passwordRegex = ''; // We can change it in the future

  if (!text || text.length === 0) return [false, 'Please enter password'];
  else if (!text.match(passwordRegex)) return [false, 'Please enter correct password'];

  return [true, ''];
}

export { validateEmail, validateUsername, validatePassword };
