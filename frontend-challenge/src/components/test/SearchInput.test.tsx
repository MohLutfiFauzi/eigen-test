/**
 * skenario testing
 *
 * - SearchInput component
 *   - should have value correctly
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchInput from '../SearchInput'

describe('SearchInput test', () => {
  it('should have value correctly', async () => {
    // arrange
    render(<SearchInput setQuery={() => {}} query='test-input-search' />)
    const inputSearch = screen.getByTestId('search-input-test')

    // assert
    expect(inputSearch).toHaveValue('test-input-search')
  })
})
