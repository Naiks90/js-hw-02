const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let i = 0; i < allLogins.length; i += 1) {
    allLogins[i] = allLogins[i].toLowerCase();
  }

  if (allLogins.includes(login.toLowerCase())) {
    return false;
  }
  return true;
};
console.log(isLoginUnique(logins, 'MaNgo'));

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такой логин уже используется!';
  }
  allLogins.push(login);
  return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'MangО'));
