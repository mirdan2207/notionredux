import { BASE_URL } from "./constants";

export const getUserNotes = (userId) =>
  fetch(`${BASE_URL}/notes?userId=${userId}&_sort=createdAt&_order=DESC`).then(
    (r) => r.json()
  );

export const deleteNote = (id) =>
  fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  }).then((r) => r.json());
  
export const getNoteById = (id) =>
  fetch(`${BASE_URL}/notes/${id}`).then((r) => {
    if (r.status !== 200) throw new Error("Not found");
    return r.json();
  });

export const createNote = (userId, title, body) => {
  const createdAt = new Date().toISOString();
  return fetch(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, title, body, createdAt }),
  }).then((r) => r.json());
};

export const editNote = (id, title, body) => {
  return fetch(`${BASE_URL}/notes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  }).then((r) => r.json());
};
