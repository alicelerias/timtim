import React from 'react'

import { render, fireEvent, screen } from '@testing-library/react'

import Pontos from './Pontos'

describe('test for Pontos component', () => {
  it('test', async () => {
    const { getByTestId } = render(<Pontos pontos={'3'} />)

    const pontosTest = screen.getByTestId('pontos-test-id')
    fireEvent.click(pontosTest)

    expect(pontosTest.textContent).toBe('3')
  })
})
