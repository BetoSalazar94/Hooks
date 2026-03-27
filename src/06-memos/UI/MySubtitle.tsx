import React from 'react'

interface Props {
    subtitle: string;
}

export const MySubtitle = ({ subtitle }: Props) => {
    console.log('Renderizando MySubtitle');
    return (
        <>
            <h6>{subtitle}</h6>
            <button>Llamar a función</button>
        </>
    )
}
