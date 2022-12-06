import { API_HOST } from '../config'

export const create = (task, cleanTask, refreshTasks) => {
  return fetch(`${API_HOST}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
}

export const update = (taskId, task) => {
  return fetch(`${API_HOST}/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
}

export const get = (filter = {}) => {
  const url = new URL(`${API_HOST}/tasks`)

  if (filter.epic) {
    url.searchParams.append('epic_name', filter.epic)
  }
  if (filter.user) {
    url.searchParams.append('user_id', filter.user)
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resp.json())
}

export const getById = (taskId) => {
  return fetch(`${API_HOST}/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resp.json())
}

export const deleteById = (taskId, task) => {
  return fetch(`${API_HOST}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
}
