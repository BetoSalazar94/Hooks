import React, { useState } from 'react'
import { MyTitle } from './UI/MyTitle'
import { MySubtitle } from './UI/MySubtitle';

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subtitle, setSubtitle] = useState('mundo');

    return (
        <div className='bg-gradient flex flex-col gap-4'>

            <h1 className='text-2xl font-thin text-white'>MemoHook</h1>

            <MyTitle title={title} />

            <MySubtitle subtitle={subtitle} />

            <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer'
                onClick={() => setTitle('Hello')}>
                Cambiar titulo</button>
            <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer'
                onClick={() => setSubtitle('world')}>
                Cambiar subtitulo</button>


        </div>
    )
}
