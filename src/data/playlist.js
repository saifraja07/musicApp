const getArtists = (artist) =>
  artist
    .split(',')
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean)

const artistsOverlap = (artistA, artistB) => {
  if (!artistA || !artistB) return false

  const artistsA = getArtists(artistA)
  const artistsB = getArtists(artistB)

  return artistsA.some((artist) => artistsB.includes(artist))
}

const shuffleWithoutConsecutiveArtists = (songs) => {
  if (songs.length <= 1) {
    return [...songs]
  }

  const buildPlaylist = (remaining, result, previousArtist) => {
    if (remaining.length === 0) {
      return result
    }

    const candidates = remaining.filter(
      (song) =>
        !previousArtist ||
        !artistsOverlap(song.artist, previousArtist),
    )

    if (candidates.length === 0) {
      return null
    }

    // Randomize candidate order so every load
    // can produce a different valid playlist.
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

        ;[candidates[i], candidates[j]] = [
          candidates[j],
          candidates[i],
        ]
    }

    for (const candidate of candidates) {
      const nextRemaining = remaining.filter(
        (song) => song.id !== candidate.id,
      )

      const attempt = buildPlaylist(
        nextRemaining,
        [...result, candidate],
        candidate.artist,
      )

      if (attempt) {
        return attempt
      }
    }

    return null
  }

  const randomized = buildPlaylist([...songs], [], null)

  // A valid arrangement exists for the current playlists.
  // This fallback simply prevents the app from breaking
  // if future playlist changes make an arrangement impossible.
  return randomized || [...songs]
}

/* =========================================================
   GHAZALS
   ========================================================= */

const ghazals = [
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
    title: 'Dil Mein Ek Leher Si Uthi Hai Abhi',
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

  {
    id: 'ghazal-7',
    title: 'Aisa Banna Sanwarna Mubarak Tumhe',
    artist: 'Nusrat Fateh Ali Khan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/aisa-banna-sanwarna-mubarak-tumhe-nusrat-fateh-ali.mp3',
  },
  {
    id: 'ghazal-8',
    title: 'Apni Dhun Mein Rehta Hoon',
    artist: 'Ghulam Ali',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/apni-dhun-mein-rehta-hoon-ghulam-ali-.mp3',
  },
  {
    id: 'ghazal-9',
    title: 'Aye Husn-e-Beparwah',
    artist: 'Ghulam Ali',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/aye-husne-beparwah-ghulam-ali.mp3',
  },
  {
    id: 'ghazal-10',
    title: 'Chandi Jaisa Rang Hai Tera',
    artist: 'Pankaj Udhas',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/chandi-jaisa-rang-hai-tera-pankaj-udhas.mp3',
  },
  {
    id: 'ghazal-11',
    title: 'Chupke Chupke Raat Din',
    artist: 'Ghulam Ali',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/chupke-chupke-raat-din-aansoon-bahana-yaad-hai-ghulam-ali.mp3',
  },
  {
    id: 'ghazal-12',
    title: 'Duniya Kisi Ke Pyar Mein',
    artist: 'Mehdi Hassan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/duniya-kisi-ke-pyar-mein.mp3',
  },
  {
    id: 'ghazal-13',
    title: 'Hungama Hai Kyon Barpa',
    artist: 'Ghulam Ali',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/hungama-hai-kyon-barpa-shaam-e-ghazal-ghulam-ali.mp3',
  },
  {
    id: 'ghazal-14',
    title: 'Kali Kali Zulfon Ke Phande Na Dalo',
    artist: 'Nusrat Fateh Ali Khan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/kali-kali-zulfon-ke-phande-na-nusrat-fateh-ali-khan-complete-full-version.mp3',
  },
  {
    id: 'ghazal-15',
    title: 'Kisi Din Ye Tamasha Muskura Kar Hum Bhi Dekhenge',
    artist: 'Lata Mangeshkar, Shamshad Begum',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/kisi-din-ye-tamasha-muskura-kar-hum-bhi-dekhenge-lata-mangeshkar-.mp3',
  },
  {
    id: 'ghazal-16',
    title: 'Khamosh Lab Hain Jhuki Hain Palkein',
    artist: 'Mehdi Hassan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/superhit-gazal-khamosh-lab-hai-jhuki-hai-palkein-abhi-mohbbat-nai-nai-hai.mp3',
  },
  {
    id: 'ghazal-17',
    title: 'Tumhe Dillagi Bhool Jani Padegi',
    artist: 'Nusrat Fateh Ali Khan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/tumhein-dillagi-bhool-jani-paray-gi-ustad-nusrat-fateh-ali-khan.mp3',
  },
  {
    id: 'ghazal-18',
    title: 'Tune Ye Noor Jo Zulfo Mein',
    artist: 'Mehdi Hassan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/tune-ye-noor-jo-zulfo-mein.mp3',
  },
  {
    id: 'ghazal-19',
    title: 'Yeh Baatein Jhoothi Baatein Hain',
    artist: 'Ghulam Ali',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/yeh-baatein-jhoothi-baatein-hain-ghulam-ali-superhit-ghazal-song.mp3',
  },
  {
    id: 'ghazal-20',
    title: 'Yeh Dil Tum Bin Kahin Lagta Nahin',
    artist: 'Lata Mangeshkar, Mohammed Rafi',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/yeh-dil-tum-bin-kahin-lagta-nahin-mohammed-rafi-lata-mangeshkar-.mp3',
  },
  {
    id: 'ghazal-21',
    title: 'Yeh Jo Halka Halka Suroor Hai',
    artist: 'Nusrat Fateh Ali Khan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/ghazals/yeh-jo-halka-halka-suroor-hai-lyric-video-nusrat-fateh-ali-khan.mp3',
  },
]

