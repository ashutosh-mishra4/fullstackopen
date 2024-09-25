const Filter = ({ filteredPerson, handleFilter }) => {
  return (
    <>
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
    </>
  );
};

export default Filter;
