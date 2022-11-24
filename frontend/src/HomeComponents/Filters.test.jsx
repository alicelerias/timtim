import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import EpicFilter from './Filters'

import UserFilter from './Filters'

describe('tests for FilterEpic component', () => {
  it('test', async () => {
    const { getByTestId, getByText } = render(<EpicFilter />)
    const epicFilterNode = screen.getByTestId('epic-filter-render-id')
    fireEvent.click(epicFilterNode)
    console.log(epicFilterNode)
  })
})

describe('tests for FilterUser component', () => {
  it('test', async () => {
    const { getByTestId, getByText } = render(<UserFilter />)
    const userFilterNode = screen.getByTestId('user-filter-render-id')
    fireEvent.click(userFilterNode)
  })
})
