const questions = [

    // =========================
    // GENERAL KNOWLEDGE
    // =========================

    {
        category: "GK",
        question: {
            en: "What is the national animal of India?",
            hi: "भारत का राष्ट्रीय पशु कौन सा है?"
        },
        options: {
            en: ["Lion", "Tiger", "Elephant", "Leopard"],
            hi: ["शेर", "बाघ", "हाथी", "तेंदुआ"]
        },
        answer: 1,
        explanation: {
            en: "The Bengal Tiger is the national animal of India.",
            hi: "बंगाल टाइगर भारत का राष्ट्रीय पशु है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "What is the national bird of India?",
            hi: "भारत का राष्ट्रीय पक्षी कौन सा है?"
        },
        options: {
            en: ["Parrot", "Peacock", "Eagle", "Sparrow"],
            hi: ["तोता", "मोर", "गरुड़", "गौरैया"]
        },
        answer: 1,
        explanation: {
            en: "The Indian Peacock is the national bird of India.",
            hi: "भारतीय मोर भारत का राष्ट्रीय पक्षी है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "What is the national flower of India?",
            hi: "भारत का राष्ट्रीय फूल कौन सा है?"
        },
        options: {
            en: ["Rose", "Lotus", "Sunflower", "Marigold"],
            hi: ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"]
        },
        answer: 1,
        explanation: {
            en: "Lotus is the national flower of India.",
            hi: "कमल भारत का राष्ट्रीय फूल है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "What is the capital of India?",
            hi: "भारत की राजधानी क्या है?"
        },
        options: {
            en: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
            hi: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"]
        },
        answer: 1,
        explanation: {
            en: "New Delhi is the capital of India.",
            hi: "नई दिल्ली भारत की राजधानी है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "Which is the largest state of India by area?",
            hi: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?"
        },
        options: {
            en: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
            hi: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"]
        },
        answer: 2,
        explanation: {
            en: "Rajasthan is the largest Indian state by area.",
            hi: "राजस्थान क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य है।"
        }
    },

    // =========================
    // POLITY
    // =========================

    {
        category: "Polity",
        question: {
            en: "When did the Constitution of India come into effect?",
            hi: "भारत का संविधान कब लागू हुआ?"
        },
        options: {
            en: [
                "15 August 1947",
                "26 November 1949",
                "26 January 1950",
                "2 October 1950"
            ],
            hi: [
                "15 अगस्त 1947",
                "26 नवंबर 1949",
                "26 जनवरी 1950",
                "2 अक्टूबर 1950"
            ]
        },
        answer: 2,
        explanation: {
            en: "The Constitution of India came into effect on 26 January 1950.",
            hi: "भारत का संविधान 26 जनवरी 1950 को लागू हुआ था।"
        }
    },

    {
        category: "Polity",
        question: {
            en: "Who is known as the chief architect of the Indian Constitution?",
            hi: "भारतीय संविधान के मुख्य वास्तुकार के रूप में किसे जाना जाता है?"
        },
        options: {
            en: [
                "Mahatma Gandhi",
                "Dr. B. R. Ambedkar",
                "Jawaharlal Nehru",
                "Sardar Patel"
            ],
            hi: [
                "महात्मा गांधी",
                "डॉ. बी. आर. अंबेडकर",
                "जवाहरलाल नेहरू",
                "सरदार पटेल"
            ]
        },
        answer: 1,
        explanation: {
            en: "Dr. B. R. Ambedkar chaired the Drafting Committee of the Constitution.",
            hi: "डॉ. बी. आर. अंबेडकर संविधान की प्रारूप समिति के अध्यक्ष थे।"
        }
    },

    {
        category: "Polity",
        question: {
            en: "How many Fundamental Rights are currently guaranteed by the Indian Constitution?",
            hi: "भारतीय संविधान वर्तमान में कितने मौलिक अधिकारों की गारंटी देता है?"
        },
        options: {
            en: ["5", "6", "7", "8"],
            hi: ["5", "6", "7", "8"]
        },
        answer: 1,
        explanation: {
            en: "There are currently six Fundamental Rights.",
            hi: "वर्तमान में छह मौलिक अधिकार हैं।"
        }
    },

    {
        category: "Polity",
        question: {
            en: "What is the minimum age to become the President of India?",
            hi: "भारत का राष्ट्रपति बनने की न्यूनतम आयु कितनी है?"
        },
        options: {
            en: ["25 years", "30 years", "35 years", "40 years"],
            hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"]
        },
        answer: 2,
        explanation: {
            en: "A person must be at least 35 years old to be eligible for the office of President.",
            hi: "राष्ट्रपति पद के लिए न्यूनतम आयु 35 वर्ष है।"
        }
    },

    {
        category: "Polity",
        question: {
            en: "Which part of the Constitution deals with Fundamental Rights?",
            hi: "संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?"
        },
        options: {
            en: ["Part I", "Part II", "Part III", "Part IV"],
            hi: ["भाग I", "भाग II", "भाग III", "भाग IV"]
        },
        answer: 2,
        explanation: {
            en: "Fundamental Rights are contained in Part III of the Constitution.",
            hi: "मौलिक अधिकार संविधान के भाग III में दिए गए हैं।"
        }
    },

    // =========================
    // HISTORY
    // =========================

    {
        category: "History",
        question: {
            en: "Who founded the Maurya Empire?",
            hi: "मौर्य साम्राज्य की स्थापना किसने की थी?"
        },
        options: {
            en: [
                "Ashoka",
                "Chandragupta Maurya",
                "Bindusara",
                "Harshavardhana"
            ],
            hi: [
                "अशोक",
                "चंद्रगुप्त मौर्य",
                "बिंदुसार",
                "हर्षवर्धन"
            ]
        },
        answer: 1,
        explanation: {
            en: "Chandragupta Maurya founded the Maurya Empire around 322 BCE.",
            hi: "चंद्रगुप्त मौर्य ने लगभग 322 ईसा पूर्व मौर्य साम्राज्य की स्थापना की थी।"
        }
    },

    {
        category: "History",
        question: {
            en: "Who was known as the Iron Man of India?",
            hi: "भारत के लौह पुरुष के नाम से किसे जाना जाता है?"
        },
        options: {
            en: [
                "Subhas Chandra Bose",
                "Sardar Vallabhbhai Patel",
                "Bhagat Singh",
                "Rajendra Prasad"
            ],
            hi: [
                "सुभाष चंद्र बोस",
                "सरदार वल्लभभाई पटेल",
                "भगत सिंह",
                "राजेंद्र प्रसाद"
            ]
        },
        answer: 1,
        explanation: {
            en: "Sardar Vallabhbhai Patel is popularly known as the Iron Man of India.",
            hi: "सरदार वल्लभभाई पटेल को भारत का लौह पुरुष कहा जाता है।"
        }
    },

    {
        category: "History",
        question: {
            en: "Who gave the slogan 'Jai Hind' popular prominence during India's freedom struggle?",
            hi: "भारत के स्वतंत्रता संग्राम के दौरान 'जय हिंद' को लोकप्रिय बनाने वाले नेता कौन थे?"
        },
        options: {
            en: [
                "Subhas Chandra Bose",
                "Mahatma Gandhi",
                "Bal Gangadhar Tilak",
                "Lala Lajpat Rai"
            ],
            hi: [
                "सुभाष चंद्र बोस",
                "महात्मा गांधी",
                "बाल गंगाधर तिलक",
                "लाला लाजपत राय"
            ]
        },
        answer: 0,
        explanation: {
            en: "Subhas Chandra Bose and the Indian National Army popularized the slogan Jai Hind.",
            hi: "सुभाष चंद्र बोस और आजाद हिंद फौज ने 'जय हिंद' को लोकप्रिय बनाया।"
        }
    },

    {
        category: "History",
        question: {
            en: "Who founded the Mughal Empire in India?",
            hi: "भारत में मुगल साम्राज्य की स्थापना किसने की?"
        },
        options: {
            en: [
                "Akbar",
                "Babur",
                "Humayun",
                "Shah Jahan"
            ],
            hi: [
                "अकबर",
                "बाबर",
                "हुमायूँ",
                "शाहजहाँ"
            ]
        },
        answer: 1,
        explanation: {
            en: "Babur founded the Mughal Empire after the First Battle of Panipat in 1526.",
            hi: "1526 में प्रथम पानीपत के युद्ध के बाद बाबर ने भारत में मुगल साम्राज्य की स्थापना की।"
        }
    },

    {
        category: "History",
        question: {
            en: "Who built the Taj Mahal?",
            hi: "ताजमहल का निर्माण किसने करवाया था?"
        },
        options: {
            en: [
                "Akbar",
                "Shah Jahan",
                "Aurangzeb",
                "Jahangir"
            ],
            hi: [
                "अकबर",
                "शाहजहाँ",
                "औरंगजेब",
                "जहाँगीर"
            ]
        },
        answer: 1,
        explanation: {
            en: "Mughal Emperor Shah Jahan commissioned the Taj Mahal.",
            hi: "मुगल सम्राट शाहजहाँ ने ताजमहल का निर्माण करवाया था।"
        }
    },

    // =========================
    // GEOGRAPHY
    // =========================

    {
        category: "Geography",
        question: {
            en: "Which is the longest river in India?",
            hi: "भारत की सबसे लंबी नदी कौन सी है?"
        },
        options: {
            en: ["Yamuna", "Ganga", "Godavari", "Narmada"],
            hi: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"]
        },
        answer: 1,
        explanation: {
            en: "The Ganga is generally regarded as India's longest river.",
            hi: "गंगा को सामान्यतः भारत की सबसे लंबी नदी माना जाता है।"
        }
    },

    {
        category: "Geography",
        question: {
            en: "Which is the highest mountain peak in India?",
            hi: "भारत की सबसे ऊँची पर्वत चोटी कौन सी है?"
        },
        options: {
            en: ["K2", "Kangchenjunga", "Nanda Devi", "Kamet"],
            hi: ["K2", "कंचनजंघा", "नंदा देवी", "कामेत"]
        },
        answer: 1,
        explanation: {
            en: "Kangchenjunga is the highest mountain peak located in India.",
            hi: "कंचनजंघा भारत में स्थित सबसे ऊँची पर्वत चोटी है।"
        }
    },

    {
        category: "Geography",
        question: {
            en: "Which desert is located in India?",
            hi: "भारत में कौन सा मरुस्थल स्थित है?"
        },
        options: {
            en: ["Sahara", "Gobi", "Thar", "Kalahari"],
            hi: ["सहारा", "गोबी", "थार", "कालाहारी"]
        },
        answer: 2,
        explanation: {
            en: "The Thar Desert is mainly located in Rajasthan.",
            hi: "थार मरुस्थल मुख्य रूप से राजस्थान में स्थित है।"
        }
    },

    {
        category: "Geography",
        question: {
            en: "Which state has the longest coastline in India?",
            hi: "भारत में सबसे लंबी समुद्री तटरेखा किस राज्य की है?"
        },
        options: {
            en: ["Tamil Nadu", "Gujarat", "Maharashtra", "Kerala"],
            hi: ["तमिलनाडु", "गुजरात", "महाराष्ट्र", "केरल"]
        },
        answer: 1,
        explanation: {
            en: "Gujarat has the longest coastline among Indian states.",
            hi: "भारतीय राज्यों में गुजरात की समुद्री तटरेखा सबसे लंबी है।"
        }
    },

    {
        category: "Geography",
        question: {
            en: "Which planet is known as the Red Planet?",
            hi: "किस ग्रह को लाल ग्रह कहा जाता है?"
        },
        options: {
            en: ["Venus", "Mars", "Jupiter", "Saturn"],
            hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"]
        },
        answer: 1,
        explanation: {
            en: "Mars appears reddish because of iron oxide on its surface.",
            hi: "मंगल की सतह पर आयरन ऑक्साइड के कारण यह लाल दिखाई देता है।"
        }
    },

    // =========================
    // SCIENCE
    // =========================

    {
        category: "Science",
        question: {
            en: "What is the chemical formula of water?",
            hi: "जल का रासायनिक सूत्र क्या है?"
        },
        options: {
            en: ["CO2", "O2", "H2O", "NaCl"],
            hi: ["CO₂", "O₂", "H₂O", "NaCl"]
        },
        answer: 2,
        explanation: {
            en: "Water consists of two hydrogen atoms and one oxygen atom, H2O.",
            hi: "जल में दो हाइड्रोजन और एक ऑक्सीजन परमाणु होते हैं, इसलिए इसका सूत्र H₂O है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "Which organ pumps blood throughout the human body?",
            hi: "मानव शरीर में रक्त को पूरे शरीर में कौन सा अंग पंप करता है?"
        },
        options: {
            en: ["Lungs", "Heart", "Liver", "Kidney"],
            hi: ["फेफड़े", "हृदय", "यकृत", "गुर्दा"]
        },
        answer: 1,
        explanation: {
            en: "The heart pumps blood throughout the body.",
            hi: "हृदय पूरे शरीर में रक्त पंप करता है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "What is the SI unit of force?",
            hi: "बल की SI इकाई क्या है?"
        },
        options: {
            en: ["Joule", "Watt", "Newton", "Pascal"],
            hi: ["जूल", "वाट", "न्यूटन", "पास्कल"]
        },
        answer: 2,
        explanation: {
            en: "The SI unit of force is Newton (N).",
            hi: "बल की SI इकाई न्यूटन (N) है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "Which gas is most abundant in Earth's atmosphere?",
            hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?"
        },
        options: {
            en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"]
        },
        answer: 1,
        explanation: {
            en: "Nitrogen makes up about 78% of Earth's atmosphere.",
            hi: "नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% भाग है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "Which vitamin is mainly produced in the skin through sunlight exposure?",
            hi: "सूर्य के प्रकाश के संपर्क में आने पर त्वचा में मुख्य रूप से कौन सा विटामिन बनता है?"
        },
        options: [
            "Vitamin A",
            "Vitamin B",
            "Vitamin C",
            "Vitamin D"
        ],
        answer: 3,
        explanation: {
            en: "Sunlight helps the skin synthesize vitamin D.",
            hi: "सूर्य का प्रकाश त्वचा में विटामिन D के निर्माण में मदद करता है।"
        }
    },

    // =========================
    // ECONOMICS
    // =========================

    {
        category: "Economics",
        question: {
            en: "What is the full form of GDP?",
            hi: "GDP का पूरा नाम क्या है?"
        },
        options: {
            en: [
                "Gross Domestic Product",
                "General Domestic Product",
                "Gross Development Plan",
                "General Development Product"
            ],
            hi: [
                "Gross Domestic Product",
                "General Domestic Product",
                "Gross Development Plan",
                "General Development Product"
            ]
        },
        answer: 0,
        explanation: {
            en: "GDP stands for Gross Domestic Product.",
            hi: "GDP का पूरा नाम Gross Domestic Product है।"
        }
    },

    {
        category: "Economics",
        question: {
            en: "Which institution issues currency notes in India, except the one-rupee note?",
            hi: "भारत में एक रुपये के नोट को छोड़कर अधिकांश मुद्रा नोट कौन जारी करता है?"
        },
        options: {
            en: [
                "State Bank of India",
                "Reserve Bank of India",
                "Ministry of Finance",
                "NITI Aayog"
            ],
            hi: [
                "भारतीय स्टेट बैंक",
                "भारतीय रिजर्व बैंक",
                "वित्त मंत्रालय",
                "नीति आयोग"
            ]
        },
        answer: 1,
        explanation: {
            en: "The Reserve Bank of India issues banknotes, while the one-rupee note is issued by the Government of India.",
            hi: "भारतीय रिजर्व बैंक बैंक नोट जारी करता है, जबकि एक रुपये का नोट भारत सरकार जारी करती है।"
        }
    },

    {
        category: "Economics",
        question: {
            en: "In which year was the Reserve Bank of India established?",
            hi: "भारतीय रिजर्व बैंक की स्थापना किस वर्ष हुई थी?"
        },
        options: ["1935", "1947", "1950", "1925"],
        answer: 0,
        explanation: {
            en: "The Reserve Bank of India began operations on 1 April 1935.",
            hi: "भारतीय रिजर्व बैंक ने 1 अप्रैल 1935 को काम करना शुरू किया था।"
        }
    },

    {
        category: "Economics",
        question: {
            en: "What does RBI stand for?",
            hi: "RBI का पूरा नाम क्या है?"
        },
        options: [
            "Reserve Bank of India",
            "Regional Bank of India",
            "Reserve Bureau of India",
            "Rural Bank of India"
        ],
        answer: 0,
        explanation: {
            en: "RBI stands for Reserve Bank of India.",
            hi: "RBI का पूरा नाम Reserve Bank of India है।"
        }
    },

    {
        category: "Economics",
        question: {
            en: "Which tax is included in GST?",
            hi: "GST में निम्न में से कौन सा कर शामिल है?"
        },
        options: [
            "Service Tax",
            "Income Tax",
            "Corporate Tax",
            "Property Tax"
        ],
        answer: 0,
        explanation: {
            en: "GST subsumed several indirect taxes including Service Tax.",
            hi: "GST में सर्विस टैक्स सहित कई अप्रत्यक्ष करों को शामिल किया गया।"
        }
    },

    // =========================
    // STATIC QUESTION SET
    // Additional questions
    // =========================

    {
        category: "GK",
        question: {
            en: "What is the national sport officially recognized by India?",
            hi: "भारत का आधिकारिक रूप से मान्यता प्राप्त राष्ट्रीय खेल कौन सा है?"
        },
        options: [
            "Hockey",
            "Cricket",
            "Kabaddi",
            "India has no officially declared national sport"
        ],
        answer: 3,
        explanation: {
            en: "India does not officially declare any sport as its national sport.",
            hi: "भारत सरकार ने किसी भी खेल को आधिकारिक राष्ट्रीय खेल घोषित नहीं किया है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "Which is the largest planet in the Solar System?",
            hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?"
        },
        options: [
            "Earth",
            "Jupiter",
            "Saturn",
            "Neptune"
        ],
        answer: 1,
        explanation: {
            en: "Jupiter is the largest planet in the Solar System.",
            hi: "बृहस्पति सौरमंडल का सबसे बड़ा ग्रह है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "Which is the smallest planet in the Solar System?",
            hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?"
        },
        options: [
            "Mercury",
            "Mars",
            "Venus",
            "Earth"
        ],
        answer: 0,
        explanation: {
            en: "Mercury is the smallest planet in the Solar System.",
            hi: "बुध सौरमंडल का सबसे छोटा ग्रह है।"
        }
    },

    {
        category: "History",
        question: {
            en: "Who was the first President of India?",
            hi: "भारत के प्रथम राष्ट्रपति कौन थे?"
        },
        options: [
            "Dr. Rajendra Prasad",
            "Dr. S. Radhakrishnan",
            "Jawaharlal Nehru",
            "Dr. B. R. Ambedkar"
        ],
        answer: 0,
        explanation: {
            en: "Dr. Rajendra Prasad was the first President of India.",
            hi: "डॉ. राजेंद्र प्रसाद भारत के प्रथम राष्ट्रपति थे।"
        }
    },

    {
        category: "History",
        question: {
            en: "Who was the first Prime Minister of independent India?",
            hi: "स्वतंत्र भारत के प्रथम प्रधानमंत्री कौन थे?"
        },
        options: [
            "Sardar Patel",
            "Jawaharlal Nehru",
            "Rajendra Prasad",
            "Lal Bahadur Shastri"
        ],
        answer: 1,
        explanation: {
            en: "Jawaharlal Nehru became the first Prime Minister of independent India.",
            hi: "जवाहरलाल नेहरू स्वतंत्र भारत के प्रथम प्रधानमंत्री बने।"
        }
    },

    {
        category: "History",
        question: {
            en: "In which year did India become independent?",
            hi: "भारत किस वर्ष स्वतंत्र हुआ?"
        },
        options: [
            "1945",
            "1946",
            "1947",
            "1950"
        ],
        answer: 2,
        explanation: {
            en: "India became independent on 15 August 1947.",
            hi: "भारत 15 अगस्त 1947 को स्वतंत्र हुआ।"
        }
    },

    {
        category: "Geography",
        question: {
            en: "Which is the largest ocean in the world?",
            hi: "विश्व का सबसे बड़ा महासागर कौन सा है?"
        },
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2,
        explanation: {
            en: "The Pacific Ocean is the largest ocean.",
            hi: "प्रशांत महासागर विश्व का सबसे बड़ा महासागर है।"
        }
    },

    {
        category: "Geography",
        question: {
            en: "Which is the smallest continent?",
            hi: "सबसे छोटा महाद्वीप कौन सा है?"
        },
        options: [
            "Europe",
            "Australia",
            "Antarctica",
            "South America"
        ],
        answer: 1,
        explanation: {
            en: "Australia is the smallest continent by area.",
            hi: "ऑस्ट्रेलिया क्षेत्रफल की दृष्टि से सबसे छोटा महाद्वीप है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "What is the SI unit of electric current?",
            hi: "विद्युत धारा की SI इकाई क्या है?"
        },
        options: [
            "Volt",
            "Watt",
            "Ampere",
            "Ohm"
        ],
        answer: 2,
        explanation: {
            en: "The SI unit of electric current is Ampere.",
            hi: "विद्युत धारा की SI इकाई एम्पियर है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "What is the speed of light in vacuum approximately?",
            hi: "निर्वात में प्रकाश की गति लगभग कितनी होती है?"
        },
        options: [
            "3 × 10⁸ m/s",
            "3 × 10⁶ m/s",
            "3 × 10⁴ m/s",
            "3 × 10² m/s"
        ],
        answer: 0,
        explanation: {
            en: "Light travels in vacuum at approximately 3 × 10⁸ metres per second.",
            hi: "निर्वात में प्रकाश की गति लगभग 3 × 10⁸ मीटर प्रति सेकंड होती है।"
        }
    },

    {
        category: "Science",
        question: {
            en: "Which blood group is known as the universal donor for red blood cells?",
            hi: "लाल रक्त कोशिकाओं के लिए सार्वभौमिक दाता के रूप में कौन सा रक्त समूह जाना जाता है?"
        },
        options: [
            "AB+",
            "O−",
            "A+",
            "B−"
        ],
        answer: 1,
        explanation: {
            en: "O negative red blood cells are generally considered the universal donor type.",
            hi: "O negative लाल रक्त कोशिकाओं को सामान्यतः सार्वभौमिक दाता माना जाता है।"
        }
    },

    {
        category: "Polity",
        question: {
            en: "How many houses does the Parliament of India have?",
            hi: "भारत की संसद के कितने सदन हैं?"
        },
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        answer: 1,
        explanation: {
            en: "The Parliament consists of the President and two Houses: Lok Sabha and Rajya Sabha.",
            hi: "संसद में राष्ट्रपति और दो सदन—लोकसभा तथा राज्यसभा—होते हैं।"
        }
    },

    {
        category: "Polity",
        question: {
            en: "What is the upper house of the Indian Parliament called?",
            hi: "भारतीय संसद के उच्च सदन को क्या कहा जाता है?"
        },
        options: [
            "Lok Sabha",
            "Rajya Sabha",
            "Vidhan Sabha",
            "Vidhan Parishad"
        ],
        answer: 1,
        explanation: {
            en: "Rajya Sabha is the upper house of Parliament.",
            hi: "राज्यसभा संसद का उच्च सदन है।"
        }
    },

    {
        category: "Economics",
        question: {
            en: "What does inflation generally mean?",
            hi: "मुद्रास्फीति का सामान्य अर्थ क्या है?"
        },
        options: [
            "Fall in general price level",
            "Rise in general price level",
            "Rise in unemployment only",
            "Fall in population"
        ],
        answer: 1,
        explanation: {
            en: "Inflation generally refers to a sustained rise in the general price level.",
            hi: "मुद्रास्फीति का अर्थ सामान्य मूल्य स्तर में लगातार वृद्धि से है।"
        }
    },

    {
        category: "GK",
        question: {
            en: "What is the full form of ISRO?",
            hi: "ISRO का पूरा नाम क्या है?"
        },
        options: [
            "Indian Space Research Organisation",
            "Indian Science Research Organisation",
            "International Space Research Organisation",
            "Indian Satellite Research Office"
        ],
        answer: 0,
        explanation: {
            en: "ISRO stands for Indian Space Research Organisation.",
            hi: "ISRO का पूरा नाम Indian Space Research Organisation है।"
        }
    }

];
