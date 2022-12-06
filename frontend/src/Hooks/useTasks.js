import { useCallback, useEffect, useState } from 'react'
import { API_HOST } from '../config'
import * as TaskServer from '../server/task'

export const useTasks = (filter = {}) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(() => {
    setLoading(true)
    TaskServer.get(filter)
      .then(setTasks)
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [filter.epic, filter.user, setLoading, setTasks])

  useEffect(refresh, [refresh])
  return [tasks, refresh, loading]
}
