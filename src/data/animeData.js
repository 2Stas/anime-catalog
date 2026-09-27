
const animeData = [
    {
        mal_id: 1,
        title: "Cowboy Bebop",
        title_english: "Cowboy Bebop",
        title_japanese: "カウボーイビバップ",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg"
            }
        },
        type: "TV",
        episodes: 26,
        score: 8.75,
        synopsis: "A group of bounty hunters travels through space while dealing with criminals and their own troubled pasts.",
        genres: [
            { name: "Action" },
            { name: "Sci-Fi" },
            { name: "Space" }
        ],
        studios: [
            { name: "Sunrise" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 2,
        title: "Death Note",
        title_english: "Death Note",
        title_japanese: "DEATH NOTE",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
            }
        },
        type: "TV",
        episodes: 37,
        score: 8.62,
        synopsis: "A brilliant student discovers a mysterious notebook that allows him to kill anyone whose name he writes in it.",
        genres: [
            { name: "Mystery" },
            { name: "Supernatural" },
            { name: "Psychological" }
        ],
        studios: [
            { name: "Madhouse" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 3,
        title: "Naruto",
        title_english: "Naruto",
        title_japanese: "NARUTO -ナルト-",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg"
            }
        },
        type: "TV",
        episodes: 220,
        score: 8.00,
        synopsis: "Naruto Uzumaki is a young ninja who dreams of becoming the strongest ninja and leader of his village.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Fantasy" }
        ],
        studios: [
            { name: "Pierrot" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 4,
        title: "One Piece",
        title_english: "One Piece",
        title_japanese: "ONE PIECE",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg"
            }
        },
        type: "TV",
        episodes: null,
        score: 8.69,
        synopsis: "Monkey D. Luffy and his crew travel across the Grand Line in search of the legendary treasure One Piece.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Fantasy" }
        ],
        studios: [
            { name: "Toei Animation" }
        ],
        status: "Currently Airing"
    },
    {
        mal_id: 5,
        title: "Attack on Titan",
        title_english: "Attack on Titan",
        title_japanese: "進撃の巨人",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 8.54,
        synopsis: "Humanity fights for survival behind enormous walls against mysterious giant creatures known as Titans.",
        genres: [
            { name: "Action" },
            { name: "Drama" },
            { name: "Fantasy" }
        ],
        studios: [
            { name: "Wit Studio" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 6,
        title: "Demon Slayer: Kimetsu no Yaiba",
        title_english: "Demon Slayer: Kimetsu no Yaiba",
        title_japanese: "鬼滅の刃",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
            }
        },
        type: "TV",
        episodes: 26,
        score: 8.49,
        synopsis: "Tanjiro Kamado becomes a demon slayer after his family is killed and his sister is transformed into a demon.",
        genres: [
            { name: "Action" },
            { name: "Fantasy" },
            { name: "Historical" }
        ],
        studios: [
            { name: "ufotable" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 7,
        title: "Jujutsu Kaisen",
        title_english: "Jujutsu Kaisen",
        title_japanese: "呪術廻戦",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
            }
        },
        type: "TV",
        episodes: 24,
        score: 8.63,
        synopsis: "Yuji Itadori joins a secret organization of sorcerers after becoming the host of a powerful curse.",
        genres: [
            { name: "Action" },
            { name: "Supernatural" },
            { name: "School" }
        ],
        studios: [
            { name: "MAPPA" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 8,
        title: "Fullmetal Alchemist: Brotherhood",
        title_english: "Fullmetal Alchemist: Brotherhood",
        title_japanese: "鋼の錬金術師 FULLMETAL ALCHEMIST",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg"
            }
        },
        type: "TV",
        episodes: 64,
        score: 9.10,
        synopsis: "Two brothers use alchemy to restore their bodies after a failed attempt to bring their mother back to life.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Drama" }
        ],
        studios: [
            { name: "Bones" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 9,
        title: "My Hero Academia",
        title_english: "My Hero Academia",
        title_japanese: "僕のヒーローアカデミア",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
            }
        },
        type: "TV",
        episodes: 13,
        score: 7.89,
        synopsis: "Izuku Midoriya dreams of becoming a hero despite being born without superpowers.",
        genres: [
            { name: "Action" },
            { name: "School" },
            { name: "Super Power" }
        ],
        studios: [
            { name: "Bones" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 10,
        title: "One Punch Man",
        title_english: "One Punch Man",
        title_japanese: "ワンパンマン",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/12/76049.jpg"
            }
        },
        type: "TV",
        episodes: 12,
        score: 8.50,
        synopsis: "Saitama is a hero who can defeat any opponent with a single punch.",
        genres: [
            { name: "Action" },
            { name: "Comedy" },
            { name: "Super Power" }
        ],
        studios: [
            { name: "Madhouse" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 11,
        title: "Steins;Gate",
        title_english: "Steins;Gate",
        title_japanese: "STEINS;GATE",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/5/73199.jpg"
            }
        },
        type: "TV",
        episodes: 24,
        score: 9.07,
        synopsis: "A group of friends discovers a way to send messages into the past, changing their lives and the future.",
        genres: [
            { name: "Sci-Fi" },
            { name: "Thriller" },
            { name: "Psychological" }
        ],
        studios: [
            { name: "White Fox" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 12,
        title: "Hunter x Hunter",
        title_english: "Hunter x Hunter",
        title_japanese: "HUNTER×HUNTER",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg"
            }
        },
        type: "TV",
        episodes: 148,
        score: 9.03,
        synopsis: "Gon Freecss sets out on a journey to become a Hunter and find his missing father.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Fantasy" }
        ],
        studios: [
            { name: "Madhouse" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 13,
        title: "Code Geass",
        title_english: "Code Geass: Hangyaku no Lelouch",
        title_japanese: "コードギアス 反逆のルルーシュ",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/5/50331.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 8.70,
        synopsis: "Lelouch gains a mysterious power and begins a rebellion against the empire that rules his homeland.",
        genres: [
            { name: "Action" },
            { name: "Drama" },
            { name: "Mecha" }
        ],
        studios: [
            { name: "Sunrise" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 14,
        title: "Sword Art Online",
        title_english: "Sword Art Online",
        title_japanese: "ソードアート・オンライン",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/11/39717.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 7.20,
        synopsis: "Thousands of players become trapped inside a virtual reality MMORPG where dying in the game means dying in real life.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Romance" }
        ],
        studios: [
            { name: "A-1 Pictures" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 15,
        title: "Tokyo Ghoul",
        title_english: "Tokyo Ghoul",
        title_japanese: "東京喰種トーキョーグール",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1498/134443.jpg"
            }
        },
        type: "TV",
        episodes: 12,
        score: 7.79,
        synopsis: "A college student becomes half-ghoul after a life-changing accident and must learn to survive between two worlds.",
        genres: [
            { name: "Action" },
            { name: "Horror" },
            { name: "Supernatural" }
        ],
        studios: [
            { name: "Pierrot" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 16,
        title: "Dragon Ball Z",
        title_english: "Dragon Ball Z",
        title_japanese: "ドラゴンボールZ",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1607/117271.jpg"
            }
        },
        type: "TV",
        episodes: 291,
        score: 8.17,
        synopsis: "Goku and his friends defend Earth against increasingly powerful enemies from across the universe.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Martial Arts" }
        ],
        studios: [
            { name: "Toei Animation" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 17,
        title: "Bleach",
        title_english: "Bleach",
        title_japanese: "BLEACH - ブリーチ -",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/3/40451.jpg"
            }
        },
        type: "TV",
        episodes: 366,
        score: 8.08,
        synopsis: "Ichigo Kurosaki gains the powers of a Soul Reaper and begins protecting humans from dangerous spirits.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Supernatural" }
        ],
        studios: [
            { name: "Pierrot" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 18,
        title: "Neon Genesis Evangelion",
        title_english: "Neon Genesis Evangelion",
        title_japanese: "新世紀エヴァンゲリオン",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1314/108941.jpg"
            }
        },
        type: "TV",
        episodes: 26,
        score: 8.35,
        synopsis: "Teenagers are recruited to pilot giant biomechanical machines and defend humanity from mysterious enemies.",
        genres: [
            { name: "Action" },
            { name: "Drama" },
            { name: "Mecha" }
        ],
        studios: [
            { name: "Gainax" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 19,
        title: "Mob Psycho 100",
        title_english: "Mob Psycho 100",
        title_japanese: "モブサイコ100",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/8/80356.jpg"
            }
        },
        type: "TV",
        episodes: 12,
        score: 8.49,
        synopsis: "A powerful psychic teenager tries to live a normal life while keeping his emotions under control.",
        genres: [
            { name: "Action" },
            { name: "Comedy" },
            { name: "Supernatural" }
        ],
        studios: [
            { name: "Bones" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 20,
        title: "Haikyuu!!",
        title_english: "Haikyu!!",
        title_japanese: "ハイキュー!!",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/7/76014.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 8.44,
        synopsis: "A determined volleyball player joins his high school team and works to become a great athlete.",
        genres: [
            { name: "Sports" },
            { name: "School" },
            { name: "Team Sports" }
        ],
        studios: [
            { name: "Production I.G" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 21,
        title: "Vinland Saga",
        title_english: "Vinland Saga",
        title_japanese: "ヴィンランド・サガ",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg"
            }
        },
        type: "TV",
        episodes: 24,
        score: 8.78,
        synopsis: "Thorfinn grows up among Vikings while seeking revenge and struggling to find his own purpose.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Drama" }
        ],
        studios: [
            { name: "Wit Studio" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 22,
        title: "Spy x Family",
        title_english: "SPY x FAMILY",
        title_japanese: "SPY×FAMILY",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 8.50,
        synopsis: "A spy creates a fake family for a mission, unaware that his wife is an assassin and his daughter is telepathic.",
        genres: [
            { name: "Action" },
            { name: "Comedy" },
            { name: "Family" }
        ],
        studios: [
            { name: "Wit Studio" },
            { name: "CloverWorks" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 23,
        title: "Chainsaw Man",
        title_english: "Chainsaw Man",
        title_japanese: "チェンソーマン",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
            }
        },
        type: "TV",
        episodes: 12,
        score: 8.39,
        synopsis: "A young devil hunter is transformed into a powerful hybrid after making a deal with his pet devil.",
        genres: [
            { name: "Action" },
            { name: "Horror" },
            { name: "Supernatural" }
        ],
        studios: [
            { name: "MAPPA" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 24,
        title: "Dr. Stone",
        title_english: "Dr. Stone",
        title_japanese: "Dr.STONE",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg"
            }
        },
        type: "TV",
        episodes: 24,
        score: 8.27,
        synopsis: "Thousands of years after humanity is mysteriously petrified, a genius scientist attempts to rebuild civilization.",
        genres: [
            { name: "Adventure" },
            { name: "Comedy" },
            { name: "Sci-Fi" }
        ],
        studios: [
            { name: "TMS Entertainment" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 25,
        title: "Black Clover",
        title_english: "Black Clover",
        title_japanese: "ブラッククローバー",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/2/88336.jpg"
            }
        },
        type: "TV",
        episodes: 170,
        score: 8.14,
        synopsis: "Asta, a boy without magic, dreams of becoming the strongest mage in a world where magic is everything.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Fantasy" }
        ],
        studios: [
            { name: "Pierrot" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 26,
        title: "Fairy Tail",
        title_english: "Fairy Tail",
        title_japanese: "FAIRY TAIL",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/5/18179.jpg"
            }
        },
        type: "TV",
        episodes: 175,
        score: 7.90,
        synopsis: "Lucy joins the Fairy Tail guild and begins going on magical adventures with Natsu and his friends.",
        genres: [
            { name: "Action" },
            { name: "Adventure" },
            { name: "Fantasy" }
        ],
        studios: [
            { name: "A-1 Pictures" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 27,
        title: "Re:Zero - Starting Life in Another World",
        title_english: "Re:Zero - Starting Life in Another World",
        title_japanese: "Re：ゼロから始める異世界生活",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/11/79410.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 8.23,
        synopsis: "Subaru is transported to another world and discovers that he can return to a previous point in time after dying.",
        genres: [
            { name: "Fantasy" },
            { name: "Drama" },
            { name: "Psychological" }
        ],
        studios: [
            { name: "White Fox" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 28,
        title: "Kuroko's Basketball",
        title_english: "Kuroko's Basketball",
        title_japanese: "黒子のバスケ",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/11/50471.jpg"
            }
        },
        type: "TV",
        episodes: 25,
        score: 8.03,
        synopsis: "A talented basketball player joins forces with a mysterious former member of the legendary Generation of Miracles.",
        genres: [
            { name: "Sports" },
            { name: "School" },
            { name: "Team Sports" }
        ],
        studios: [
            { name: "Production I.G" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 29,
        title: "Your Lie in April",
        title_english: "Your Lie in April",
        title_japanese: "四月は君の嘘",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/3/67177.jpg"
            }
        },
        type: "TV",
        episodes: 22,
        score: 8.65,
        synopsis: "A young pianist who lost the ability to hear his own music meets a spirited violinist who changes his life.",
        genres: [
            { name: "Drama" },
            { name: "Romance" },
            { name: "Music" }
        ],
        studios: [
            { name: "A-1 Pictures" }
        ],
        status: "Finished Airing"
    },
    {
        mal_id: 30,
        title: "Erased",
        title_english: "ERASED",
        title_japanese: "僕だけがいない街",
        images: {
            jpg: {
                image_url: "https://cdn.myanimelist.net/images/anime/10/77957.jpg"
            }
        },
        type: "TV",
        episodes: 12,
        score: 8.31,
        synopsis: "A struggling manga artist is sent back in time and tries to prevent a series of tragic events from happening.",
        genres: [
            { name: "Mystery" },
            { name: "Psychological" },
            { name: "Supernatural" }
        ],
        studios: [
            { name: "A-1 Pictures" }
        ],
        status: "Finished Airing"
    }
];

export default animeData;