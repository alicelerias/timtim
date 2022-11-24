import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'

import Prioridade from './Prioridade'

describe('test for Prioridade component', () => {
  it('test', async () => {
    const { getByTestId } = render(<Prioridade prioridade={'medium'} />)

    const prioridadeTest = screen.getByTestId('prioridade-test-id')
    fireEvent.click(prioridadeTest)

    expect(prioridadeTest.textContent).toBe('medium')
  })
})
