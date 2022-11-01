import { useEffect, useState } from "react"

export const useUsers = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((resp) => resp.json())
      .then(setUsers)
      .catch((err) => console.log(err))
  }, [])
  return users
}