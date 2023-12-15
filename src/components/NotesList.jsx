import React from "react";
import { connect } from "react-redux";
import Note from "./Note";
import NoteBtns from "./NoteBtns";
import { deleteNoteAction, editNoteAction } from "../redux/action";

const NotesList = ({ notes, deleteNote, editNote }) => {
  // const handleNoteDelete = (id) => () => {
  //   onDelete(id);
  // };
  // const handleNoteEdit = (id) => () => {
  //   onEdit(id);
  // };
  return (
    <ul className="flex flex-col gap-3">
      {notes.map(({ id, title, createdAt }) => (
        <div className="flex gap-2" key={id}>
          <Note title={title} createdAt={createdAt} id={id} />
          <NoteBtns
            onDelete={() => deleteNote(id)}
            onEdit={() => editNote({ id, title, body, createdAt })}
          />
        </div>
      ))}
    </ul>
  );
};

const mapDispatchToPropsNotesList = (dispatch) => ({
  deleteNote: (noteId) => dispatch(deleteNoteAction(noteId)),
  editNote: (note) => dispatch(editNoteAction(note)),
});

export default connect(null, mapDispatchToPropsNotesList)(NotesList);
