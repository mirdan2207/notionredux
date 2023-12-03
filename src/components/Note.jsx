import React from 'react'
import { Link } from 'react-router-dom'

const Note = ({ id, title, createdAt }) => {
    return (
        <div className='border-gray-300 px-2 py-1'>

            <h3 className="text-xl font-bold"><Link to={`/notes/${id}`}>{title}</Link> </h3>
            <p>{new Date(createdAt).toLocaleDateString()} </p>
        </div>
    )
}

export default Note