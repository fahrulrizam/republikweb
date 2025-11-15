import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import './Home.css'; // PENTING: Mengimpor file CSS yang sesuai

// --- Komponen Pihak Ketiga (React-Bootstrap) ---
import {
    Container, Row, Col, Card, ListGroup, Button, Form, Accordion, Navbar, Nav,
    Alert, InputGroup
} from 'react-bootstrap';

// --- Komponen Pihak Ketiga (React-Icons) ---
import {
    FaRocket, FaCheck, FaStar, FaCode, FaVideo, FaChartLine,
    FaSearch, FaRegQuestionCircle, FaMapMarkerAlt, FaEnvelope,
    FaWhatsapp, FaInstagram, FaTwitter, FaTrophy,
    FaUserTie, FaPalette, FaLaptopCode, FaCalendarAlt, FaQuoteRight, FaPaperPlane, FaUserCheck,
    FaUserFriends,
    FaChevronUp,
    FaUpload
    // FaPaperPlane digunakan untuk menggantikan logo Telegram (Tele)
} from 'react-icons/fa';

// =================================================================
// ---------------------- KOMPONEN PEMBANTU ------------------------
// =================================================================

// Card Fitur Utama (Sertifikat, Mentoring, Proyek, Fleksibel)
const FeatureCard = ({ icon, title, text }) => (
    <Card className="feature-card h-100 p-4 shadow-sm border-0 fade-in-up">
        <Card.Body className="text-center p-0">
            <div className="icon-wrapper-lg mx-auto mb-3 d-inline-flex justify-content-center align-items-center rounded-3">
                {React.cloneElement(icon, { size: 30 })}
            </div>
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text className="card-text">{text}</Card.Text>
        </Card.Body>
    </Card>
);

