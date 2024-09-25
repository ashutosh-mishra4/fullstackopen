const Persons = ({ personsData }) => {
  return (
    <>
      {personsData.map((person) => {
        return (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Persons;
