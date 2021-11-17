import React from "react";
import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const sum = () => {
    const hello =  course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    
    return hello
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts.map((part, key) => (
          <div key={key}>
            {part.name}
            {part.exercises}
          </div>
        ))}
      />
      <Total parts={sum()} />
    </div>
  );
};

export default App;
