import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'

import { act } from 'react-dom/test-utils'

import Modal from './Modal'

import * as taskServer from '../server/task'

describe('test for Modal cadastro component', () => {
  const showModalCadastro = true
  const showModal = false
  const onClose = jest.fn()
  const taskId = 1
  const refreshTasks = jest.fn()

  it('test modal cadastro render', async () => {
    const { getByTestId } = render(
      <Modal
        showModalCadastro={showModalCadastro}
        showModal={showModal}
        onClose={onClose}
        taskId={taskId}
        refreshTasks={refreshTasks}
      ></Modal>
    )
    const modalCadastroTest = screen.getByTestId('modal-cadastro-test-id')
    fireEvent.click(modalCadastroTest)
  })

  it('test chamada new ticket', async () => {
    const fakeTicket = {
      titulo: 'test',
      pontos: 10,
      status: 'done',
      prioridade: 'medium',
      user: {
        name: 'timtim',
        id: 1,
      },
      epic: {
        name: 'epic-1',
        color: 'verde',
      },
    }
    const fakeFetchNew = jest
      .spyOn(taskServer, 'create')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })

    const { getByTestId } = render(
      <Modal
        showModalCadastro={showModalCadastro}
        showModal={showModal}
        onClose={onClose}
        taskId={taskId}
        refreshTasks={refreshTasks}
      ></Modal>
    )

    const modalCadastroNewTicketTest = screen.getByTestId(
      'modal-cadastro-newticket-test-id'
    )

    fireEvent.click(modalCadastroNewTicketTest)

    expect(fakeFetchNew).toHaveBeenCalledTimes(1)
    fakeFetchNew.mockRestore()
  })

  it('test botao de close', async () => {
    const { getByTestId } = render(
      <Modal
        showModalCadastro={showModalCadastro}
        showModal={showModal}
        onClose={onClose}
        taskId={taskId}
        refreshTasks={refreshTasks}
      ></Modal>
    )

    const modalCadastroCleanTaskTest = screen.getByTestId(
      'modal-cadastro-cleantask-test-id'
    )

    fireEvent.click(modalCadastroCleanTaskTest)
    fireEvent.click(modalCadastroCleanTaskTest)
  })

  it('test change titulo', async () => {
    const { getByTestId } = render(
      <Modal
        showModalCadastro={showModalCadastro}
        showModal={showModal}
        onClose={onClose}
        taskId={taskId}
        refreshTasks={refreshTasks}
      ></Modal>
    )

    const modalCadastroTextAreaTitulo = screen.getByTestId(
      'modal-cadastro-textarea-titulo-test-id'
    )

    fireEvent.change(modalCadastroTextAreaTitulo, { target: { value: 'test' } })
    expect(modalCadastroTextAreaTitulo.value).toEqual('test')
  })

  it('test change descricao', async () => {
    const { getByTestId } = render(
      <Modal
        showModalCadastro={showModalCadastro}
        showModal={showModal}
        onClose={onClose}
        taskId={taskId}
        refreshTasks={refreshTasks}
      ></Modal>
    )

    const modalCadastroTextAreaDescricao = screen.getByTestId(
      'modal-cadastro-textarea-descricao-test-id'
    )

    fireEvent.change(modalCadastroTextAreaDescricao, {
      target: { value: 'test descricao' },
    })

    expect(modalCadastroTextAreaDescricao.value).toEqual('test descricao')
  })
})