// Card Posisi Magang
const PositionCard = ({ icon, title, description, requirements, linkTo, buttonClass = 'btn-position-apply' }) => (
    <Card className="position-card h-100 shadow-sm border-0 fade-in-up">
        <Card.Body className="card-body-position">
            <div className='card-content-top'>
                <div className="icon-wrapper-lg text-white mb-3">
                    {React.cloneElement(icon, { size: 28 })}
                </div>
                <Card.Title as="h5" className="fw-bold text-primary-dark">{title}</Card.Title>
                <Card.Text className="text-gray-text my-3 small-desc small">{description}</Card.Text>

                <h6 className="text-primary-dark mt-4 fw-bold small">Requirements:</h6>
                <ListGroup variant="flush" className="requirements-list">
                    {requirements.map((req, index) => (
                        <ListGroup.Item key={index} className="px-0 bg-transparent text-gray-text small border-0 py-1">
                            <span className='me-2 requirement-bullet'>•</span>
                            {req}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="mt-4">
                <HashLink
                    to={linkTo}
                    scroll={(el) => window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })}
                    className={`btn w-100 ${buttonClass}`}
                >
                    Apply Now <FaRocket className="ms-2" size={12}/>
                </HashLink>
            </div>
        </Card.Body>
    </Card>
);

// Komponen Testimonial
const TestimonialItem = ({ name, title, quote, imageSrc }) => (
    <div className="testimonial-card h-100 fade-in-up">
        <div className="d-flex align-items-center mb-3">
            <img
                src={imageSrc}
                alt={name}
                className="rounded-circle me-3 testimonial-img"
            />
            <div>
                <h5 className="fw-bold mb-0 text-primary-dark">{name}</h5>
                <p className="small text-muted mb-0">{title}</p>
            </div>
        </div>
        <div className="text-warning-custom mb-3">
            {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
        </div>
        <p className="testimonial-text small testimonial-quote">{quote}</p>
    </div>
);

// Komponen FAQ Item
const FaqItem = ({ eventKey, question, answer }) => (
    <Accordion.Item eventKey={eventKey} className="mb-3 border-0 rounded-3 shadow-sm faq-item">
        <Accordion.Header className="fw-semibold">{question}</Accordion.Header>
        <Accordion.Body className="text-gray-text small">
            {answer}
        </Accordion.Body>
    </Accordion.Item>
);
// Komponen Footer
const FooterComponent = () => (
  <footer className="footer-bg footer-custom" id="kontak-footer">
    <Container>
      <Row className="g-4">

        {/* === KOLOM 1: LOGO & DESKRIPSI === */}
        <Col lg={4} md={6}>
          <HashLink
            to="/#home"
            scroll={(el) =>
              window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" })
            }
            className="d-flex align-items-center text-decoration-none"
          >
            <FaRocket className="text-secondary-color me-2 fs-3" />
            <span className="fw-bold fs-4 text-white">Republikweb</span>
          </HashLink>
          <p className="footer-about-text text-white-80">
            Agensi digital yang fokus pada website development, app creation, dan SEO services.
            Membangun karir digital Anda bersama kami.
          </p>
        </Col>

        {/* === KOLOM 2: QUICK LINKS === */}
        <Col lg={2} md={6}>
          <h5 className="footer-section-title">Quick Links</h5>
          <ul className="footer-links-list">
            <li><HashLink to="/#tentang">Tentang Program</HashLink></li>
            <li><HashLink to="/#posisi">Posisi Tersedia</HashLink></li>
            <li><HashLink to="/#galeri">Galeri</HashLink></li>
            <li><HashLink to="/#testimoni">Testimonial</HashLink></li>
            <li><HashLink to="/#faq">FAQ</HashLink></li>
            <li><HashLink to="/#lokasi">Peta Lokasi</HashLink></li>
          </ul>
        </Col>

        {/* === KOLOM 3: KONTAK === */}
        <Col lg={2} md={6}>
          <h5 className="footer-section-title">Kontak Kami</h5>
          <ul className="contact-info-footer">
            <li>
              <span className="icon-wrapper-footer"><FaMapMarkerAlt /></span>
              Jl. Digital No. 123, Yogyakarta 55281
            </li>
            <li>
              <span className="icon-wrapper-footer"><FaEnvelope /></span>
              <a href="mailto:info@republikweb.net" className="text-white-80 text-decoration-none">
                info@republikweb.net
              </a>
            </li>
          </ul>
        </Col>

        {/* === KOLOM 4: IKUTI KAMI === */}
        <Col lg={2} md={6}>
          <h5 className="footer-section-title">Ikuti Kami</h5>
          <div className="social-icons d-flex gap-3 mt-3">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ fontSize: "1.3rem", color: "#FFF" }} title="WhatsApp"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/republikweb" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ fontSize: "1.3rem", color: "#FFF" }} title="Instagram"><FaInstagram /></a>
            <a href="https://t.me/republikweb" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ fontSize: "1.3rem", color: "#FFF" }} title="Telegram"><FaPaperPlane /></a>
            <a href="https://twitter.com/republikweb" target="_blank" rel="noopener noreferrer" className="social-icon-link" style={{ fontSize: "1.3rem", color: "#FFF" }} title="Twitter"><FaTwitter /></a>
          </div>
        </Col>

       {/* === KOLOM 5: NEWSLETTER === */}
<Col lg={2} md={6}>
    <h5 className="footer-section-title">Newsletter</h5>
    <p className="text-white-70 small">
        Dapatkan update terbaru tentang program magang kami!
    </p>

    <Form
        className="newsletter-form"
        onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value.trim();
            
            if (!email) {
                console.warn("⚠️ Silakan masukkan email Anda.");
                // Jika Anda menggunakan state: setNewsletterStatus('error: Silakan masukkan email Anda.');
                return;
            }

            try {
                const response = await fetch("https://republik-web-api.onrender.com/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        // PERBAIKAN: Sinkronisasi Keys agar cocok dengan destructuring server.js
                        nama: "Newsletter Subscriber",
                        emailAktif: email, // HARUS emailAktif (sesuai server.js)
                        whatsapp: "N/A", // HARUS whatsapp
                        universitasSekolah: "N/A", // HARUS universitasSekolah
                        jurusan: "N/A", // HARUS jurusan
                        posisiMagang: "Newsletter Subscriber", // HARUS posisiMagang
                        linkPortfolio: "N/A", // HARUS linkPortfolio
                        // Motivasi tidak dikirim karena tidak ada di server.js Anda
                    }),
                });

                const data = await response.json();
                
                if (response.ok) {
                    console.log("✅ Pendaftaran Newsletter Berhasil:", data.message);
                    // Jika Anda menggunakan state: setNewsletterStatus('success: Berhasil!');
                    e.target.reset();
                } else {
                    console.warn("⚠️ Gagal Mendaftar:", data.error || data.message);
                    // Jika Anda menggunakan state: setNewsletterStatus(`error: ${data.error || 'Gagal mendaftar'}`);
                }
            } catch (err) {
                console.error("❌ Gagal mengirim data ke server:", err);
                // Jika Anda menggunakan state: setNewsletterStatus("error: Gagal koneksi ke server.");
            }
        }}
    >
        <InputGroup className="newsletter-input-group">
            <Form.Control
                name="email"
                type="email"
                placeholder="Masukkan email Anda"
                aria-label="Email Address"
                required
            />
            <Button type="submit" className="btn-orange">
                {/* Asumsi FaEnvelope sudah di-import */}
                <FaEnvelope size={16} /> 
            </Button>
        </InputGroup>
    </Form>
