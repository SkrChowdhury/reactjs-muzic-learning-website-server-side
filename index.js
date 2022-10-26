const express = require('express');
const app = express();
const cors = require('cors');
const port  =  process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const course  = require('./data/course.json');

app.get('/', (req, res) => {
  res.send('Muzic API Running');
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const category_courses = course.filter((n) => n.category_id === id);
  res.send(category_courses); 
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log('Muzic Server running on port', port); 
});
