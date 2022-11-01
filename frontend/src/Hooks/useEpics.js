import { useEffect, useState } from 'react'

export const useEpics = () => {
  const [epics, setEpics] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/epics', {
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
