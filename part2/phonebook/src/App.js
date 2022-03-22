import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleName = (event) => {
    setNewName(event.target.value);
    console.log(newName);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
    console.log(newNumber);
  };

  const preventSubmission = (event) => {
    event.preventDefault();
  };

  const addNameToPersons = () => {
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
    if (persons.some((person) => person.name === search)) {
      setShowSearch((value) => !value);
    }
  };

  const showFiltered = persons.filter((person) => person.name === search);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        handleSearch={handleSearch}
        showSearch={showSearch}
        showFiltered={showFiltered}
      />

      <h3>add a new</h3>
      <PersonForm
        preventSubmission={preventSubmission}
        newName={newName}
        handleName={handleName}
        newNumber={newNumber}
        handleNumber={handleNumber}
        addNameToPersons={addNameToPersons}
      />

      <h3>Numbers</h3>
      <Persons 
        persons={persons}
      />

    </div>
  );
};

export default App;
