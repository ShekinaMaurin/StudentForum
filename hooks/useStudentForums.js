import { useContext } from "react"
import { StudentForumsContext } from "./contexts/StudentForumsContext"

export function useStudentForums() {
  const context = useContext(StudentForumsContext)

  if (!context) {
    throw new Error("useStudentForums must be used inside a StudentForumsProvider")
  }

  return context
}
