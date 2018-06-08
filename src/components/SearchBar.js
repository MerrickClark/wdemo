import React from 'react'

const SearchBar = ({ value, onChange }) => (
  <form className='SearchBar'>
    <input type='text' value={value} placeholder='Search...' onChange={e => onChange(e.target.value)} />
  </form>
)

export default SearchBar
