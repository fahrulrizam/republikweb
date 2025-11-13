// server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Lokasi file penyimpanan data
const registrationFile = path.join(__dirname, "registration.json");
const newsletterFile = path.join(__dirname, "newsletter.json"); // 🔥 file baru untuk newsletter

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // ganti sesuai port React-mu jika perlu
}));
app.use(express.json());

// --- Helper Fungsi Umum ---
const ensureFileExists = (filePath) => {
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]", "utf8");
};

const readJSON = (filePath) => {
    ensureFileExists(filePath);
    const data = fs.readFileSync(filePath, "utf8");
    try {
        return JSON.parse(data || "[]");
    } catch {
        return [];
    }
};

const writeJSON = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

// --- ROUTE UTAMA (untuk testing) ---
app.get("/", (req, res) => {
    res.send("<h2>✅ Server Aktif di http://localhost:5000</h2>");
});

// --- ENDPOINT PENDAFTARAN (existing) ---
app.get("/api/registrations", (req, res) => {
    const data = readJSON(registrationFile);
    res.json(data);
});

app.post("/api/register", (req, res) => {
    const {
        nama, email, whatsapp, sekolah, jurusan, posisi, link_cv, motivasi,
    } = req.body;

    console.log('📦 Data Diterima:', req.body);

    const requiredFields = [nama, email, whatsapp, sekolah, jurusan, posisi, link_cv, motivasi];
    const incomplete = requiredFields.some(f => !f || (typeof f === "string" && f.trim() === ""));
    if (incomplete) {
        return res.status(400).json({ message: "Data wajib tidak lengkap." });
    }

    try {
        const registrations = readJSON(registrationFile);
        const newEntry = {
            id: Date.now(),
            nama,
            email,
            whatsapp,
            sekolah,
            jurusan,
            posisi,
            link_cv,
            motivasi,
            created_at: new Date().toISOString(),
        };
        registrations.push(newEntry);
        writeJSON(registrationFile, registrations);

        console.log(`✅ Data baru disimpan: ${nama} (${email})`);
        res.status(201).json({ message: "Pendaftaran berhasil!", entry: newEntry });
    } catch (error) {
        console.error('❌ Error:', error);
        res.status(500).json({ message: "Kesalahan internal server." });
    }
});

// --- ENDPOINT BARU: Newsletter ---
app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Alamat email tidak valid." });
    }

    try {
        const list = readJSON(newsletterFile);

        // Cek apakah email sudah terdaftar
        if (list.some(item => item.email === email)) {
            return res.status(409).json({ message: "Email sudah terdaftar di newsletter." });
        }

        const newEntry = {
            id: Date.now(),
            email,
            created_at: new Date().toISOString(),
        };

        list.push(newEntry);
        writeJSON(newsletterFile, list);

        console.log(`📧 Email baru ditambahkan ke newsletter: ${email}`);
        res.status(201).json({ message: "Email berhasil ditambahkan ke newsletter!" });
    } catch (error) {
        console.error("❌ Gagal menyimpan newsletter:", error);
        res.status(500).json({ message: "Terjadi kesalahan server." });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log(`🗂️  Pendaftaran disimpan di: ${registrationFile}`);
    console.log(`📰  Newsletter disimpan di: ${newsletterFile}`);
});
