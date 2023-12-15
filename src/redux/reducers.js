import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_NOTES,
  REGISTER_USER,
  SET_REGISTER_ERROR,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
} from "./action";

const initialState = {
  user: null,
  notes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    case SET_NOTES:
      return { ...state, notes: action.payload };
    case REGISTER_USER:
      return { ...state, user: action.payload, registerError: null };
    case SET_REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
