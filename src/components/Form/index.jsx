import { useState } from 'react'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import firebaseConfig from '../../../firebase/config.js'

export default function Form() {
  const [valueInput, setValueInput] = useState('')
  const app = initializeApp(firebaseConfig)
  const database = getDatabase()

  function handleSubmit(e) {
    e.preventDefault()
    sendData()
  }

  function sendData() {
    if (valueInput != '') {
      set(ref(database, 'task/' + 1), {
        task: valueInput
      })
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
