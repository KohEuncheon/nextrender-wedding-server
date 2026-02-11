const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '웨딩 서버 정상 작동!',
    status: 'success'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
