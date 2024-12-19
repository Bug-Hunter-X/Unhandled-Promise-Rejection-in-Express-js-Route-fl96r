const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error in / route:', err);
      res.status(500).send('An unexpected error occurred.');
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  try {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      throw new Error('Simulated asynchronous error');
    }
    return 'Operation successful';
  } catch (error) {
    throw error; // Re-throw to be caught by the route handler
  }
}
