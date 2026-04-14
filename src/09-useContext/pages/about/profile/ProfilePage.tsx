import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';

export const ProfilePage = () => {

  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);




  return (
    <div className='flex flex-col items-center
     justify-center min-h-screen'>

      <h1>Perfil del usuario</h1>

      <pre className='my-4-w-[80%] overflow-x-auto'>{JSON.stringify(user, null, 2)}</pre>

      <Button variant="destructive" onClick={logout}>
        Cerrar sesion
      </Button>

    </div>
  )
}
