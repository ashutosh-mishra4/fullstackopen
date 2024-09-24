import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, id: String(persons.length + 1) };
    const doesThisPersonExists = persons.some(
      (person) => person.name === newName
    );
    doesThisPersonExists
      ? alert(`${newName} is already added to the Phonebook`)
      : setPersons(() => persons.concat(newPerson));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
