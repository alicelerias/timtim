import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'

import Main from './Main'
import TasksContext from '../context/tasks'

const tasks = [
  {
    titulo: 'test',
    id: 1,
    epic: {
      name: 'epic-1',
      color: 'verde',
    },
    pontos: 10,
    status: 'backlog',
    prioridade: 'medium',
  },

  {
    titulo: 'test',
    id: 2,
    epic: {
      name: 'epic-1',
      color: 'verde',
    },
    pontos: 10,
    status: 'backlog',
    prioridade: 'medium',
  },
]

describe('tests for Main Component', () => {
  it('render Main component should work', async () => {
    const openModal = jest.fn()
    render(
      <TasksContext.Provider value={{ tasks }}>
        <Main openModal={openModal}></Main>
      </TasksContext.Provider>
    )
  })
})
