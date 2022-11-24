import App from './App'
import { render, screen, fireEvent } from '@testing-library/react'

import { act } from 'react-dom/test-utils'

import * as taskServer from '../src/server/task'

describe('tests for app component', () => {
  const tasks = [
    {
      titulo: 'test',
      descricao: 'test',
    },
    {
      titulo: 'test',
      descricao: 'test',
    },
    {
      titulo: 'test',
      descricao: 'test',
    },
  ]
  it('test render app', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'get')
      .mockImplementation(() => {
        return Promise.resolve(tasks)
      })

    await act(async () => {
      render(<App />)
    })
  })
})
