import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { createContext, useState } from "react"
import { db } from "./firebaseConfig"

export const StudentForumsContext = createContext()

export function StudentForumsProvider({ children }) {
  const [studentForums, setStudentForums] = useState([])

  // ✅ Fetch all forums
  async function fetchStudentForums() {
    try {
      const querySnapshot = await getDocs(collection(db, "studentForums"))
      const forums = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setStudentForums(forums)
    } catch (error) {
      console.error("Error fetching forums:", error)
    }
  }

  // ✅ Create a new forum
  async function createStudentForum(forumData) {
    try {
      const docRef = await addDoc(collection(db, "studentForums"), forumData)
      setStudentForums((prev) => [...prev, { id: docRef.id, ...forumData }])
    } catch (error) {
      console.error("Error creating forum:", error)
    }
  }

  // ✅ Delete a forum
  async function deleteStudentForum(id) {
    try {
      await deleteDoc(doc(db, "studentForums", id))
      setStudentForums((prev) => prev.filter((forum) => forum.id !== id))
    } catch (error) {
      console.error("Error deleting forum:", error)
    }
  }

  // ✅ Update a forum
  async function updateStudentForum(id, updatedData) {
    try {
      await updateDoc(doc(db, "studentForums", id), updatedData)
      setStudentForums((prev) =>
        prev.map((forum) =>
          forum.id === id ? { ...forum, ...updatedData } : forum
        )
      )
    } catch (error) {
      console.error("Error updating forum:", error)
    }
  }

  return (
    <StudentForumsContext.Provider
      value={{
        studentForums,
        fetchStudentForums,
        createStudentForum,
        deleteStudentForum,
        updateStudentForum,
      }}
    >
      {children}
    </StudentForumsContext.Provider>
  )
}
