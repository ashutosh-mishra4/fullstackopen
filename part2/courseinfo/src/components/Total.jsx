const Total = ({ exercises }) => {
  return (
    <p style={{ fontWeight: "bold" }}>
      total of{" "}
      {exercises.parts[0].exercises +
        exercises.parts[1].exercises +
        exercises.parts[2].exercises +
        exercises.parts[3].exercises}{" "}
      exercises
    </p>
  );
};

export default Total;
