import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import User from './Users'

describe('tests for Users component', () => {
  it('test', async () => {
    const onSelect = jest.fn()
    const selected = jest.fn()

    const user = {
      name: 'timtim',
      profile_picture: 'test',
      id: 1,
    }

    const { getByTestId, getByText } = render(
      <User onSelect={onSelect} user={user} />
    )
    const userNode = screen.getByTestId('user-render-id')

    fireEvent.click(userNode)

    expect(onSelect.mock.calls.length).toEqual(1)
    console.log(userNode)

    const userImg = screen.getByTestId('img-user-render-id')

    expect(userImg).not.toBeNull()
  })
})
