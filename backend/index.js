const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: 'First item', description: 'This is the first item from the API.' },
  { id: 2, name: 'Second item', description: 'This is the second item from the API.' },
  { id: 3, name: 'Third item', description: 'This is the third item from the API.' },
  { id: 4, name: 'Fourth item', description: 'This is the fourth item from the API.' }
];

app.get('/api/data', (req, res) => {
  res.json({ success: true, data: items });
});

app.listen(port, () => {
  console.log(`Express backend listening on http://localhost:${port}`);
});
