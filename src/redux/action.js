export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_NOTES = "SET_NOTES";
export const REGISTER_USER = "REGISTER_USER";
export const SET_REGISTER_ERROR = "SET_REGISTER_ERROR";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

export const logInUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

export const registerUserAction = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const setRegisterError = (error) => ({
  type: SET_REGISTER_ERROR,
  payload: error,
});

export const createNoteAction = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNoteAction = (noteId) => ({
  type: DELETE_NOTE,
  payload: noteId,
});

export const editNoteAction = (note) => ({
  type: EDIT_NOTE,
  payload: note,
});
