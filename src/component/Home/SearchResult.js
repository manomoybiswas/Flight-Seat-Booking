import React from 'react'

{
  type: Buy
  info: 'first redux action'
}
function SearchResult({location}) {
  return (
    <div>
      {location.state.source}
    </div>
  )
}

export default SearchResult
