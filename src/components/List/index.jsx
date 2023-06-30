import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get, onValue } from 'firebase/database'
import firebaseConfig from '../../../firebase/config.js'
import { useEffect, useState } from 'react'

export default function List() {
  const app = initializeApp(firebaseConfig)
  const database = getDatabase()
  const [taskList, setTaskList] = useState('')

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `tasks/`)).then((snapshot) => {
      setTaskList(snapshot.val())
      console.log(snapshot.val());
    })

  }, [])

  console.log(taskList)
  return (
    <p>{taskList.task}</p>
  )
}