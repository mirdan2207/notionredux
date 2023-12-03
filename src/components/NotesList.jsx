import React from "react";
import Note from "./Note";
import NoteBtns from "./NoteBtns";

const NotesList = ({ notes, onDelete, onEdit }) => {
  const handleNoteDelete = (id) => () => {
    onDelete(id);
  };
  const handleNoteEdit = (id) => () => {
    onEdit(id);
  };
  return (
    <ul className="flex flex-col gap-3">
      {notes.map(({ id, title, createdAt }) => (
        <div className="flex gap-2" key={id}>
          <Note title={title} createdAt={createdAt} id={id} />
          <NoteBtns
            onDelete={handleNoteDelete(id)}
            onEdit={handleNoteEdit(id)}
          />
        </div>
      ))}
    </ul>
  );
};

export default NotesList;
