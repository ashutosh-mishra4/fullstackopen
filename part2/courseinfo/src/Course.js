import React from "react";

const Header = ({ courses }) => {
    return <h1>{courses}</h1>
  }

const Total = ({ courses }) => {
  const sum = courses.reduce((previous, current) => previous + current.exercises, 0)
  return <p><strong>total of {sum} exercises </strong></p>
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ courses }) => {
  return courses.map((course) => {
      return(
        <div>
          <Header 
            key={course.id}
            courses={course.name} 
          />
          {course.parts.map((item, key) => {
            return (
                <Part
                  key={key}
                  part={item}
                />
            )
          })}
          <Total courses={course.parts} />
        </div>
      )
    })}

const Course = ({ courses }) => {
  return (
    <div>
      <Header courses='Web development curriculum' />
      <Content courses={courses} />
    </div>
  )
}

export default Course