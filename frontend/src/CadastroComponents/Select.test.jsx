import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import Select from './Select'

describe('Test selecet', () => {
  const items = ['yuri', 'timtim', 'alice']
  it('should begin closed', async () => {
    const select = render(<Select items={items} onSelect={false} />)
    expect(screen.queryByText(/yuri/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/timtim/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/alice/i)).not.toBeInTheDocument()
  })
})
