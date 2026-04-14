import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import React, { use } from 'react'
import { Link } from 'react-router'

export const AboutPage = () => {

    const { isauthenticated, logout } = use(UserContext);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>

            <h1 className='text-4xl font-bold '>Pagina sobre mi</h1>
            <hr />

            <div className='flex flex-col gap-2'>

                {isauthenticated && (
                    <Link to="/profile"
                        className='hover:text-blue-500 underline text-2xl font-semibold'
                    >Ir a mi perfil</Link>
                )

                }

                {
                    isauthenticated ? (
                        <Button variant='destructive' onClick={logout} className='mt-4'>Salir`</Button>
                    ) : (
                        <Link to="/login"
                            className='hover:text-blue-500 underline text-2xl font-semibold'
                        >Iniciar sesion</Link>
                    )
                }





            </div>

        </div>
    )
}
