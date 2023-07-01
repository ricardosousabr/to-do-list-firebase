import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../firebase/config.js'
import { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs, query, where, onSnapshot, doc } from "firebase/firestore";

export default function List() {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const [taskList, setTaskList] = useState({})
  const ids = Object.keys(taskList)

  useEffect(() => {

    // const querySnapshot = await getDocs(collection(db, "cities"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    // checkUserVerification()

    const q = query(collection(db, "cities"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });
  }, [])


  const checkUserVerification = async () => {

    const querySnapshot = await getDocs(collection(db, "cities"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

  };

  return (
    <ul>
      {/* {
        ids.map((id) => <li key={id}>{taskList[id].message}</li>)
      } */}
    </ul>
  )
}