describe('test for Modal task component', () => {
  const showModalCadastro = false
  const showModal = true
  const onClose = jest.fn()
  const taskId = 2
  const refreshTasks = jest.fn()
  const fakeTicket = {
    titulo: 'test',
    descricao: 'test',
    pontos: 10,
    status: 'done',
    prioridade: 'medium',
    user: {
      name: 'timtim',
      id: 1,
    },
    epic: {
      name: 'epic-1',
      color: 'verde',
    },
  }

  it('test modal task render', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'getById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })

    await act(async () => {
      render(
        <Modal
          showModalCadastro={showModalCadastro}
          showModal={showModal}
          onClose={onClose}
          taskId={taskId}
          refreshTasks={refreshTasks}
        ></Modal>
      )
    })

    const modalTaskTest = screen.getByTestId('modal-task-test-id')
    fireEvent.click(modalTaskTest)
    expect(fakeFetchGet).toHaveBeenCalledTimes(1)
    fakeFetchGet.mockRestore()
  })

  it('test chamada delete ticket', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'getById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })
    const fakeFetchDelete = jest
      .spyOn(taskServer, 'deleteById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })

    await act(async () => {
      render(
        <Modal
          showModalCadastro={showModalCadastro}
          showModal={showModal}
          onClose={onClose}
          taskId={taskId}
          refreshTasks={refreshTasks}
        ></Modal>
      )
    })
    const modalTaskTest = screen.getByTestId('modal-task-test-id')
    const modalTaskDeleteTest = screen.getByTestId('modal-task-delete-test-id')

    fireEvent.click(modalTaskDeleteTest)

    expect(fakeFetchGet).toHaveBeenCalledTimes(1)
    expect(fakeFetchDelete).toHaveBeenCalledTimes(1)
    fakeFetchDelete.mockRestore()
    fakeFetchGet.mockRestore()
  })

  it('test chamada update ticket', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'getById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })
    const fakeFetchUpdate = jest
      .spyOn(taskServer, 'update')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })

    await act(async () => {
      render(
        <Modal
          showModalCadastro={showModalCadastro}
          showModal={showModal}
          onClose={onClose}
          taskId={taskId}
          refreshTasks={refreshTasks}
        ></Modal>
      )
    })
    const modalTaskTest = screen.getByTestId('modal-task-test-id')
    const modalTaskUpdateTest = screen.getByTestId('modal-task-update-test-id')

    fireEvent.click(modalTaskUpdateTest)

    expect(fakeFetchGet).toHaveBeenCalledTimes(1)
    expect(fakeFetchUpdate).toHaveBeenCalledTimes(1)
    fakeFetchUpdate.mockRestore()
    fakeFetchGet.mockRestore()
  })

  it('test botao de close', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'getById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })
    await act(async () => {
      render(
        <Modal
          showModalCadastro={showModalCadastro}
          showModal={showModal}
          onClose={onClose}
          taskId={taskId}
          refreshTasks={refreshTasks}
        ></Modal>
      )
    })

    const modalTaskCleanTaskTest = screen.getByTestId(
      'modal-task-close-test-id'
    )

    fireEvent.click(modalTaskCleanTaskTest)
  })

  it('test change titulo', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'getById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })
    await act(async () => {
      render(
        <Modal
          showModalCadastro={showModalCadastro}
          showModal={showModal}
          onClose={onClose}
          taskId={taskId}
          refreshTasks={refreshTasks}
        ></Modal>
      )
    })

    const modalTaskTextAreaTitulo = screen.getByTestId(
      'modal-task-titulo-test-id'
    )

    fireEvent.change(modalTaskTextAreaTitulo, { target: { value: 'test' } })
    expect(modalTaskTextAreaTitulo.value).toEqual('test')
  })

  it('test change descricao', async () => {
    const fakeFetchGet = jest
      .spyOn(taskServer, 'getById')
      .mockImplementation(() => {
        return Promise.resolve(fakeTicket)
      })
    await act(async () => {
      render(
        <Modal
          showModalCadastro={showModalCadastro}
          showModal={showModal}
          onClose={onClose}
          taskId={taskId}
          refreshTasks={refreshTasks}
        ></Modal>
      )
    })

    const modalTaskTextAreaDescricao = screen.getByTestId(
      'modal-task-descricao-test-id'
    )

    fireEvent.change(modalTaskTextAreaDescricao, {
      target: { value: 'test descricao' },
    })
    expect(modalTaskTextAreaDescricao.value).toEqual('test descricao')
  })
})
