import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactService from './services/contact'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    contactService.getAll()
      .then(persons => {setPersons(persons)})
  }, [])

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

  const newContactObject = { name: newName, number: newNumber }

  // alert if name is already added otherwise add the contact
  const addNameToPersons = () => {
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // setPersons([...persons, { name: newName, number: newNumber }]);
      contactService
        .create(newContactObject)
        .then(returnedPersons => setPersons(persons.concat(returnedPersons)))
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
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
