// const wordList = [
//   {
//       word: "guitar",
//       hint: "A musical instrument with strings."
//   },
//   {
//       word: "oxygen",
//       hint: "A colorless, odorless gas essential for life."
//   },
//   {
//       word: "mountain",
//       hint: "A large natural elevation of the Earth's surface."
//   },
//   {
//       word: "painting",
//       hint: "An art form using colors on a surface to create images or expression."
//   },
//   {
//       word: "astronomy",
//       hint: "The scientific study of celestial objects and phenomena."
//   },
//   {
//       word: "football",
//       hint: "A popular sport played with a spherical ball."
//   },
//   {
//       word: "chocolate",
//       hint: "A sweet treat made from cocoa beans."
//   },
//   {
//       word: "butterfly",
//       hint: "An insect with colorful wings and a slender body."
//   },
//   {
//       word: "history",
//       hint: "The study of past events and human civilization."
//   },
//   {
//       word: "pizza",
//       hint: "A savory dish consisting of a round, flattened base with toppings."
//   },
//   {
//       word: "jazz",
//       hint: "A genre of music characterized by improvisation and syncopation."
//   },
//   {
//       word: "camera",
//       hint: "A device used to capture and record images or videos."
//   },
//   {
//       word: "diamond",
//       hint: "A precious gemstone known for its brilliance and hardness."
//   },
//   {
//       word: "adventure",
//       hint: "An exciting or daring experience."
//   },
//   {
//       word: "science",
//       hint: "The systematic study of the structure and behavior of the physical and natural world."
//   },
//   {
//       word: "bicycle",
//       hint: "A human-powered vehicle with two wheels."
//   },
//   {
//       word: "sunset",
//       hint: "The daily disappearance of the sun below the horizon."
//   },
//   {
//       word: "coffee",
//       hint: "A popular caffeinated beverage made from roasted coffee beans."
//   },
//   {
//       word: "dance",
//       hint: "A rhythmic movement of the body often performed to music."
//   },
//   {
//       word: "galaxy",
//       hint: "A vast system of stars, gas, and dust held together by gravity."
//   },
//   {
//       word: "orchestra",
//       hint: "A large ensemble of musicians playing various instruments."
//   },
//   {
//       word: "volcano",
//       hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
//   },
//   {
//       word: "novel",
//       hint: "A long work of fiction, typically with a complex plot and characters."
//   },
//   {
//       word: "sculpture",
//       hint: "A three-dimensional art form created by shaping or combining materials."
//   },
//   {
//       word: "symphony",
//       hint: "A long musical composition for a full orchestra, typically in multiple movements."
//   },
//   {
//       word: "architecture",
//       hint: "The art and science of designing and constructing buildings."
//   },
//   {
//       word: "ballet",
//       hint: "A classical dance form characterized by precise and graceful movements."
//   },
//   {
//       word: "astronaut",
//       hint: "A person trained to travel and work in space."
//   },
//   {
//       word: "waterfall",
//       hint: "A cascade of water falling from a height."
//   },
//   {
//       word: "technology",
//       hint: "The application of scientific knowledge for practical purposes."
//   },
//   {
//       word: "rainbow",
//       hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
//   },
//   {
//       word: "universe",
//       hint: "All existing matter, space, and time as a whole."
//   },
//   {
//       word: "piano",
//       hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
//   },
//   {
//       word: "vacation",
//       hint: "A period of time devoted to pleasure, rest, or relaxation."
//   },
//   {
//       word: "rainforest",
//       hint: "A dense forest characterized by high rainfall and biodiversity."
//   },
//   {
//       word: "theater",
//       hint: "A building or outdoor area in which plays, movies, or other performances are staged."
//   },
//   {
//       word: "telephone",
//       hint: "A device used to transmit sound over long distances."
//   },
//   {
//       word: "language",
//       hint: "A system of communication consisting of words, gestures, and syntax."
//   },
//   {
//       word: "desert",
//       hint: "A barren or arid land with little or no precipitation."
//   },
//   {
//       word: "sunflower",
//       hint: "A tall plant with a large yellow flower head."
//   },
//   {
//       word: "fantasy",
//       hint: "A genre of imaginative fiction involving magic and supernatural elements."
//   },
//   {
//       word: "telescope",
//       hint: "An optical instrument used to view distant objects in space."
//   },
//   {
//       word: "breeze",
//       hint: "A gentle wind."
//   },
//   {
//       word: "oasis",
//       hint: "A fertile spot in a desert where water is found."
//   },
//   {
//       word: "photography",
//       hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
//   },
//   {
//       word: "safari",
//       hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
//   },
//   {
//       word: "planet",
//       hint: "A celestial body that orbits a star and does not produce light of its own."
//   },
//   {
//       word: "river",
//       hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
//   },
//   {
//       word: "tropical",
//       hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
//   },
//   {
//       word: "mysterious",
//       hint: "Difficult or impossible to understand, explain, or identify."
//   },
//   {
//       word: "enigma",
//       hint: "Something that is mysterious, puzzling, or difficult to understand."
//   },
//   {
//       word: "paradox",
//       hint: "A statement or situation that contradicts itself or defies intuition."
//   },
//   {
//       word: "puzzle",
//       hint: "A game, toy, or problem designed to test ingenuity or knowledge."
//   },
//   {
//       word: "whisper",
//       hint: "To speak very softly or quietly, often in a secretive manner."
//   },
//   {
//       word: "shadow",
//       hint: "A dark area or shape produced by an object blocking the light."
//   },
//   {
//       word: "secret",
//       hint: "Something kept hidden or unknown to others."
//   },
//   {
//       word: "curiosity",
//       hint: "A strong desire to know or learn something."
//   },
//   {
//       word: "unpredictable",
//       hint: "Not able to be foreseen or known beforehand; uncertain."
//   },
//   {
//       word: "obfuscate",
//       hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
//   },
//   {
//       word: "unveil",
//       hint: "To make known or reveal something previously secret or unknown."
//   },
//   {
//       word: "illusion",
//       hint: "A false perception or belief; a deceptive appearance or impression."
//   },
//   {
//       word: "moonlight",
//       hint: "The light from the moon."
//   },
//   {
//       word: "vibrant",
//       hint: "Full of energy, brightness, and life."
//   },
//   {
//       word: "nostalgia",
//       hint: "A sentimental longing or wistful affection for the past."
//   },
//   {
//       word: "brilliant",
//       hint: "Exceptionally clever, talented, or impressive."
//   },
// ];


