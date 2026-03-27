import React from 'react'

interface Props {
    title: string;

}

export const MyTitle = ({ title }: Props) => {
    console.log('Renderizando MyTitle');
    return (
        <h1>{title}</h1>
    )
}