</Col>

      </Row>

      {/* === FOOTER BOTTOM BAR === */}
      <div className="footer-bottom-bar d-flex justify-content-between flex-wrap mt-4 pt-3 border-top border-secondary">
        <p className="mb-0">
          © {new Date().getFullYear()} Republikweb.net. All rights reserved.
        </p>
        <div>
          <a href="#!" className="me-3 text-white-80 text-decoration-none">Privacy Policy</a>
          <a href="#!" className="text-white-80 text-decoration-none">Terms of Service</a>
        </div>
      </div>
    </Container>
  </footer>
);


// =================================================================
// ---------------------- KOMPONEN UTAMA HOME ----------------------
// =================================================================

const Home = () => {
    // STATE DAN HOOKS
    const [scrolled, setScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    // CATATAN: State ini menggunakan KEY ID form (wa, universitas, portfolio), jadi harus di-map saat submit
    const [formData, setFormData] = useState({
        // Key state disesuaikan dengan ID form input
        nama: '', email: '', wa: '', universitas: '', jurusan: '', posisi: '', portfolio: '', motivation: '' 
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // HANDLE CHANGE DAN SUBMIT
    const handleChange = (e) => {
        const { id, value } = e.target;
        // Gunakan id elemen sebagai key state
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['nama', 'email', 'wa', 'universitas', 'jurusan', 'posisi', 'motivation', 'portfolio'];
        const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

        if (!isFormValid) {
            // Mengatur pesan error jika ada kolom kosong
            setSubmissionStatus('error: Harap lengkapi semua kolom yang wajib diisi.');
            setTimeout(() => setSubmissionStatus(null), 5000);
            return;
        }

        try {
            const response = await fetch("https://republik-web-api.onrender.com/api/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // PERBAIKAN KRITIS DI SINI:
                // Kunci yang dikirim HARUS SAMA dengan yang diekstrak di server.js!
                body: JSON.stringify({
                    // Kunci yang diekstrak di server.js (namaLengkap)
                    nama: formData.nama, 
                    
                    // Kunci yang diekstrak di server.js (emailAktif)
                    emailAktif: formData.email, 

                    // Kunci yang diekstrak di server.js (nomorWhatsApp)
                    whatsapp: formData.wa, 

                    // Kunci yang diekstrak di server.js (universitasSekolah)
                    universitasSekolah: formData.universitas, 
                    
                    // Kunci yang diekstrak di server.js (jurusan)
                    jurusan: formData.jurusan,
                    
                    // Kunci yang diekstrak di server.js (posisiMagang)
                    posisiMagang: formData.posisi,
                    
                    // Kunci yang diekstrak di server.js (linkPortfolio)
                    linkPortfolio: formData.portfolio, 
                    
                    // Motivasi: Kunci ini tidak ada di destructuring server.js Anda, jadi
                    // kita asumsikan di server.js Anda TIDAK MENYIMPANNYA. 
                    // Kita akan HAPUS motivasi dari pengiriman untuk mencegah kebingungan validasi.
                    // Jika Anda ingin menyimpannya, Anda HARUS menambahkannya di server.js dan models/User.js.
                    // motivasi: formData.motivation // DIHAPUS, fokus ke field yang ada di server.js
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                // Mengambil pesan error dari server (misalnya 'Email sudah terdaftar.')
                throw new Error(errorData.error || 'Gagal mengirim data'); 
            }

            const result = await response.json();
            console.log('Response server:', result);

            setSubmissionStatus('success');
            // Reset form setelah sukses
            setFormData({
                nama: '', email: '', wa: '', universitas: '', jurusan: '', posisi: '', portfolio: '', motivation: ''
            });

            // Scroll ke bagian atas form untuk melihat notifikasi sukses
            document.getElementById('daftar').scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (error) {
            console.error('Error saat submit:', error);
            // Menampilkan pesan error khusus dari server jika ada
            setSubmissionStatus(`error: ${error.message}`); 
        } finally {
            setTimeout(() => setSubmissionStatus(null), 5000);
        }
    };


    // DATA STATIS
    const positionsData = [
        { icon: <FaCode />, title: "Programmer", description: "Bergabunglah dengan tim development kami dan kembangkan keterampilan programming Anda menggunakan teknologi modern seperti React, Node.js, dan database management.", requirements: ["Mahasiswa/i aktif IT/Computer Science", "Memahami dasar HTML/CSS/JS", "Passion dalam coding"], linkTo: "/#daftar" },
        { icon: <FaUserFriends />, title: "Content Creator", description: "Tuangkan kreativitas Anda dalam membuat konten digital yang menarik. Anda akan belajar content planning, copywriting, dan strategi konten untuk berbagai platform digital.", requirements: ["Kreatif dan update tren digital", "Memiliki kemampuan menulis yang baik", "Familiar dengan social media platforms"], linkTo: "/#daftar" },
        { icon: <FaVideo />, title: "Video Editor", description: "Wujudkan ide kreatif menjadi video yang memukau. Anda akan belajar video editing, motion graphics, dan storytelling visual menggunakan tools professional.", requirements: ["Menguasai software editing (Adobe Premiere)", "Paham After Effects", "Memiliki passion visual storytelling"], linkTo: "/#daftar", buttonClass: 'btn-position-apply btn-orange-always' },
        { icon: <FaChartLine />, title: "Digital Marketing", description: "Pelajari strategi marketing di era digital. Anda akan belajar social media marketing, ads management, analytics, dan campaign strategy untuk meningkatkan brand awareness.", requirements: ["Tertarik dengan digital marketing", "Memahami dasar social media management", "Analytical thinking dan data-driven"], linkTo: "/#daftar", buttonClass: 'btn-position-apply btn-orange-always' },
        { icon: <FaSearch />, title: "SEO Specialist", description: "Kuasai seni optimasi mesin pencari. Anda akan belajar keyword research, on-page/off-page SEO, technical SEO, dan strategi untuk meningkatkan ranking website di Google.", requirements: ["Memahami dasar SEO dan cara kerja search engine", "Analytical dan detail oriented", "Familiar dengan Google Analytics/Search Console"], linkTo: "/#daftar" },
        { icon: <FaPalette />, title: "UI/UX Designer", description: "Ciptakan pengalaman digital yang user-friendly. Anda akan belajar user research, wireframing, prototyping, dan design system menggunakan tools seperti Figma.", requirements: ["Menguasai Figma atau Adobe XD", "Memahami prinsip dasar UI/UX", "Memiliki portfolio design"], linkTo: "/#daftar" },
    ];

    const testimonialData = [
        { name: "Andi Pratama", title: "Programmer Intern", quote: "Pengalaman magang di Republikweb benar-benar membuka wawasan saya tentang dunia web development. Mentornya sangat supportive dan proyeknya real-world!", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Siti Nurhaliza", title: "Content Creator Intern", quote: "Selama 3 bulan magang, saya belajar banyak tentang content strategy dan copywriting. Tim yang solid dan lingkungan kerja yang fun. Highly recommended!", imageSrc: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Budi Santoso", title: "Digital Marketing Intern", quote: "Magang di Republikweb memberikan saya pengalaman hands-on dalam mengelola campaign digital. Ilmu yang didapat sangat applicable untuk karir saya ke depan.", imageSrc: "https://randomuser.me/api/portraits/men/88.jpg" },
    ];
    const faqData = [
        { q: "Apakah program magang ini berbayar?", a: "Tidak, program magang di Republikweb 100% **GRATIS** dan tidak dipungut biaya apapun. Kami memberikan sertifikat resmi di akhir program." },
        { q: "Berapa lama durasi program magang?", a: "Durasi program adalah **3 bulan**, dengan jadwal yang fleksibel dan dapat didiskusikan untuk menyesuaikan dengan jadwal kuliah Anda." },
        { q: "Apakah bisa magang secara remote/online?", a: "Ya, program kami bersifat **remote-first (Work From Home)**. Anda dapat bergabung dari mana saja di Indonesia." },
        { q: "Apa saja yang perlu dipersiapkan?", a: "Anda perlu menyiapkan laptop/komputer pribadi, koneksi internet yang stabil, dan portfolio (jika ada)." },
        { q: "Apakah akan mendapatkan sertifikat?", a: "Ya, setelah menyelesaikan program 3 bulan, Anda akan mendapatkan **Sertifikat Magang Resmi** dari Republikweb." },
        { q: "Kapan periode pendaftaran dibuka?", a: "Pendaftaran dibuka sepanjang tahun. Kami mereview aplikasi setiap bulan untuk batch berikutnya." },
        { q: "Bagaimana proses seleksinya?", a: "Proses seleksi meliputi: (1) Pendaftaran online, (2) Review CV/Portfolio, dan (3) Wawancara Online (Zoom/Google Meet)." }
    ];
    // List posisi yang digunakan untuk dropdown form
    const positionOptions = positionsData.map(pos => pos.title);
    
    const galleryData = [
        { src: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Team Meeting", description: "Weekly team sync untuk diskusi project dan knowledge sharing" },
        { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", title: "Workspace", description: "Ruang kerja yang nyaman dan kondusif untuk produktivitas" },
        { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80", title: "Batch Success", description: "Perayaan kelulusan dan sukses batch magang" },
        { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", title: "Brainstorming", description: "Diskusi kelompok untuk ide-ide kreatif" },
    ];


    // UTILITY & EFFECT
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // =================================================================
    // ---------------------------- RENDER -----------------------------
    // =================================================================

    return (
        <div className="page-wrapper">

            {/* 0. NAVIGASI */}
            <Navbar expand="lg" fixed="top" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
                <Container>
                    <Navbar.Brand as={HashLink} to="/#home" scroll={scrollWithOffset} className="fw-bold">
                        <FaRocket className="text-secondary-color me-2"/> Republikweb
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/#tentang" scroll={scrollWithOffset}>Tentang</Nav.Link>
                            <Nav.Link as={HashLink} to="/#posisi" scroll={scrollWithOffset}>Posisi</Nav.Link>
                            <Nav.Link as={HashLink} to="/#galeri" scroll={scrollWithOffset}>Galeri</Nav.Link>
                            <Nav.Link as={HashLink} to="/#testimoni" scroll={scrollWithOffset}>Testimoni</Nav.Link>
                            <Nav.Link as={HashLink} to="/#faq" scroll={scrollWithOffset}>FAQ</Nav.Link>
                            {/* Tambahkan Navigasi ke Peta Lokasi */}
                            <Nav.Link as={HashLink} to="/#lokasi" scroll={scrollWithOffset}>Peta Lokasi</Nav.Link>
                            {/* Ganti #kontak ke #kontak-footer (ID baru di footer) atau langsung ke Daftar */}
                            <Nav.Link as={HashLink} to="/#kontak-footer" scroll={scrollWithOffset}>Kontak</Nav.Link>
                            <Button as={HashLink} to="/#daftar" scroll={scrollWithOffset} className="btn-orange ms-lg-3">
                                Daftar Sekarang
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* 1. HERO SECTION */}
            <section className="hero-bg" id="home">
                <Container className="text-center py-5 position-relative z-1">
                    <FaRocket className="hero-icon mb-4 fade-in-up" size={50} />

                    <h1 className="display-3 fw-bold text-glow fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Bangun Karier Digitalmu <br/>
                        <span className="text-secondary-color">Bersama Republikweb!</span>
                    </h1>
                    <p className="lead mt-4 mb-5 mx-auto text-white-70 fade-in-up" style={{ animationDelay: '0.2s', maxWidth: '700px' }}>
                        Bergabunglah dengan program magang terbaik untuk mahasiswa dan fresh graduate. Kembangkan skill digital Anda bersama tim profesional dalam proyek nyata.
                    </p>

                    <Button as={HashLink} to="/#daftar" scroll={scrollWithOffset} className="btn-orange btn-lg fw-bold shadow-lg fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Daftar Sekarang <FaRocket className="ms-2" size={16}/>
                    </Button>

                    <Row className="mt-5 pt-5 text-center hero-stats fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Col><h3 className="fw-bold">3 Bulan</h3><p className='text-white-70'>Durasi Program</p></Col>
                        <Col><h3 className="fw-bold">6+</h3><p className='text-white-70'>Posisi Tersedia</p></Col>
                        <Col><h3 className="fw-bold">100%</h3><p className='text-white-70'>Gratis & Bersertifikat</p></Col>
                    </Row>
                </Container>
                <div className='hero-wave-bottom'></div>
            </section>

            {/* 2. TENTANG PROGRAM MAGANG & MANFAAT */}
            <section className="section-gray" id="tentang">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Tentang Program Magang</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Program magang 3 bulan yang dirancang khusus untuk mengembangkan skill digital Anda dengan pengalaman kerja nyata di industri teknologi
                        </p>
                    </div>
                    {/* Feature Cards */}
                    <Row className="mt-5">
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaTrophy/>} title="Sertifikat Resmi" text="Dapatkan sertifikat magang yang diakui industri"/>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaUserTie/>} title="Mentoring Langsung" text="Bimbingan dari praktisi digital berpengalaman"/>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaLaptopCode/>} title="Proyek Real" text="Terlibat langsung dalam project client nyata"/>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <FeatureCard icon={<FaCalendarAlt/>} title="Fleksibel" text="Jadwal yang dapat disesuaikan dengan kuliah"/>
                        </Col>
                    </Row>

                    {/* Syarat & Manfaat (Blue Section) */}
                    <Row className="mt-5 pt-4 justify-content-center">
                        <Col lg={10}>
                            <div className="syarat-manfaat-row shadow-lg fade-in-up">
                                <div className="syarat-col">
                                    <h4 className="fw-bold text-white mb-4">Syarat Umum</h4>
                                    <ul className="list-unstyled syarat-list">
                                        <li><FaCheck className="check-icon-orange" /> Mahasiswa aktif atau fresh graduate (max 1 1 tahun lulus)</li>
                                        <li><FaCheck className="check-icon-orange" /> Dapat berkomunikasi dengan baik dalam tim</li>
                                        <li><FaCheck className="check-icon-orange" /> Memiliki laptop/komputer pribadi</li>
                                        <li><FaCheck className="check-icon-orange" /> Berkomitmen untuk program 3 bulan penuh</li>
                                        <li><FaCheck className="check-icon-orange" /> Memiliki passion dan motivasi tinggi untuk belajar</li>
                                    </ul>
                                </div>
                                <div className="manfaat-col">
                                    <h4 className="fw-bold text-white mb-4">Yang Akan Kamu Dapatkan</h4>
                                    <ul className="list-unstyled manfaat-list">
                                        <li><FaStar className="star-icon-orange" /> Pengalaman kerja di agensi digital profesional</li>
                                        <li><FaStar className="star-icon-orange" /> Portfolio project nyata untuk career development</li>
                                        <li><FaStar className="star-icon-orange" /> Networking dengan profesional industri</li>
                                        <li><FaStar className="star-icon-orange" /> Sertifikat magang resmi dari Republikweb</li>
                                        <li><FaStar className="star-icon-orange" /> Peluang karir setelah program berakhir</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 3. POSISI YANG TERSEDIA */}
            <section className="section-light" id="posisi">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Posisi Magang yang Tersedia</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Temukan posisi yang sesuai dengan minat dan passion Anda di dunia digital
                        </p>
                    </div>
                    <Row className="mt-5">
                        {positionsData.map((pos, index) => (
                            <Col lg={4} md={6} className="mb-4" key={index}>
                                <PositionCard icon={pos.icon} {...pos} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

           {/* 4. GALERI KEGIATAN */}
<section className="section-gray" id="galeri">
  <Container className="text-center">
    <h2 className="fw-bold text-primary-dark fade-in-up">Galeri Kegiatan</h2>
    <p className="section-lead text-center fade-in-up">
      Lihat keseruan dan pengalaman peserta magang kami dalam berbagai kegiatan
    </p>

    {/* KUNCI: Gunakan DIV container tunggal dengan kelas CSS Grid */}
    <div className="gallery-grid mt-4"> 
      
      {/* Item 1: Gambar Besar (Gunakan kelas .gallery-item-lg) */}
      {/* Kelas .gallery-item-lg ini yang mengaktifkan 'grid-row: span 3' di CSS */}
      <div className="gallery-item-lg"> 
        <div
          className="gallery-image-wrapper"
          style={{ backgroundImage: `url(${galleryData[0].src})` }}
        >
          <div className="gallery-overlay">
            <p>{galleryData[0].title}</p>
            <span>{galleryData[0].description}</span>
          </div>
        </div>
      </div>

      {/* Item 2, 3, dan 4: Gambar Kecil (Tanpa kelas tambahan) */}
      {/* Item-item ini otomatis mengisi kolom kanan secara vertikal */}
      <div> 
        <div
          className="gallery-image-wrapper"
          style={{ backgroundImage: `url(${galleryData[1].src})` }}
        >
          <div className="gallery-overlay">
            <p>{galleryData[1].title}</p>
            <span>{galleryData[1].description}</span>
          </div>
        </div>
      </div>

      <div>
        <div
          className="gallery-image-wrapper"
          style={{ backgroundImage: `url(${galleryData[2].src})` }}
        >
          <div className="gallery-overlay">
            <p>{galleryData[2].title}</p>
            <span>{galleryData[2].description}</span>
          </div>
        </div>
      </div>

      <div>
        <div
          className="gallery-image-wrapper"
          style={{ backgroundImage: `url(${galleryData[3].src})` }}
        >
          <div className="gallery-overlay">
            <p>{galleryData[3].title}</p>
            <span>{galleryData[3].description}</span>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>


            {/* 5. KATA MEREKA / TESTIMONI */}
            <section className="section-light" id="testimoni">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Kata Mereka</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Dengar pengalaman langsung dari alumni program magang Republikweb
                        </p>
                    </div>
                    <Row className="mt-5 justify-content-center">
                        {testimonialData.map((data, index) => (
                            <Col md={4} className="mb-4" key={index}>
                                <TestimonialItem {...data} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* 6. FAQ (Pertanyaan Sering Diajukan) */}
            <section className="section-gray" id="faq">
                <Container>
                    <div className="text-center fade-in-up mb-5">
                        <FaRegQuestionCircle size={50} className="text-secondary-color mb-3"/>
                        <h2 className="fw-bold mb-3 text-primary-dark">Pertanyaan yang Sering Diajukan</h2>
                        <div className="section-lead">
                            <p>
                                Temukan jawaban untuk pertanyaan umum seputar program magang kami
                            </p>
                        </div>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Accordion flush className="fade-in-up">
                                {faqData.map((faq, index) => (
                                    <FaqItem 
                                        key={index}
                                        eventKey={String(index)}
                                        question={faq.q}
                                        answer={faq.a}
                                    />
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 7. PETA LOKASI BARU */}
            <section className="section-light" id="lokasi">
                <Container>
                    <h2 className="text-center fw-bold text-primary-dark fade-in-up">Peta Lokasi Kami</h2>
                    <div className="section-lead text-center fade-in-up">
                        <p>
                            Kunjungi kantor pusat kami di Yogyakarta.
                        </p>
                    </div>
                    {/* Map Placeholder dengan iframe Google Maps */}
                    <div className="mt-5 shadow-lg border rounded-3 overflow-hidden fade-in-up">
                        <iframe
                            title="Lokasi Republikweb"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0768409139686!2d110.3644059!3d-7.7940251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787e951590f%3A0x600c3b018b1d985a!2sYogyakarta%2C%20DIY!5e0!3m2!1sen!2sid!4v1678893994356!5m2!1sen!2sid" 
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Container>
            </section>
            
            {/* 8. DAFTAR SEKARANG */}
            <section className="section-blue-wave" id="daftar">
                <Container>
                    <div className="text-center text-white fade-in-up mb-5">
                        <FaUserCheck size={50} className="text-secondary-color mb-3"/>
                        <h2 className="fw-bold mb-3">Daftar Magang Sekarang</h2>
                        <div className="section-lead">
                            <p className='text-white-70'>
                                Isi formulir di bawah ini untuk memulai perjalanan karir digital Anda.
                            </p>
                        </div>
                    </div>

                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Card className="shadow-lg border-0 fade-in-up">
                                <Card.Body className="p-4 p-md-5">
                                    {submissionStatus === 'success' && (
                                        <Alert variant="success" className="mb-4 fw-bold">
                                            ✅ Aplikasi Berhasil Dikirim! Kami akan segera mereview data Anda.
                                        </Alert>
                                    )}
                                    {submissionStatus && submissionStatus.startsWith('error') && (
                                        <Alert variant="danger" className="mb-4 fw-bold">
                                            ❌ Gagal Mengirim Aplikasi. Pastikan semua kolom wajib diisi dengan benar. {submissionStatus.includes(':') ? submissionStatus.split(': ')[1] : ''}
                                        </Alert>
                                    )}
                                    <Form onSubmit={handleSubmit}>
                                        <h5 className="fw-bold mb-4 text-primary-dark">Informasi Pribadi</h5>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold">Nama Lengkap <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" id="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama Anda" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold">Email Aktif <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="email" id="email" value={formData.email} onChange={handleChange} placeholder="contoh@mail.com" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold">Nomor WhatsApp <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="tel" id="wa" value={formData.wa} onChange={handleChange} placeholder="Cth: 62812xxxxxx" required />
                                                    <Form.Text className="text-muted small">
                                                        Gunakan format internasional (cth: 628...).
                                                    </Form.Text>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-semibold">Universitas/Sekolah <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control type="text" id="universitas" value={formData.universitas} onChange={handleChange} placeholder="Cth: UGM / SMK Telkom" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        
                                        <h5 className="fw-bold mt-4 mb-4 text-primary-dark">Detail Aplikasi</h5>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">Jurusan <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" id="jurusan" value={formData.jurusan} onChange={handleChange} placeholder="Cth: Teknik Informatika / Multimedia" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">Pilih Posisi Magang <span className="text-danger">*</span></Form.Label>
                                            <Form.Select id="posisi" value={formData.posisi} onChange={handleChange} required>
                                                <option value="" disabled>Pilih salah satu posisi</option>
                                                {positionOptions.map(pos => (
                                                    <option key={pos} value={pos}>{pos}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold">Link Portfolio/CV/Resume (Google Drive/Dropbox/PDF) <span className="text-danger">*</span></Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text><FaUpload/></InputGroup.Text>
                                                <Form.Control type="url" id="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="Masukkan link drive/portfolio Anda" required />
                                            </InputGroup>
                                            <Form.Text className="text-muted small">
                                                Pastikan link bisa diakses publik (izin share sudah diatur).
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-semibold">Motivasi <span className="text-danger">*</span></Form.Label>
                                            <Form.Control as="textarea" rows={4} id="motivation" value={formData.motivation} onChange={handleChange} placeholder="Ceritakan mengapa Anda tertarik bergabung dengan program magang Republikweb..." required />
                                        </Form.Group>

                                        <Button type="submit" className="btn-kirim-aplikasi w-100 btn-lg fw-bold">
                                            Kirim Aplikasi <FaPaperPlane className="ms-2" />
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 9. FOOTER BARU */}
            <FooterComponent />

            {/* Back To Top Button */}
            <button
                className={`back-to-top-btn ${showBackToTop ? 'show' : ''}`}
                onClick={scrollToTop}
            >
                <FaChevronUp size={20} />
            </button>

        </div>
    );
};

export default Home;