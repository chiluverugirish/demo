import express from 'express';
import sum from './sum.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/home', (req, res) => {
  res.json('Iam home');
});
app.get('/getSum/:a/:b', async (req, res) => {
    // console.log(req.params);
  const a = parseInt(req.params.a) || 0;
  const b = parseInt(req.params.b) || 0;
  const result = sum(a, b);
  res.json({ sum: result });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});