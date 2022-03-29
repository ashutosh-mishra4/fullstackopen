import React from "react";
import contactService from "../services/contact";

// Component to display/delete contacts
function Persons({ persons }) {
  
  // Delete contact from database after confirmation
  const removeContact = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      contactService.remove(id).then(() => window.location.reload(true));
    }
  };

  return (
    <div>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <p>{`${person.name} ${person.number} `}</p>
            <button
              value={person.id}
              onClick={() => removeContact(person.id, person.name)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Persons;
