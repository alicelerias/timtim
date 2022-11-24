import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Epic from './Epic'

describe('tests for Users component', () => {
  it('test', async () => {
    const onSelect = jest.fn()

    const epic = {
      name: 'epic-1',
      color: 'verde',
      id: 1,
    }

    const { getByTestId, getByText } = render(
      <Epic onSelect={onSelect} epic={epic} />
    )
    const epicNode = screen.getByTestId('epic-render-id')

    fireEvent.click(epicNode)

    expect(onSelect.mock.calls.length).toEqual(1)
    console.log(epicNode)
  })
})
