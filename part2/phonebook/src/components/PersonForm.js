import React from 'react'

function PersonForm({preventSubmission, newName, handleName, newNumber, handleNumber, addNameToPersons}) {
  return (
    <form onSubmit={preventSubmission}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addNameToPersons}>
            add
          </button>
        </div>
      </form>
  )
}

export default PersonForm