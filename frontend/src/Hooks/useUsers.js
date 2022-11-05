import { useEffect, useState } from 'react'
import { API_HOST } from '../config'

export const useUsers = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`${API_HOST}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(setUsers)
      .catch((err) => console.log(err))
  }, [])
  return users
}
