import { BASE_URL } from "./constants";

export const loginUser = (email, password) =>
  fetch(`${BASE_URL}/users?email=${email}&password=${password}`)
    .then((r) => r.json())
    .then((v) => {
      if (v.length === 1) return v[0];
      throw new Error("");
    });

export const registerUser = (email, password) => {
  const createdAt = new Date().toISOString();
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, createdAt }),
  }).then((r) => r.json());
};
