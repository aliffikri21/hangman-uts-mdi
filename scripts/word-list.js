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