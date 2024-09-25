import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredName] = useState([]);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleFilter = (event) => {
    const lowerCaseValue = event.target.value.toLowerCase();
    setFilteredName(lowerCaseValue);
    const filteredResult = persons.filter(
      (person) => person.name.toLowerCase() === lowerCaseValue
    );
    setFilteredName(filteredResult);
    console.log(filteredResult);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };
    const doesThisPersonExists = persons.some(
      (person) => person.name === newName
    );
    doesThisPersonExists
      ? alert(`${newName} is already added to the Phonebook`)
      : setPersons(() => persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>
      {filteredPerson.map((person) => {
        return (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        );
      })}
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName} required />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} onChange={handleChangeNumber} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
