import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebase/config.js'
import { useEffect, useState } from 'react'
import { collection, getFirestore, query, onSnapshot } from "firebase/firestore";

export default function List() {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const q = query(collection(db, "tasks"));
    onSnapshot(q, (querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        const data = {
          ...doc.data(), id: doc.id
        }
        tasks.push(data);
      });
      setTaskList(tasks)
    });
  })

  return (
    <ul>
      {
        taskList.map((pika) => <li key={pika.id}>{pika.message}</li>)
      }
    </ul>
  )
}