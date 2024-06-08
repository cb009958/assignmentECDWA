import './index.css';

const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const app = express();

require('dotenv').config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'testewda',
    key: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`); // Naming the file uniquely
    }
  })
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send({
      message: 'File uploaded successfully',
      fileInfo: req.file
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  