/* =========================================================
   90s / OLD HINDI SONGS
   ========================================================= */

const oldHindi = [
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
    artist: 'Udit Narayan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/o-dil-tod-ke-hansti-ho-mera-remix-video-song-bewafa-sanam-kishan-kumar-udit-narayan.mp3',
  },
  {
    id: 'old-hindi-3',
    title: 'Wafa Na Raas Aayi',
    artist: 'Nitin Mukesh',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/wafa-na-raas-aayi-remix-video-song-bewafa-sanam-nitin-mukesh-kishan-kumar.mp3',
  },
  {
    id: 'old-hindi-4',
    title: 'Dil Laga Liya Maine Tumse Pyaar Karke',
    artist: 'Alka Yagnik, Udit Narayan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-laga-liya-maine-tumse-pyaar-karke-dil-hai-tumhaara-preity-zinta-alka-yagnik-udit-narayan.mp3',
  },
  {
    id: 'old-hindi-5',
    title: 'Aaye Ho Meri Zindagi Mein',
    artist: 'Udit Narayan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/aaye-ho-meri-zindagi-mein-udit-narayan-aamir-karisma-evergreen-love-song.mp3',
  },
  {
    id: 'old-hindi-6',
    title: 'Chaand Taare',
    artist: 'Abhijeet Bhattacharya',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/chaand-tare-hd-video-shah-rukh-khan-juhi-chawla-yes-boss-90-s-songs.mp3',
  },
  {
    id: 'old-hindi-7',
    title: 'Chunari Chunari',
    artist: 'Abhijeet Bhattacharya, Anuradha Sriram',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/chunnari-chunnari-song-lyrical-salman-khan-sushmita-sen-abhijeet-biwi-no-1-anu-malik-drlwmagmjnq-.mp3',
  },
  {
    id: 'old-hindi-8',
    title: 'Chura Ke Dil Mera',
    artist: 'Kumar Sanu, Alka Yagnik',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/chura-ke-dil-mera-4k-video-akshay-shilpa-main-khiladi-tu-anari-kumar-sanu-alka-yagnik.mp3',
  },
  {
    id: 'old-hindi-9',
    title: 'Mere Mehboob Qayamat Hogi',
    artist: 'Kishore Kumar',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/mere-mehboob-qayamat-hogi-original-mr-x-in-bombay-kishore-kumar-s-greatest-hits-old-songs.mp3',
  },
  {
    id: 'old-hindi-10',
    title: 'O Mere Dil Ke Chain',
    artist: 'Kishore Kumar',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/o-mere-dil-ke-chain-full-lyrics-video-kishore-kumar-rajesh-khanna-eternal-romantic-classic.mp3',
  },
  {
    id: 'old-hindi-11',
    title: 'Pardesi Pardesi',
    artist: 'Udit Narayan, Alka Yagnik, Sapna Awasthi',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/pardesi-pardesi-alka-yagnik-udit-narayan-aamir-khan-karisma-kapoor-90-s-evergreen-songs-g-3s45gky1q-.mp3',
  },
  {
    id: 'old-hindi-12',
    title: 'Shikwa Nahin Kisi Se',
    artist: 'Kumar Sanu',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/shikwa-nahin-kisi-se-naseeb-1997-kumar-sanu-govinda-mamta-kulkarni-popular-emotional-song.mp3',
  },
  {
    id: 'old-hindi-13',
    title: 'Taal Se Taal Mila',
    artist: 'Alka Yagnik, Udit Narayan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/taal-se-taal-lyrical-taal-aishwarya-rai-akshaye-khanna-anil-kapoor-a-r-rahman-anand-bakshi-dfghbd0hc9i-.mp3',
  },
  {
    id: 'old-hindi-14',
    title: 'Dil De Diya Hai',
    artist: 'Anand Raj Anand',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-de-diya-hai-lyrical-video-masti-anand-raj-anand-vivek-oberoi-amrita-ritesh-deshmukh-genila.mp3',
  },
  {
    id: 'old-hindi-15',
    title: 'Dil Kehta Hai',
    artist: 'Kumar Sanu, Alka Yagnik',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-kehta-hai-akele-hum-akele-tum-kumar-sanu-alka-yagnik-aamir-khan-90s-love-song.mp3',
  },
  {
    id: 'old-hindi-16',
    title: 'Chand Tare Phool',
    artist: 'Tauseef Akhtar',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/chand-tare-phool-4k-video-tum-se-achcha-kaun-hai-nakul-kapoor-90-s-best-romantic-songs.mp3',
  },
  {
    id: 'old-hindi-17',
    title: 'Dil Ne Yeh Kaha Hai Dil Se',
    artist: 'Udit Narayan, Alka Yagnik, Kumar Sanu',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/dil-ne-yeh-kaha-hain-dil-se-hd-video-song-akshay-suniel-shilpa-dhadkan-hindiromanticsong.mp3',
  },
  {
    id: 'old-hindi-18',
    title: 'Main Agar Saamne',
    artist: 'Abhijeet Bhattacharya, Alka Yagnik',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/main-agar-saamne-raaz-dino-morea-bipasha-basu-abhijeet-alka-yagnik-hindi-hit-songs.mp3',
  },
  {
    id: 'old-hindi-19',
    title: 'Main Duniya Bhula Doonga',
    artist: 'Kumar Sanu, Anuradha Paudwal',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/main-duniya-bhula-doonga-lyrical-video-song-aashiqui-kumar-sanu-rahul-roy-anu-agarwal.mp3',
  },
  {
    id: 'old-hindi-20',
    title: 'Meri Tarah Tum Bhi',
    artist: 'Alka Yagnik, Babul Supriyo',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/meri-tarah-tum-bhi-lyrical-kya-yehi-pyaar-hai-alka-yagnik-babul-suprio-ameesha-patel-aftab.mp3',
  },
  {
    id: 'old-hindi-21',
    title: 'Baazigar',
    artist: 'Kumar Sanu, Alka Yagnik',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/baazigar-shah-rukh-khan-kajol-asha-bhosle-vinod-rathod-romantic-songs.mp3',
  },
  {
    id: 'old-hindi-22',
    title: 'Oh Oh Jaane Jaana',
    artist: 'Kamaal Khan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/oh-oh-jane-jaana-salman-khan-full-song-pyaar-kiya-toh-darna-kya.mp3',
  },
  {
    id: 'old-hindi-23',
    title: 'Oye Raju Pyaar Na Kariyo',
    artist: 'Anand Raj Anand',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/oye-raju-pyar-na-kariyo-lyrical-video-hadh-kar-di-aapne-anand-bakshi-anand-raj-anand-govinda-rani-m.mp3',
  },
  {
    id: 'old-hindi-24',
    title: 'Panchhi Sur Mein Gaate Hain',
    artist: 'Udit Narayan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/panchhi-soor-main-gaate-hain-lyrical-video-sirf-tum-udit-narayan-sanjay-kapoor-priya-gill.mp3',
  },
  {
    id: 'old-hindi-25',
    title: 'Zaroori Tha',
    artist: 'Rahat Fateh Ali Khan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/rahat-fateh-ali-khan-zaroori-tha.mp3',
  },
  {
    id: 'old-hindi-26',
    title: 'Sab Kuchh Bhula Diya',
    artist: 'Sonu Nigam, Sapna Awasthi',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/sab-kuchh-bhula-diya-lyrical-video-hum-tumhare-hain-sanam-sonu-n-sapna-a-shahrukh-khan-madhuri-d.mp3',
  },
  {
    id: 'old-hindi-27',
    title: 'Dard Dilo Ke',
    artist: 'Mohammed Irfan',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/the-xpose-dard-dilo-ke-full-song-with-lyrics-himesh-reshammiya-yo-yo-honey-singh.mp3',
  },
  {
    id: 'old-hindi-28',
    title: 'Tu Pyar Hai Kisi Aur Ka',
    artist: 'Anuradha Paudwal, Kumar Sanu',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/tu-pyar-hai-kisi-aur-ka-full-song-aamir-k-pooja-b-anuradha-p-kumar-sanu-dil-hai-ke-manta-nahin.mp3',
  },
  {
    id: 'old-hindi-29',
    title: 'Aisa Deewana',
    artist: 'Sonu Nigam, Alka Yagnik',
    audio:
      'https://pub-a6302670efd7401389e9713b7566f607.r2.dev/90s-hindi-songs/aisa-deewana-lyrical-video-song-dil-maange-more-sonu-nigam-himesh-r-shahid-kapoor-tulip-joshi.mp3',
  },
]

/* =========================================================
   PLAYLISTS
   ========================================================= */

const playlists = {
  // New random order on every application/page load.
  // Same artist cannot appear in consecutive tracks.
  ghazals: shuffleWithoutConsecutiveArtists(ghazals),

  // Same behavior for the 90s Hindi playlist.
  oldHindi: shuffleWithoutConsecutiveArtists(oldHindi),
}

export default playlists