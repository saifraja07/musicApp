// Songs are grouped by category. The player only ever exposes the
// category name in the UI — individual songs are never listed anywhere.
const playlists = {
  ghazals: [
    {
      id: 'ghazal-1',
      title: 'Woh Na Hoga To Kya Kami Hogi',
      artist: 'Chandan Dass',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/woh-na-hoga-to-kya-kami-hogi.mp3',
    },
    {
      id: 'ghazal-2',
      title: 'Kal Chaudhvin Ki Raat Thi',
      artist: 'Ghulam Ali',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/kal-chaudhvin-ki-raat-thi.mp3',
    },
    {
      id: 'ghazal-3',
      title: 'Mujhe Tum Nazar Se Gira To Rahay Ho',
      artist: 'Mehdi Hassan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/mujhe-tum-nazar-se-gira-to-rahay-ho.mp3',
    },
    {
      id: 'ghazal-4',
      title: 'Tumhare Khat Mein Naya Ek Salaam Kiska Tha',
      artist: 'Ghulam Ali',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/tumhare-khat-mein-naya-ek-salaam.mp3',
    },
    {
      id: 'ghazal-5',
      title: 'Dil Mein Ek Laher Si Uthi Hai Abhi',
      artist: 'Ghulam Ali',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/dil-mein-ek-laher-si-uthi-hai-abhi.mp3',
    },
    {
      id: 'ghazal-6',
      title: 'Yeh Dil Ye Pagal Dil Mera (Awargi)',
      artist: 'Ghulam Ali',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/yeh-dil-ye-pagal-dil-mera.mp3',
    },
  ],

  oldHindi: [
    {
      id: 'old-hindi-1',
      title: 'Barsaat Ke Mausam Mein',
      artist: 'Kumar Sanu, Roop Kumar Rathod',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/barsaat-ke-mausam-mein-naajayaz-naseeruddin-shah-kumar-sanu-roop-kumar-rathod.mp3',
    },
    {
      id: 'old-hindi-2',
      title: 'O Dil Tod Ke Hansti Ho Mera',
      artist: 'Kishan Kumar, Udit Narayan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/o-dil-tod-ke-hansti-ho-mera-remix-video-song-bewafa-sanam-kishan-kumar-udit-narayan.mp3',
    },

    {
      id: 'old-hindi-3',
      title: 'Wafa Na Raas Aayi',
      artist: 'Nitin Mukesh, Kishan Kumar',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/wafa-na-raas-aayi-remix-video-song-bewafa-sanam-nitin-mukesh-kishan-kumar.mp3',
    },
    {
      id: 'old-hindi-4',
      title: 'Chand Tare Phool',
      artist: 'Nakul Kapoor',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/chand-tare-phool-4k-video-tum-se-achcha-kaun-hai-nakul-kapoor-90-s-best-romantic-songs.mp3',
    },
    {
      id: 'old-hindi-5',
      title: 'Dil De Diya Hai',
      artist: 'Anand Raj Anand',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-de-diya-hai-lyrical-video-masti-anand-raj-anand-vivek-oberoi-amrita-ritesh-deshmukh-genila.mp3',
    },
    {
      id: 'old-hindi-6',
      title: 'Dil Kehta Hai',
      artist: 'Kumar Sanu, Alka Yagnik',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-kehta-hai-akele-hum-akele-tum-kumar-sanu-alka-yagnik-aamir-khan-90s-love-song.mp3',
    },
    {
      id: 'old-hindi-7',
      title: 'Dil Laga Liya Maine Tumse Pyaar Karke',
      artist: 'Alka Yagnik, Udit Narayan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-laga-liya-maine-tumse-pyaar-karke-dil-hai-tumhaara-preity-zinta-alka-yagnik-udit-narayan.mp3',
    },
    {
      id: 'old-hindi-8',
      title: 'Dil Ne Yeh Kaha Hai Dil Se',
      artist: 'Kumar Sanu, Alka Yagnik, Udit Narayan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-ne-yeh-kaha-hain-dil-se-hd-video-song-akshay-suniel-shilpa-dhadkan-hindiromanticsong.mp3',
    },
    {
      id: 'old-hindi-9',
      title: 'Main Agar Saamne',
      artist: 'Abhijeet, Alka Yagnik',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/main-agar-saamne-raaz-dino-morea-bipasha-basu-abhijeet-alka-yagnik-hindi-hit-songs.mp3',
    },
    {
      id: 'old-hindi-10',
      title: 'Main Duniya Bhula Doonga',
      artist: 'Kumar Sanu',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/main-duniya-bhula-doonga-lyrical-video-song-aashiqui-kumar-sanu-rahul-roy-anu-agarwal.mp3',
    },
    {
      id: 'old-hindi-11',
      title: 'Meri Tarah Tum Bhi',
      artist: 'Alka Yagnik, Babul Supriyo',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/meri-tarah-tum-bhi-lyrical-kya-yehi-pyaar-hai-alka-yagnik-babul-suprio-ameesha-patel-aftab.mp3',
    },
    {
      id: 'old-hindi-12',
      title: 'Baazigar',
      artist: 'Asha Bhosle, Vinod Rathod',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/baazigar-shah-rukh-khan-kajol-asha-bhosle-vinod-rathod-romantic-songs.mp3',
    },
    {
      id: 'old-hindi-13',
      title: 'Oh Oh Jaane Jaana',
      artist: 'Salman Khan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/oh-oh-jane-jaana-salman-khan-full-song-pyaar-kiya-toh-darna-kya.mp3',
    },
    {
      id: 'old-hindi-14',
      title: 'Oye Raju Pyaar Na Kariyo',
      artist: 'Anand Bakshi',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/oye-raju-pyar-na-kariyo-lyrical-video-hadh-kar-di-aapne-anand-bakshi-anand-raj-anand-govinda-rani-m.mp3',
    },
    {
      id: 'old-hindi-15',
      title: 'Panchhi Sur Mein Gaate Hain',
      artist: 'Udit Narayan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/panchhi-soor-main-gaate-hain-lyrical-video-sirf-tum-udit-narayan-sanjay-kapoor-priya-gill.mp3',
    },
    {
      id: 'old-hindi-16',
      title: 'Zaroori Tha',
      artist: 'Rahat Fateh Ali Khan',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/rahat-fateh-ali-khan-zaroori-tha.mp3',
    },
    {
      id: 'old-hindi-17',
      title: 'Sab Kuchh Bhula Diya',
      artist: 'Sonu Nigam, Sapna Awasthi',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/sab-kuchh-bhula-diya-lyrical-video-hum-tumhare-hain-sanam-sonu-n-sapna-a-shahrukh-khan-madhuri-d.mp3',
    },
    {
      id: 'old-hindi-18',
      title: 'Dard Dilo Ke',
      artist: 'Himesh Reshammiya, Yo Yo Honey Singh',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/the-xpose-dard-dilo-ke-full-song-with-lyrics-himesh-reshammiya-yo-yo-honey-singh.mp3',
    },
    {
      id: 'old-hindi-19',
      title: 'Tu Pyar Hai Kisi Aur Ka',
      artist: 'Anuradha Paudwal, Kumar Sanu',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/tu-pyar-hai-kisi-aur-ka-full-song-aamir-k-pooja-b-anuradha-p-kumar-sanu-dil-hai-ke-manta-nahin.mp3',
    },
    {
      id: 'old-hindi-20',
      title: 'Aisa Deewana',
      artist: 'Sonu Nigam',
      audio:
        'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/aisa-deewana-lyrical-video-song-dil-maange-more-sonu-nigam-himesh-r-shahid-kapoor-tulip-joshi.mp3',
    },
  ],
}

export default playlists