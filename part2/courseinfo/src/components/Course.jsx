import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        return (
          <section key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course} />
          </section>
        );
      })}
    </>
  );
};

export default Course;
