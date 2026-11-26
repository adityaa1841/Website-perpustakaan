// Data Playlist Resmi untuk setiap materi pembelajaran
const PLAYLISTS = {
  html: {
    title: "Playlist Pembelajaran HTML dari Nol",
    desc: "Playlist resmi pembelajaran HTML dari dasar untuk pemula: mempelajari struktur dokumen, tag teks, link, gambar, list, hingga form.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLHTzjxcClbn4",
    playlistEmbed: "https://www.youtube.com/embed/videoseries?list=PLHTzjxcClbn4",
    syllabusTitle: "Silabus Pembelajaran HTML dari Nol",
    syllabus: [
      "1. Pengenalan HTML & Struktur Dokumen Dasar",
      "2. Format Teks: Heading, Paragraf & Penekanan",
      "3. Tautan Hyperlink (a) & Menyisipkan Gambar (img)",
      "4. List Terurut (ol) & Tidak Terurut (ul)",
      "5. Formulir Pendaftaran, Input & Tombol",
      "6. Semantic Layout HTML5 (header, nav, main, footer)"
    ],
    codeLang: "CONTOH KODE HTML5 DASAR",
    snippet: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>Belajar HTML dari Nol</title>
</head>
<body>
  <h1>Selamat Datang di Perpustakaan The Ocelot</h1>
  <p>HTML adalah fondasi pembuatan struktur halaman web.</p>
  <a href="https://www.youtube.com/playlist?list=PLHTzjxcClbn4" target="_blank">Tonton Playlist Lengkap</a>
</body>
</html>`,
    episodes: [
      { title: "HTML Dasar 01 - Pengenalan & Tag Dasar", videoId: "UB1O30fR-EE", duration: "25 Menit" },
      { title: "HTML Dasar 02 - Paragraf, Heading & Format Teks", videoId: "NBZ9Ro6UKV8", duration: "18 Menit" },
      { title: "HTML Dasar 03 - Hyperlink & Gambar", videoId: "Q33KBiDriJY", duration: "20 Menit" },
      { title: "HTML Dasar 04 - List & Tabel Sederhana", videoId: "N6d3B9_o3pE", duration: "22 Menit" },
      { title: "HTML Dasar 05 - Form & Elemen Input", videoId: "fNcJuPIZ2WE", duration: "30 Menit" },
      { title: "HTML Dasar 06 - Layout Semantik HTML5", videoId: "k_X4_w_XwYk", duration: "25 Menit" }
    ]
  },
  css: {
    title: "Playlist Pembelajaran CSS Lengkap & Responsive",
    desc: "Playlist belajar CSS untuk menata gaya visual web: styling warna, font, flexbox, grid, dan tampilan adaptif ponsel.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLFIM0718LjIUu4urBxqkkuDC44QS4V2EG",
    playlistEmbed: "https://www.youtube.com/embed/videoseries?list=PLFIM0718LjIUu4urBxqkkuDC44QS4V2EG",
    syllabusTitle: "Silabus Pembelajaran CSS",
    syllabus: [
      "1. Sintaks CSS, Selector, Class dan ID",
      "2. Box Model (Margin, Border, Padding)",
      "3. Tata Letak Fleksibel dengan CSS Flexbox",
      "4. Tata Letak 2-Dimensi dengan CSS Grid",
      "5. Responsive Web Design & Media Queries",
      "6. Efek Transisi dan Animasi Modern"
    ],
    codeLang: "CONTOH KODE CSS3 MODERN",
    snippet: `/* Desain kartu estetik */
.card-belajar {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(14, 48, 132, 0.1);
  transition: transform 0.2s ease;
}
.card-belajar:hover {
  transform: translateY(-4px);
}`,
    episodes: [
      { title: "CSS Dasar 01 - Pengenalan Sintaks & Warna", videoId: "yfoY53QXEnI", duration: "30 Menit" },
      { title: "CSS Dasar 02 - Box Model & Margin Padding", videoId: "rIO5326FgPE", duration: "22 Menit" },
      { title: "CSS Dasar 03 - Menguasai CSS Flexbox", videoId: "fYq5PXgSsbE", duration: "45 Menit" },
      { title: "CSS Dasar 04 - CSS Grid Layout", videoId: "jV8B24rSN5o", duration: "40 Menit" },
      { title: "CSS Dasar 05 - Media Queries Responsive", videoId: "srvUrASNj0s", duration: "35 Menit" }
    ]
  },
  js: {
    title: "Playlist Pembelajaran JavaScript (JS) Modern",
    desc: "Playlist belajar logika JavaScript, manipulasi elemen HTML lewat DOM, event click, hingga komunikasi Fetch API.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-",
    playlistEmbed: "https://www.youtube.com/embed/videoseries?list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-",
    syllabusTitle: "Silabus Pembelajaran JavaScript",
    syllabus: [
      "1. Variabel (let, const), Tipe Data & Operator",
      "2. Percabangan Kondisi (if/else) & Perulangan",
      "3. Function Dasar & Modern Arrow Function",
      "4. DOM Manipulation & Event Listener",
      "5. Metode Array (map, filter, reduce)",
      "6. Asynchronous JS: Fetch API & Async / Await"
    ],
    codeLang: "CONTOH KODE JAVASCRIPT (ES6+)",
    snippet: `// Interaktivitas web sederhana
const tombol = document.querySelector('.btn-belajar');
tombol.addEventListener('click', () => {
  console.log('Semangat belajar JavaScript!');
  alert('Selamat datang di playlist JavaScript!');
});`,
    episodes: [
      { title: "JS Dasar 01 - Pengenalan JavaScript & Logika", videoId: "PkZNo7MFNFg", duration: "35 Menit" },
      { title: "JS Dasar 02 - Variabel, Tipe Data & Operator", videoId: "W6NZfCO5SIk", duration: "28 Menit" },
      { title: "JS Dasar 03 - Manipulasi DOM & Event Klik", videoId: "5fb2aPlgoys", duration: "40 Menit" },
      { title: "JS Dasar 04 - Array & Object Methods", videoId: "R8rmfD9Y5-c", duration: "30 Menit" },
      { title: "JS Dasar 05 - Fetch API & Async Await", videoId: "cuEtnrL9-H0", duration: "35 Menit" }
    ]
  },
  python: {
    title: "Playlist Pembelajaran Python untuk Pemula",
    desc: "Playlist belajar bahasa pemrograman Python: sintaks ramah pemula, tipe data, automasi, dan fungsi.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb55ZGUW",
    playlistEmbed: "https://www.youtube.com/embed/videoseries?list=PLZS-MHyEIRo59lUBwU-XHH7Ymmb55ZGUW",
    syllabusTitle: "Silabus Pembelajaran Python",
    syllabus: [
      "1. Pengenalan & Instalasi Python",
      "2. Variabel, Tipe Data & Input Output",
      "3. Percabangan If-Elif-Else & Perulangan",
      "4. List, Dictionary, Tuple & Set",
      "5. Pembuatan Fungsi (def) & Modul",
      "6. Penanganan Error (Try / Except)"
    ],
    codeLang: "CONTOH KODE PYTHON DASAR",
    snippet: `# Program sambutan Python
nama = "Programmer Muda"
materi = ["HTML", "CSS", "JS", "Python"]

print(f"Halo {nama}, selamat datang di playlist belajar:")
for item in materi:
    print(f"- {item}")`,
    episodes: [
      { title: "Python Dasar 01 - Pengenalan & Setup", videoId: "rfscVS0vtbw", duration: "30 Menit" },
      { title: "Python Dasar 02 - Variabel & Operasi Aritmatika", videoId: "kqtD5dpn9C8", duration: "25 Menit" },
      { title: "Python Dasar 03 - Struktur Logika & Perulangan", videoId: "6iF8Xb7Z3wQ", duration: "35 Menit" },
      { title: "Python Dasar 04 - List & Dictionary", videoId: "daefaLgNkw0", duration: "30 Menit" }
    ]
  },
  mysql: {
    title: "Playlist Pembelajaran MySQL & Basis Data",
    desc: "Playlist belajar database relasional (RDBMS): perancangan tabel, query SQL, dan relasi data.",
    playlistUrl: "https://www.youtube.com/playlist?list=PL-CtdCApeRF_c6Hw-y9W3g_WlGZ_8qK5n",
    playlistEmbed: "https://www.youtube.com/embed/videoseries?list=PL-CtdCApeRF_c6Hw-y9W3g_WlGZ_8qK5n",
    syllabusTitle: "Silabus Pembelajaran MySQL",
    syllabus: [
      "1. Konsep Dasar Database & RDBMS",
      "2. Membuat Database & Tabel (CREATE)",
      "3. Memasukkan & Mengubah Data (INSERT / UPDATE)",
      "4. Mengambil Data dengan SELECT & WHERE",
      "5. Pengurutan & Pengelompokan Data (ORDER / GROUP BY)",
      "6. Relasi Antar Tabel dengan JOIN"
    ],
    codeLang: "CONTOH KODE QUERY SQL",
    snippet: `-- Query data buku di database
CREATE TABLE buku (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  kategori VARCHAR(50)
);

SELECT * FROM buku WHERE kategori = 'HTML';`,
    episodes: [
      { title: "MySQL Dasar 01 - Pengenalan RDBMS & Instalasi", videoId: "7S_tz1z_5bA", duration: "40 Menit" },
      { title: "MySQL Dasar 02 - Sintaks SELECT, INSERT, UPDATE", videoId: "HXV3zeRR3h4", duration: "35 Menit" },
      { title: "MySQL Dasar 03 - Relasi Tabel dengan JOIN", videoId: "2bW3Hua548s", duration: "45 Menit" }
    ]
  }
};

let activePlaylistKey = 'html';

function selectPlaylist(key) {
  if (!PLAYLISTS[key]) key = 'html';
  activePlaylistKey = key;

  // Update Nav Buttons
  document.querySelectorAll('.playlist-nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tabBtn-${key}`);
  if (activeBtn) activeBtn.classList.add('active');

  const data = PLAYLISTS[key];

  // Update Player Embed to Playlist
  const player = document.getElementById('ytPlayer');
  if (player) {
    player.src = data.playlistEmbed;
  }

  // Update Info & Link
  const titleEl = document.getElementById('activePlaylistTitle');
  if (titleEl) titleEl.textContent = data.title;
  
  const descEl = document.getElementById('activePlaylistDesc');
  if (descEl) descEl.textContent = data.desc;

  const linkEl = document.getElementById('openPlaylistLink');
  if (linkEl) linkEl.href = data.playlistUrl;

  // Update Syllabus
  const sylTitleEl = document.getElementById('syllabusTitle');
  if (sylTitleEl) sylTitleEl.textContent = data.syllabusTitle;

  const syllabusListEl = document.getElementById('syllabusList');
  if (syllabusListEl) {
    syllabusListEl.innerHTML = '';
    data.syllabus.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'syllabus-item';
      li.innerHTML = `<span class="num">${idx + 1}</span><span>${escapeHtml(item)}</span>`;
      syllabusListEl.appendChild(li);
    });
  }

  // Update Code
  const codeLangEl = document.getElementById('codeLangName');
  if (codeLangEl) codeLangEl.textContent = data.codeLang;

  const codeSnippetEl = document.getElementById('codeSnippet');
  if (codeSnippetEl) codeSnippetEl.textContent = data.snippet;

  // Render Episodes
  renderEpisodes(data.episodes);
}

