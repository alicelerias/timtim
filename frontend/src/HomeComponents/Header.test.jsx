import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Header from './Header'

describe('tests for Header component', () => {
  it('test', async () => {
    const openModal = jest.fn()
    const { getByTestId } = render(<Header openModal={openModal} />)
    const headerNode = screen.getByTestId('header-test-render')
    fireEvent.click(headerNode)
  })
})
