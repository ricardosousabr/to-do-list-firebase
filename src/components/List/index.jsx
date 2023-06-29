import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get } from 'firebase/database'
import firebaseConfig from '../../../firebase/config.js'

export default function List() {
  const app = initializeApp(firebaseConfig)
  const database = getDatabase()

  function readList() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `task/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  console.log(readList())

  return (
    <h1>Hello</h1>
  )
}