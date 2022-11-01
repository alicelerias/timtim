import { useCallback, useEffect, useState } from "react";

export const useTasks = (filter={}) => {
  const [tasks, setTasks] = useState([])

  const refresh = useCallback(() => {
    const url = new URL('http://localhost:5000/tasks')
    if (filter.epic) {
      url.searchParams.append('epic.name', filter.epic)
    }
    if (filter.user) {
      url.searchParams.append('user.name', filter.user)
    }
    fetch(url, {  
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(setTasks)
      .catch((err) => console.log(err));
  }, [filter.epic, filter.user])

  useEffect(refresh, [refresh]);
  return [tasks, refresh]
}
