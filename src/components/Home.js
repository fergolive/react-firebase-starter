import React from 'react'
import firebaseApp from '../firebase'
import { getAuth, signOut} from 'firebase/auth'
import Cover from './Cover'
const auth=getAuth(firebaseApp)
const Home = () => {
  

  
    return (
    <>
    <div className='container'>
    <Cover 
    title='Dashboard'
    subtitle='Bienvenido/a esta es la pagina home'
    />
    
    <button 
    onClick={()=>signOut(auth)}
    className='btn bg-sec tx-darkx2' 
    >Salir
    </button>
    </div>

    </>
  )
}

export default Home