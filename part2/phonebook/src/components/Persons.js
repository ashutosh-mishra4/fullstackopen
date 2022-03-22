import React from 'react'

function Persons({persons}) {
  return (
    <div>
        {persons.map((person) => {
            return (
                <div key={person.name}>
                    <p>{`${person.name} ${person.number}`}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Persons