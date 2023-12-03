import React from "react";
import DeleteIcon from "../icons/delete.png";
import EditIcon from "../icons/edit.png";

const NoteBtns = ({ onEdit, onDelete }) => {
  return (
    <div className="flex gap-1 ml-auto items-center">
      <div className="w-6 h-6 cursor-pointer" onClick={onDelete}>
        <img src={DeleteIcon} alt="deleteIcon" className="w-6 h-6" />
      </div>
      <div className="w-6 h-6 cursor-pointer" onClick={onEdit}>
        <img src={EditIcon} alt="editIcon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default NoteBtns;
