import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner';

export const LoginPage = () => {

  const [userId, setuserId] = useState('');
  const { login } = useContext(UserContext);

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(Number(userId));

    if (!result) {
      toast.error("Usuario no encontrado");
      return;
    }

    navigation('/profile');


  }

  return (
    <div className='flex flex-col items-center min-h-screen'>

      <h1 className='text-4xl font-bold'>Iniciar sesion</h1>

      <hr />

      <form onSubmit={(event) => handleSubmit(event)} className='flex flex-col gap-2 my-10'>

        <input
          type="number" value={userId} onChange={(event) => setuserId(event.target.value)}
          placeholder='ID del usuario'

        />

        <button type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Login</button>

      </form>

      <Link to="/about">
        <Button variant="ghost" >Volver a la página de inicio</Button>
      </Link>

    </div>
  )
}
