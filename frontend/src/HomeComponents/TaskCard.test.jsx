import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import TaskCard from './TaskCard'

describe('tests for Select component', () => {
  it('test', async () => {
    const openModal = jest.fn()
    const task = {
      titulo: 'testando a task da timtim',
      id: 2,
      prioridade: 'medium',
      pontos: '10',
      epic: {
        color: 'blue',
      },
    }
    const { getByTestId, getByText } = render(
      <TaskCard
        openModal={openModal}
        epic={task.epic}
        titulo={task.titulo}
        id={task.id}
        prioridade={task.prioridade}
        pontos={task.pontos}
      />
    )
    // const taskCardNode = getByTestId('task-card-render')
    // const taskCardNode = getByText(task.titulo)
    // expect(taskCardNode).toBeTruthy()

    // const taskCardNode = getByText(task.prioridade)
    // expect(taskCardNode).toBeTruthy()

    const taskCardNode = getByText(task.pontos)
    fireEvent.click(taskCardNode)
    expect(openModal).toHaveBeenCalledTimes(1)
    expect(taskCardNode).toBeTruthy()
  })
})
