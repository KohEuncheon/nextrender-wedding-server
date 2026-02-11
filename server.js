javascript 
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

app.post('/render', upload.fields([
  { name: 'bridePhoto', maxCount: 1 },
  { name: 'groomPhoto', maxCount: 1 }
]), async (req, res) => {
  try {
    const { brideName, groomName } = req.body;
    
    console.log(`영상 생성 요청: ${brideName} ♥ ${groomName}`);
    
    res.json({ 
      success: true, 
      message: `${brideName}과 ${groomName}의 영상이 생성되었습니다!`,
      videoUrl: '/videos/sample.mp4'
    });
    
  } catch (error) {
    console.error('렌더링 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Nexrender Wedding Server 실행 중!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중...`);
});
