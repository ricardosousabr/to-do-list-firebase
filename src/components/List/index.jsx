import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebase/config.js'
import { useEffect, useState } from 'react'
import { collection, getFirestore, query, onSnapshot, doc, updateDoc } from "firebase/firestore";

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

  async function updateStatus(task) {
    const washingtonRef = doc(db, "tasks", task.id);
    await updateDoc(washingtonRef, {
      status: "complete"
    });
  }

  return (
    <ul>
      {
        taskList.map((task) => <li key={task.id}>
          <div>
            <div>
              <p>Task: {task.message}</p>
              <p>Status: {task.status}</p>
            </div>
            <div>
              <button onClick={() => updateStatus(task)}>atualizar</button>
            </div>
          </div>
        </li>)
      }
    </ul>
  )
}