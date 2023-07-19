import { useState } from 'react'

import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebase/config.js'
import { getFirestore, addDoc, collection } from "firebase/firestore";

export default function Form() {
  const [valueInput, setValueInput] = useState('')
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);

  function handleSubmit(e) {
    e.preventDefault()
    sendData()
  }

  async function sendData() {
    const task = {
      message: valueInput,
      status: 'incomplete'
    }
    if (valueInput != '') {
      const docRef = await addDoc(collection(db, "tasks"), task);
      console.log("Document written with ID: ", docRef.id);
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={valueInput}
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button>click</button>
        </form>
      </div>
    </div>
  )
}
