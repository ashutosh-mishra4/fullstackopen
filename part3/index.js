const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('build'))
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
  response.json(persons);
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${
      persons.length
    } people</p> <p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
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

  if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  persons = persons.concat(body);
  response.json(body);
});

morgan.token("body", (req, res) => JSON.stringify(req.body));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Port running on server ${port}`);
});