function renderEpisodes(episodes) {
  const container = document.getElementById('episodeListContainer');
  if (!container) return;
  container.innerHTML = '';

  const badgeEl = document.getElementById('videoCountBadge');
  if (badgeEl) badgeEl.textContent = `${episodes.length} Video`;

  episodes.forEach((ep, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'episode-item' + (idx === 0 ? ' active' : '');
    itemEl.innerHTML = `
      <img class="episode-thumb" src="https://img.youtube.com/vi/${ep.videoId}/mqdefault.jpg" alt="${escapeHtml(ep.title)}" onerror="this.src='image.jpg';">
      <div class="episode-info">
        <h5 class="episode-title">${escapeHtml(ep.title)}</h5>
        <div class="episode-meta">
          <span>⏱️ ${ep.duration}</span>
          <span>Ep. ${idx + 1}</span>
        </div>
      </div>
    `;

    itemEl.addEventListener('click', () => {
      document.querySelectorAll('.episode-item').forEach(el => el.classList.remove('active'));
      itemEl.classList.add('active');
      const player = document.getElementById('ytPlayer');
      if (player) {
        player.src = `https://www.youtube.com/embed/${ep.videoId}?autoplay=1`;
        const wrap = document.getElementById('playerWrap');
        if (wrap) {
          window.scrollTo({ top: wrap.offsetTop - 90, behavior: 'smooth' });
        }
      }
    });

    container.appendChild(itemEl);
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, function(s) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[s];
  });
}

// Inisialisasi dari query parameter saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const reqTopic = urlParams.get('topic');
  if (reqTopic && PLAYLISTS[reqTopic.toLowerCase()]) {
    selectPlaylist(reqTopic.toLowerCase());
  } else {
    selectPlaylist('html');
  }
});

