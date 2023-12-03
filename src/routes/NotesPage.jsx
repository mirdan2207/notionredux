import React, { Suspense } from 'react'
import { useUserContext } from '../components/UserProvider'
import { deleteNote, getUserNotes } from '../api/notes';
import { Await, Link, useNavigate } from 'react-router-dom';
import NotesList from "../components/NotesList"
const NotesPage = () => {
    const navigate = useNavigate()
    const { user } = useUserContext();
    const promise = getUserNotes(user.id)

    const handleEdit = (id) => {
        navigate(`/notes/${id}/edit`)

    }
    const handleDelete = (id) => {
        deleteNote(id).then(() => navigate("."))
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="max-w-xs bg-slate-400 px-2 py-1 text-center text-white ml-2">
                <Link to="/notes/add">Create note</Link>
            </div>
            <Suspense fallback={<h2>Loading notes...</h2>}>
                <Await resolve={promise}>
                    {notes => <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />}
                </Await>
            </Suspense>
        </div>
    )
}

export default NotesPage
