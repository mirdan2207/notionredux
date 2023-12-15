import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { useUserContext } from "../components/UserProvider";
import { deleteNote, getUserNotes } from "../api/notes";
import { Await, Link, useNavigate } from "react-router-dom";
import NotesList from "../components/NotesList";
import { logoutUser, setNotes } from "../redux/action";

const NotesPage = ({ user, notes, setNotes, logout }) => {
  const navigate = useNavigate();
  // const { user } = useUserContext();
//   const promise = getUserNotes(user.id);

useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getUserNotes(user.id);
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [user.id, setNotes]);

  const handleEdit = (id) => {
    navigate(`/notes/${id}/edit`);
  };
  const handleDelete = (id) => {
    deleteNote(id).then(() => navigate("."));
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-xs bg-slate-400 px-2 py-1 text-center text-white ml-2">
        <Link to="/notes/add">Create note</Link>
      </div>
      <Suspense fallback={<h2>Loading notes...</h2>}>
        <Await resolve={promise}>
          {(notes) => (
            <NotesList
              notes={notes}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </Await>
        <button onClick={logout}>Logout</button>
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state) => ({
    user: state.user,
    notes: state.notes,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    setNotes: (notes) => dispatch(setNotes(notes)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
