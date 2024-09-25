const PersonForm = ({
  handleSubmit,
  newName,
  newNumber,
  handleChangeName,
  handleChangeNumber,
}) => {
  return (
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
  );
};

export default PersonForm;
