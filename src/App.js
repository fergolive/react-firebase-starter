import react,{ useEffect,useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

import firebaseApp from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth=getAuth(firebaseApp)

function App() {
  const [globalUser,setGlobalUser]=useState(null)

  onAuthStateChanged(auth,(firebaseUser)=>{
    if(firebaseUser){ //caso of user logged
      setGlobalUser(firebaseUser)
    }
    else{
      setGlobalUser(null) //not user logged
    }
  })

  return (
   <>{globalUser ? <Home /> : <Login />}</>
  );
}

export default App;
