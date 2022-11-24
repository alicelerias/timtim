import { useCallback, useEffect, useState } from 'react'
import { API_HOST } from '../config'
import { get } from '../server/task'

export const useTasks = (filter = {}) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  console.log('debug,', loading)
  const refresh = useCallback(() => {
    setLoading(true)
    get(filter)
      .then(setTasks)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [filter.epic, filter.user, setLoading, setTasks])

  useEffect(refresh, [refresh])
  return [tasks, refresh, loading]
}
