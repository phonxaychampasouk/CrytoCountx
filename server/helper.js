const axios = require('axios');

const helper = {};

helper.fetchRecords = (start, end, callback) => {
  const records = [];
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
    .then(({ data }) => {
      const { bpi } = data;
      Object.keys(bpi).forEach((date) => {
        records.push({
          date,
          value: bpi[date],
        });
      });
      callback(null, records);
    })
    .catch((e) => {
      callback(e);
    });
};

module.exports = helper;
