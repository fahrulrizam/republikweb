// server.js

// Baris ini HARUS ADA di PALING ATAS file server.js
require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Ambil URI dari Variabel Lingkungan (File .env)
const MONGODB_URI = process.env.MONGODB_URI; 

// Lakukan koneksi ke MongoDB Atlas
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas Connected successfully!');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
// ... kode Express lainnya