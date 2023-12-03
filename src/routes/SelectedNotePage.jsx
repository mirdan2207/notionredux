import React, { Suspense } from 'react'
import { Await, Link, useLoaderData, useNavigate, Navigate } from 'react-router-dom'
import { deleteNote, getNoteById } from '../api/notes'
import NoteBtns from '../components/NoteBtns'

const SelectedNotePage = () => {
    const { id, notePromise } = useLoaderData()
    const navigate = useNavigate()
    const handleDelete = () => {
        deleteNote(id).then(() => navigate("/notes"))
    }
    const handleEdit = () => {
        navigate(`/notes/${id}/edit`)
    }
    return (
        <div className="px-2 flex flex-col gap-2">
            <div className="flex mr-auto bg-slate-400 px-2 py-1" >

                <Link to='/notes'>Back</Link>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={notePromise} errorElement={<Navigate to={"/404"} />} >
                    {note => <div className='flex'>
                        <div className="">

                            <h3 className='font-bold text-2xl'>{note.title} </h3>
                            <p>
                                {note.body}
                            </p>
                        </div>
                        <NoteBtns onEdit={handleEdit} onDelete={handleDelete} />
                    </div>}
                </Await>
            </Suspense>
        </div >
    )
}

export default SelectedNotePage

export const noteLoader = ({ params: { id } }) => ({
    id,
    notePromise: getNoteById(id)
})