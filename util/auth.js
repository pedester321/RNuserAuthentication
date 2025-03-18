import axios from "axios";

import { API_KEY } from "@env";

async function authenticate(email, password, mode) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate(email, password, "signUp");
}

export function login(email, password) {
  return authenticate(email, password, "signInWithPassword");
}
