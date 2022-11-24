import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'

import Panel from './Panel'

describe('test for Panel component', () => {
  it('test', async () => {
    const tasks = [
      {
        titulo: 'test',
        id: 1,
        epic: {
          name: 'epic-1',
          color: 'verde',
        },
        pontos: 2,
        status: 'done',
        prioridade: 'medium',
      },

      {
        titulo: 'test',
        id: 2,
        epic: {
          name: 'epic-1',
          color: 'verde',
        },
        pontos: 3,
        status: 'in_progress',
        prioridade: 'medium',
      },

      {
        titulo: 'test',
        id: 3,
        epic: {
          name: 'epic-1',
          color: 'verde',
        },
        pontos: 3,
        status: 'in_progress',
        prioridade: 'medium',
      },
    ]

    const { getByTestId } = render(<Panel title={'backlog'} tasks={tasks} />)

    const panelTest = screen.getByTestId('panel-test-id')
    fireEvent.click(panelTest)

    // expect(panelTest.textContent).toBe('backlog')

    console.log(panelTest)
  })
})
