import axios from 'axios';

export function handleSubmitLogin(e, email, password) {
  e.preventDefault();
  const data = {
    email,
    password,
  };
  return fetch('http://phonebook.hillel.it/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });
}

export function handleSubmitReg(e, email, password, name, surname) {
  e.preventDefault();
  const data = {
    email,
    password,
    name,
    surname,
  };
  return axios.post('http://phonebook.hillel.it/api/users/register', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getAllContactData() {
  return fetch('http://phonebook.hillel.it/api/phonebook?', {
    credentials: 'include',
  });
}

export function handleDeleteCard(id) {
  return fetch(`http://phonebook.hillel.it/api/phonebook/${id}`, {
    credentials: 'include',
    method: 'DELETE',
  });
}

export function getAllCategories() {
  return fetch('http://phonebook.hillel.it/api/categories?', {
    credentials: 'include',
  });
}

export function getDataCurrentContact(id) {
  return fetch(`http://phonebook.hillel.it/api/phonebook/${id}`, {
    credentials: 'include',
  });
}
