import React, { useState } from 'react';
import Cover from './Cover';
import firebaseApp from '../firebase';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
const auth=getAuth(firebaseApp);

const Login = () => {
    const [isRegistering,setRegistering]=useState(false)

    async function submithandler(e){
        e.preventDefault();

        const email=e.target.form_email.value;
        const pass=e.target.form_pass.value;
       
        if(isRegistering){ //si se esta registrando
            
            const userFirebase= await createUserWithEmailAndPassword(auth,email,pass);
        }
        
        signInWithEmailAndPassword(auth,email,pass)
    }

  return (
    <div className='flex flex-row w-full p-4 gap-4 justify-center align-middle'>
        <form onSubmit={submithandler} className='flex  w-[auto] p-4 gap-4 flex-col justify-center align-middle'>
            <Cover title={isRegistering?"Registrate":"Inicio de session"} subtitle={isRegistering?"Registrate para crear tu catalogo rapido y comenzar a compartir tus productos":"Inicio de session si ya estas registrado y accede a tu catalogo"}/>
            

                <input className='inp max-w-lg' placeholder='Correo' id="form_email"></input>
                <input className='inp max-w-lg' placeholder='Contraseña' id="form_pass"></input>
                
                <button className='btn bg-pri tx-bg' type='submit'>
                {!isRegistering?"Iniciar sesión":"Registrarme"}
                </button>

                <button className='btn bg-sec tx-darkx2' >Accede con Google</button>

                <button className=' tx-dark' type='button'
                    onClick={()=>setRegistering(!isRegistering)}>{isRegistering?"¿Ya tienes cuenta? Inicia sesión":"¿No tienes cuenta? Regístrate"}
                </button>
            
           
        </form>
    </div>
  )
}

export default Login