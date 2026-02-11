javascript 
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Nexrender Wedding Server 실행 중!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

app.post('/render', (req, res) => {
  const { brideName, groomName } = req.body;
  
  res.json({ 
    success: true, 
    message: `${brideName || '신부'}과 ${groomName || '신랑'}의 영상이 생성되었습니다!`,
    videoUrl: '/videos/sample.mp4'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중...`);
});
