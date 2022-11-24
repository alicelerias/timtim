import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'

import Main from './Main'

// import MockedPanel from './Panel'

describe('tests for Main Component', () => {
  jest.mock('./Panel', () => ({
    Panel: () => {
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
      return <mock-panel data-testid="panel" tasks={tasks} />
    },
  }))

  it('test', async () => {
    const openModal = jest.fn()
    const taskId = jest.fn()
    const setTaskId = jest.fn()

    const { getByTestId } = render(<Main openModal={openModal}></Main>)

    const mainNode = screen.getByTestId('main-test-render')

    fireEvent.click(mainNode)
    expect(openModal).toHaveBeenCalledTimes(1)
  })
})
