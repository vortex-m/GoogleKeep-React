import React, { useState } from 'react'
import Button from '@mui/material/Button';

function CreateNote(props) {
    const [note, setNote] = useState({
        title: '',
        textarea: '',
    })

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            textarea: '',
        })
    }

    const InputEvent = (event) => {
        console.log(event.target.value)
        // const textarea = event.target.value;
        // const title = event.target.value;
        const { name, value } = event.target
        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <form className='mt-4 shadow-lg w-[400px] flex flex-col'>
                <input type='text' className=' rounded-t-3xl p-3 px-4' value={note.title} name='title' onChange={InputEvent} placeholder='Title' autoComplete="off" />
                <textarea rows="8" className='px-4' value={note.textarea} name='textarea' onChange={InputEvent} placeholder='Write your notes' />
                <Button onClick={addEvent} variant="contained">
                    Add
                </Button>
            </form>
        </div>
    )
}

export default CreateNote