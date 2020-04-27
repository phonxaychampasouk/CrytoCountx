const express = require('express');
const path = require('path');
const axios = require('axios');
const { fetchRecords } = require('./helper');

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/api/cryptocurrencyRates/:dateStart/:dateEnd', (req, res) => {
  const { dateStart, dateEnd } = req.params;
  fetchRecords(dateStart, dateEnd, (err, data) => {
    if (err) {
      console.log('Error with fetching Records', err);
      res.sendStatus(404);
    }
    res.send(data);
  });
});

app.listen(PORT, () => console.log('User is listenting to port:', PORT));
