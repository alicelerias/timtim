import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Botao from './Botao'

describe('tests for Botao component', () => {
  it('test', async () => {
    const openModal = jest.fn()
    const { getByTestId } = render(
      <Botao botao={'test-botao'} openModal={openModal} />
    )
    const botaoNode = screen.getByTestId('botao-test-render')
    fireEvent.click(botaoNode)
    fireEvent.click(botaoNode)
    expect(botaoNode.textContent).toBe('test-botao')
    expect(openModal).toHaveBeenCalledTimes(2)
  })
})
