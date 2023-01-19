import React from 'react'
import { Input } from 'antd'

const { Search } = Input

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  query: string
}

const SearchInput = ({ setQuery, query }: Props) => {
  return (
    <Search data-testid='search-input-test' value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder="Search article" />
  )
}

export default SearchInput
