import { useEffect, useState } from 'react'
import { API_HOST } from '../config'

export const useEpics = () => {
  const [epics, setEpics] = useState([])
  useEffect(() => {
    fetch(`${API_HOST}/epics`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(setEpics)
      .catch((err) => console.log(err))
  }, [])
  return epics
}
