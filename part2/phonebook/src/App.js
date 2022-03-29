import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contactService from "./services/contact";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    contactService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const preventSubmission = (event) => {
    event.preventDefault();
  };

  const newContactObject = { name: newName, number: newNumber };
  // function to get the id if the contact already exists
  let findIndex = persons.findIndex((person) => {
    if (person.name === newName) {
      return person
    }
  });

  const personID = () => {
    return findIndex + 1
  }
  console.log(personID())

  // If contact exists, update the number otherwise add the contact
  const addNameToPersons = () => {
    if (
      persons.some(
        (person) => person.name === newName
      )
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one`
        )
      ) {
        contactService
          .update(personID() , newContactObject)
          // .then(window.location.reload(true));
          .then(window.location.reload(true))
      }
    } else {
      contactService
        .create(newContactObject)
        .then((returnedPersons) => setPersons(persons.concat(returnedPersons)));
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (persons.some((person) => person.name === search)) {
      setShowSearch((value) => !value);
    }
  };

  // filter person with name
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
      <Persons persons={persons} />
    </div>
  );
};

export default App;
