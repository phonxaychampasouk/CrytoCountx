# CrytoCountx
Allows users to search historical prices of Bitcoin by date range.

![Searching](https://media.giphy.com/media/drxBqNfKDrmeXP6XGG/giphy.gif)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [CRUD API ROUTES](#CRUD)
    *[Comments](#Comments)
        *[GET /fetchParkData]
        *[GET /fetchAnimalImages/:query]
5. [Authors](#authors)

## Usage

>  From the root directory of this service, grab dependencies (see below). Ensure that postgres server is running. Nagivate to yor terminal, then use the command `npm run react-dev` to transpose the es6 files into a bundle using webpack and sping up the server on `localhost:5000`.

After the above steps, navigate to localhost:3000 and view the component!

## Requirements

> Must have Postgres installed and running on your workstation.
> Mush have node installed on your workstation

## Development

### Installing Dependencies

From within the root directory:

npm install

## CRUD API ROUTES

### GET /api/cryptocurrencyRates/:dateStart/:dateEnd

> Given a start and ending date, GET will fetch querys from with in a date range.

```helper.fetchRecords = (start, end, callback) => {
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
```

**Success Response**
  * **Status Code:** 200 
    * **Sample Content**:

      |Key              |Type  |
      |:--------------- |:-----|
      |`date`           |text  |
      |`value`          |int  |

      
**Error Response:**
  * **Status Code:** 404 Bad Request Error:
  * **Conetent:** `{ error : "Bad Request Error" }`
  * **Sample Call:**


- **Phonxay Champasouk** - Software Engineer
