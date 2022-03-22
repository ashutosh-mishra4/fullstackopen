import React from 'react'

function Filter({search, handleSearch, showSearch, showFiltered}) {
  return (
    <div>
        filter shown with a <input value={search} onChange={handleSearch}/>
        <div>
          {showSearch === !true
            ? "Nothing to Show"
            : showFiltered.map(filter => <div key={filter.name}>{`${filter.name} ${filter.number}`}</div>)
          }
        </div>
    </div>
  )
}

export default Filter