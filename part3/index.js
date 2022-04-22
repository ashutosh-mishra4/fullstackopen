require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");

app.use(cors());
app.use(express.static("build"));
app.use(morgan("tiny"));
app.use(
  morgan(":method :url :status :res[content-length] :response-time ms :body")
);
app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${
      persons.length
    } people</p> <p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end;
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// random id number needed to assign to post requests body
const generateID = () => {
  const id = Math.floor(Math.random() * (1000 - 5 + 1) + 5);
  return id;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  body.id = generateID();

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "You have missed the name or number",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  // if (persons.find((person) => person.name === body.name)) {
  //   return response.status(400).json({
  //     error: "name must be unique",
  //   });
  // }

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

morgan.token("body", (req, res) => JSON.stringify(req.body));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Port running on server ${port}`);
});
