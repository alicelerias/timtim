import { useCallback, useEffect, useState } from 'react'
import { API_HOST } from '../config'

export const useTasks = (filter = {}) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  console.log('debug,', loading)
  const refresh = useCallback(() => {
    const url = new URL(`${API_HOST}/tasks`)
    if (filter.epic) {
      url.searchParams.append('epic_name', filter.epic)
    }
    if (filter.user) {
      url.searchParams.append('user_id', filter.user)
    }

    setLoading(true)
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(setTasks)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [filter.epic, filter.user, setLoading, setTasks])

  useEffect(refresh, [refresh])
  return [tasks, refresh, loading]
}
