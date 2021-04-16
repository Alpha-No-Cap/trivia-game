let mockquestions = [
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Halo&quot; franchise, in what country is New Mombasa?",
    correct_answer: "Kenya",
    incorrect_answers: ["India", "Turkey", "Slovakia"]
  },
  {
    category: "Entertainment: Board Games",
    type: "boolean",
    difficulty: "easy",
    question: "Snakes and Ladders was originally created in India?",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Celebrities",
    type: "boolean",
    difficulty: "medium",
    question: "Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "What was the capital of South Vietnam before the Vietnam War?",
    correct_answer: "Saigon",
    incorrect_answers: ["Ho Chi Minh City", "Hanoi", "Hue"]
  },
  {
    category: "Geography",
    type: "boolean",
    difficulty: "easy",
    question: "Vatican City is a country.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which anime heavily features music from the genre &quot;Eurobeat&quot;?",
    correct_answer: "Initial D",
    incorrect_answers: ["Wangan Midnight", "Kino no Tabi", "Cowboy Bebop"]
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "medium",
    question: "The vapor produced by e-cigarettes is actually water.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
    correct_answer: "Illyrians",
    incorrect_answers: ["Dorians", "Achaeans", "Ionians"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the creator of the Super Smash Bros. Series?",
    correct_answer: "Masahiro Sakurai",
    incorrect_answers: [
      "Reggie Fils-Aim&eacute;",
      "Bill Trinen",
      "Hideo Kojima"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "When was Minecraft first released to the public?",
    correct_answer: "May 17th, 2009",
    incorrect_answers: [
      "September 17th, 2009",
      "November 18th, 2011",
      "October 7th, 2011"
    ]
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
    correct_answer: "Jackie Earle Haley",
    incorrect_answers: ["Tyler Mane", "Derek Mears", "Gunnar Hansen"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: [
      "&lt;scroll&gt;&lt;/scroll&gt;",
      "&lt;move&gt;&lt;/move&gt;",
      "&lt;slide&gt;&lt;/slide&gt;"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What animal is on Link&#039;s pajamas in The Legend of Zelda: The Wind Waker?",
    correct_answer: "Crawfish",
    incorrect_answers: ["Lobster", "Salmon", "Swordfish"]
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who created the pump &quot;F.L.U.D.D.&quot; Mario uses in Super Mario Sunshine?",
    correct_answer: "Elvin Gadd",
    incorrect_answers: ["Robert Fludd", "Nirona", "Crygor"]
  },
  {
    category: "Entertainment: Film",
    type: "boolean",
    difficulty: "easy",
    question:
      "In the original Star Wars trilogy, David Prowse was the actor who physically portrayed Darth Vader.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "hard",
    question: "Nidhogg is a mythical creature from what mythology?",
    correct_answer: "Norse",
    incorrect_answers: ["Egyptian", "Greek", "Hindu"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which city did the former NHL team &quot;The Nordiques&quot; originiate from?",
    correct_answer: "Quebec City",
    incorrect_answers: ["Houston", "Montreal", "New York"]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What genetic disease is caused by having an extra Y chromosome (XYY)?",
    correct_answer: "Jacob&#039;s Syndrome",
    incorrect_answers: [
      "Klinefelter&#039;s Syndrome",
      "Turner&#039;s Syndrome",
      "Down Syndrome"
    ]
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following United States Presidents served the shortest term in office?",
    correct_answer: "William Henry Harrison",
    incorrect_answers: [
      "Zachary Taylor",
      "James A. Garfield",
      "Warren G. Harding"
    ]
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "What does LASER stand for?",
    correct_answer: "Light amplification by stimulated emission of radiation",
    incorrect_answers: [
      "Lite analysing by stereo ecorazer",
      "Light amplifier by standby energy of radio",
      "Life antimatter by standing entry of range"
    ]
  },
  {
    category: "Vehicles",
    type: "multiple",
    difficulty: "easy",
    question: "The LS7 engine is how many cubic inches?",
    correct_answer: "427",
    incorrect_answers: ["346", "364", "376"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "What is the Portuguese word for &quot;Brazil&quot;?",
    correct_answer: "Brasil",
    incorrect_answers: ["Brazil", "Brasilia", "Bras&iacute;l"]
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What is rapper Drake&#039;s real name?",
    correct_answer: "Aubrey Graham",
    incorrect_answers: ["Shaun Carter", "Dwayne Carter", "Andre Young"]
  },
  {
    category: "Entertainment: Cartoon & Animations",
    type: "multiple",
    difficulty: "medium",
    question: "Which Sanrio character was introduced in 1996?",
    correct_answer: "Pompompurin",
    incorrect_answers: ["My Melody", "Badtz-Maru", "Kerropi"]
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many independent countries are there within the continent of South America?",
    correct_answer: "12",
    incorrect_answers: ["8", "9", "10"]
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "hard",
    question: "Which animation studio animated &quot;Hidamari Sketch&quot;?",
    correct_answer: "Shaft",
    incorrect_answers: ["Trigger", "Kyoto Animation", "Production I.G"]
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Who was &quot;Kung Fu Fighting&quot; in 1974?",
    correct_answer: "Carl Douglas",
    incorrect_answers: ["The Bee Gees", "Heatwave", "Kool &amp; the Gang"]
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
    correct_answer: "1-7",
    incorrect_answers: ["1-5", "1-6", "2-6"]
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which greek god/goddess tossed a golden apple with the words &quot;for the fairest&quot; into the middle of the feast of the gods?",
    correct_answer: "Eris",
    incorrect_answers: ["Hades", "Ares", "Artemis"]
  }
];

export default mockquestions;
