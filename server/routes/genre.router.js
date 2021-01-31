const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `SELECT * FROM "genres" ORDER BY "id" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});


// get genre details 
router.get('/:id', (req,res) => {
  const movieId = req.params.id;
  const genreDetailsQuery = `
    SELECT "genres".name FROM "movies" 
    FULL OUTER JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
    JOIN "genres" ON "genres".id = "movies_genres".genre_id
    WHERE "movies".id = $1;` 
  pool.query(genreDetailsQuery, [movieId])
    .then(result => {
      res.send(result.rows)
    }).catch(err => {
      console.log('ERROR in Get Movie Details', err);
      res.sendStatus(500);
    })
})

module.exports = router;