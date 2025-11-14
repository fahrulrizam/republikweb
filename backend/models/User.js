const mongoose = require('mongoose');

// Definisikan Skema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

// Buat Model (yang berinteraksi dengan koleksi 'users' di MongoDB)
const User = mongoose.model('User', userSchema);

module.exports = User;