const wordList = [
    {
        word: "piksel",
        hint: "Elemen terkecil dalam gambar digital."
    },
    {
        word: "resolusi",
        hint: "Tingkat ketajaman atau detail gambar."
    },
    {
        word: "path",
        hint: "Jarak antar huruf dalam teks."
    },
    {
        word: "bitmap",
        hint: "Gambar berbasis piksel."
    },
    {
        word: "frame",
        hint: "Satu gambar dalam urutan animasi atau video."
    },
    {
        word: "render",
        hint: "Proses akhir untuk menghasilkan gambar dari model."
    },
    {
        word: "audio",
        hint: "Elemen suara dalam multimedia."
    },
    {
        word: "video",
        hint: "Gambar bergerak yang bisa disertai suara."
    },
    {
        word: "warna",
        hint: "Elemen visual penting dalam desain grafis."
    },
    {
        word: "framekey",
        hint: "Penanda perubahan dalam animasi."
    },
    {
        word: "timeline",
        hint: "Tempat mengatur urutan animasi dan audio."
    },
    {
        word: "layer",
        hint: "Lapisan dalam software desain untuk mengatur objek."
    },
    {
        word: "transisi",
        hint: "Efek perpindahan antar slide atau scene."
    },
    {
        word: "rendering",
        hint: "Proses menghasilkan gambar akhir dari model 3D."
    },
    {
        word: "bitrate",
        hint: "Jumlah data audio atau video yang diproses per detik."
    },
    {
        word: "cutting",
        hint: "Teknik menghapus bagian video/audio yang tidak diperlukan."
    },
    {
        word: "kompresi",
        hint: "Mengurangi ukuran file multimedia."
    },
    {
        word: "format",
        hint: "Jenis file seperti JPG, PNG, MP4, dll."
    },
    {
        word: "interaktif",
        hint: "Ciri multimedia yang memungkinkan pengguna berinteraksi."
    },
    {
        word: "editing",
        hint: "Proses mengolah dan memotong video atau audio."
    },
    {
        word: "grafik",
        hint: "Gambar atau ilustrasi untuk mendukung informasi."
    },
    {
        word: "layering",
        hint: "Teknik menumpuk elemen dalam desain."
    },
    {
        word: "tracing",
        hint: "Menjiplak gambar menjadi vektor."
    },
    {
        word: "filter",
        hint: "Efek untuk mengubah tampilan gambar."
    },
    {
        word: "masking",
        hint: "Teknik menyembunyikan sebagian gambar."
    },
    {
        word: "keying",
        hint: "Teknik menghapus latar belakang dengan warna tertentu, seperti greenscreen."
    },
    {
        word: "storyline",
        hint: "Alur cerita dalam pembuatan video."
    },
    {
        word: "komposisi",
        hint: "Pengaturan elemen visual dalam desain."
    },
    {
        word: "gradasi",
        hint: "Perubahan warna secara bertahap."
    },
    {
        word: "poster",
        hint: "Desain visual untuk promosi atau informasi."
    },
    {
        word: "narration",
        hint: "Pengisahan atau suara pencerita dalam video."
    },
    {
        word: "ikon",
        hint: "Gambar kecil yang mewakili fungsi atau objek."
    },
    {
        word: "cutscene",
        hint: "Cuplikan video dalam sebuah game."
    },
    {
        word: "visualisasi",
        hint: "Proses membuat data atau konsep menjadi gambar."
    },
    {
        word: "multitrack",
        hint: "Menggabungkan beberapa jalur audio atau video."
    },
    {
        word: "subtitle",
        hint: "Teks terjemahan yang muncul dalam video."
    },
    {
        word: "thumbnail",
        hint: "Gambar kecil yang mewakili video atau konten."
    },
    {
        word: "formatting",
        hint: "Mengatur tampilan teks atau gambar."
    },
    {
        word: "vectorize",
        hint: "Mengubah gambar raster menjadi vektor."
    },
    {
        word: "layout",
        hint: "Penataan elemen desain di dalam media."
    },
    {
        word: "publikasi",
        hint: "Tahap penyebaran hasil karya multimedia."
    },
    {
        word: "pixelate",
        hint: "Efek yang membuat gambar terlihat berbentuk kotak-kotak."
    },
    {
        word: "opacity",
        hint: "Tingkat transparansi suatu objek."
    },
    {
        word: "contrast",
        hint: "Perbedaan terang gelap dalam sebuah gambar."
    },
    {
        word: "saturation",
        hint: "Kejenuhan warna dalam gambar."
    },
    {
        word: "looping",
        hint: "Pemutaran berulang pada audio atau video."
    },
    {
        word: "morphing",
        hint: "Efek transisi dari satu gambar ke gambar lain."
    },
    {
        word: "cropping",
        hint: "Memotong bagian gambar yang tidak diperlukan."
    },
    {
        word: "brush",
        hint: "Alat untuk menggambar atau mewarnai di software desain."
    },
    {
        word: "cutaway",
        hint: "Pengambilan gambar tambahan untuk mendukung adegan utama."
    },
    {
        word: "timeline",
        hint: "Tempat menyusun urutan animasi atau video."
    },
    {
        word: "transisi",
        hint: "Efek perpindahan antar adegan."
    },
    {
        word: "filtering",
        hint: "Proses menambahkan efek pada gambar."
    },
    {
        word: "sampling",
        hint: "Mengambil potongan suara untuk digunakan ulang."
    },
    {
        word: "watermark",
        hint: "Tanda atau logo transparan pada gambar/video."
    },
    {
        word: "palette",
        hint: "Kumpulan warna yang digunakan dalam desain."
    },
    {
        word: "export",
        hint: "Menyimpan file ke format akhir."
    },
    {
        word: "import",
        hint: "Membuka file dari luar ke dalam software."
    },
    {
        word: "framerate",
        hint: "Jumlah frame per detik dalam video."
    },
    {
        word: "tipografi",
        hint: "Seni dan teknik mengatur huruf dalam desain."
    },
    {
        word: "animasi",
        hint: "Teknik membuat gambar terlihat bergerak."
    },
    {
        word: "resolusi",
        hint: "Jumlah piksel dalam dimensi gambar atau layar."
    },
    {
        word: "frame",
        hint: "Satu gambar diam dalam rangkaian animasi."
    },
    {
        word: "vektor",
        hint: "Gambar berbasis garis dan kurva matematika."
    },
    {
        word: "interface",
        hint: "Tampilan antarmuka pengguna dalam aplikasi."
    },
  ];