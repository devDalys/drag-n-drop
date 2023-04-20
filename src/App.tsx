import { useState } from 'react'
import './App.css'
import * as React from 'react'

function App() {
    const [dragState, setDragState] = useState(false)
    const onDrag = (e: React.DragEvent) => {
        e.preventDefault();
        setDragState(true)
    }
    const onDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragState(false)
    }

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setDragState(false)
        const files = [...e.dataTransfer.files]
        const formData = new FormData();
        files.forEach(item => {
            return formData.append('file', item)
        })
        console.log(formData.getAll('file'))
    }


    return (
        <div className="App">
            <div className='drag'
                 onDragLeave={onDragLeave}
                 onDragOver={onDrag}
                 onDrop={onDrop}
            >
                {!dragState ? 'Перетащите файл сюда' : 'Отпустите файл'}
            </div>
            <input type={'file'} accept=".rar, .zip" onChange={e => console.log(e.target.files)}/>
        </div>
    )
}

export default App
