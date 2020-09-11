const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const celebrities = [
  {
    name: 'Arnold Schawarzenegger',
    occupation: 'actor',
    catchPhrase: 'Hasta la vista, baby',
  },
  {
    name: 'Lady Gaga',
    occupation: 'singer',
    catchPhrase: 'Gaga Uh LaLa!',
  },
  {
    name: 'Jim Carrey',
    occupation: 'actor',
    catchPhrase: 'Que demais!!!',
  },
];

mongoose
  .connect('mongodb://localhost/lab-movies-ironhack', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    Celebrity.insertMany(celebrities)
      .then(celebs => {
        console.log(`Inserted ${celebs.length} celebrities`);

        mongoose.connection.close();
      })
      .catch(error => console.log(error));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });
