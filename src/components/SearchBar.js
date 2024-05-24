import './css.css'
import React from 'react'

const SearchBar = ({handleonserach} , className) => {
  return (
    <div >
        <input className={`search-bar ${className}`} type="search" onChange={handleonserach} />
      </div>
  )
}

export default SearchBar
