import React from 'react'

function Note(props) {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <div className='ml-10'>
            <div className='shadow-lg text-center w-[300px] mt-3'>
                <h1 className=' text-xl'>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button onClick={deleteNote} className='p-2 border'>delete</button>
            </div>
        </div>
    )
}

export default Note