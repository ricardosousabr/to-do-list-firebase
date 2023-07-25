import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebase/config.js'
import { useState } from "react";

export default function RigisterUser() {
  const app = initializeApp(firebaseConfig)
  const [emalUser, setEmailUser] = useState("")
  const [passwordUser, setPasswordUser] = useState("")

  function addUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emalUser, passwordUser)
      .then(() => {
        alert("seja bem vindo")
      })
      .catch((error) => {
        console.log(error)
      });
  }

  function handleSubmit(e) {
    e.preventDefault()
    addUser()
  }

  return (
    <>
      <div>
        <h1>Se registre</h1>
      </div>
      <div>
        <form onClick={handleSubmit}>
          <div>
            <input placeholder="e-mal" type="text" onChange={(e) => { setEmailUser(e.target.value) }} />
          </div>
          <div>
            <input placeholder="password" type="text" onChange={(e) => { setPasswordUser(e.target.value) }} />
          </div>
          <div>
            <button>Registrar</button>
          </div>
        </form>
      </div>
    </>
  )
}
