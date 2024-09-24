const Total = ({ exercises }) => {
  const exerciseCount = () => {
    return exercises.parts.reduce((acc, curr) => acc + curr.exercises, 0);
  };

  return (
    <p style={{ fontWeight: "bold" }}>total of {exerciseCount()} exercises</p>
  );
};

export default Total;
