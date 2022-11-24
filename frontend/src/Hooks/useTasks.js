import { useCallback, useEffect, useState } from 'react'
import { API_HOST } from '../config'
import { get } from '../server/task'

export const useTasks = (filter = {}) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  console.log('debug,', loading)
  const url = new URL(`http://localhost:3000/tasks`)
  const refresh = useCallback(() => {
    if (filter.epic) {
      url.searchParams.append('epic_name', filter.epic)
    }
    if (filter.user) {
      url.searchParams.append('user_id', filter.user)
    }

    setLoading(true)
    get()
      .then(setTasks)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [filter.epic, filter.user, setLoading, setTasks])

  useEffect(refresh, [refresh])
  return [tasks, refresh, loading]
}
