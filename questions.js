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
            hi: ["सिंह", "बाघ", "हाथी", "तेंदुआ"]
        },
        answer: 1,
        explanation: {
            en: "The Bengal Tiger is the national animal of India.",
            hi: "बंगाल टाइगर भारत का राष्ट्रीय पशु है।"
        },
        hint: "It is a large striped wild cat."
    },

    {
        category: "GK",
        question: {
            en: "What is the national bird of India?",
            hi: "भारत का राष्ट्रीय पक्षी कौन सा है?"
        },
        options: {
            en: ["Peacock", "Sparrow", "Eagle", "Swan"],
            hi: ["मोर", "गौरैया", "गरुड़", "हंस"]
        },
        answer: 0,
        explanation: {
            en: "The Indian Peacock is the national bird of India.",
            hi: "भारतीय मोर भारत का राष्ट्रीय पक्षी है।"
        },
        hint: "It is famous for its colourful feathers."
    },

    {
        category: "GK",
        question: {
            en: "What is the national flower of India?",
            hi: "भारत का राष्ट्रीय फूल कौन सा है?"
        },
        options: {
            en: ["Rose", "Lotus", "Sunflower", "Jasmine"],
            hi: ["गुलाब", "कमल", "सूरजमुखी", "चमेली"]
        },
        answer: 1,
        explanation: {
            en: "Lotus is the national flower of India.",
            hi: "कमल भारत का राष्ट्रीय फूल है।"
        },
        hint: "It commonly grows in water."
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
        },
        hint: "It is located in northern India."
    },

    {
        category: "GK",
        question: {
            en: "Who was the first President of India?",
            hi: "भारत के प्रथम राष्ट्रपति कौन थे?"
        },
        options: {
            en: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"],
            hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "जवाहरलाल नेहरू", "जाकिर हुसैन"]
        },
        answer: 0,
        explanation: {
            en: "Dr. Rajendra Prasad was the first President of India.",
            hi: "डॉ. राजेंद्र प्रसाद भारत के प्रथम राष्ट्रपति थे।"
        },
        hint: "He served as President from 1950."
    },

    {
        category: "GK",
        question: {
            en: "Who was the first Prime Minister of India?",
            hi: "भारत के प्रथम प्रधानमंत्री कौन थे?"
        },
        options: {
            en: ["Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri"],
            hi: ["सरदार पटेल", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "लाल बहादुर शास्त्री"]
        },
        answer: 1,
        explanation: {
            en: "Jawaharlal Nehru was the first Prime Minister of independent India.",
            hi: "जवाहरलाल नेहरू स्वतंत्र भारत के प्रथम प्रधानमंत्री थे।"
        },
        hint: "He was a prominent leader of the Indian National Congress."
    },

    {
        category: "GK",
        question: {
            en: "In which year did India become independent?",
            hi: "भारत को स्वतंत्रता किस वर्ष मिली?"
        },
        options: {
            en: ["1945", "1946", "1947", "1950"],
            hi: ["1945", "1946", "1947", "1950"]
        },
        answer: 2,
        explanation: {
            en: "India became independent on 15 August 1947.",
            hi: "भारत 15 अगस्त 1947 को स्वतंत्र हुआ।"
        },
        hint: "Independence Day is celebrated every August."
    },

    {
        category: "GK",
        question: {
            en: "Which is the largest ocean in the world?",
            hi: "विश्व का सबसे बड़ा महासागर कौन सा है?"
        },
        options: {
            en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"]
        },
        answer: 2,
        explanation: {
            en: "The Pacific Ocean is the largest ocean.",
            hi: "प्रशांत महासागर विश्व का सबसे बड़ा महासागर है।"
        },
        hint: "It lies between Asia and the Americas."
    },

    {
        category: "GK",
        question: {
            en: "Which is the smallest continent?",
            hi: "सबसे छोटा महाद्वीप कौन सा है?"
        },
        options: {
            en: ["Europe", "Australia", "Antarctica", "South America"],
            hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"]
        },
        answer: 1,
        explanation: {
            en: "Australia is the smallest continent by area.",
            hi: "क्षेत्रफल के आधार पर ऑस्ट्रेलिया सबसे छोटा महाद्वीप है।"
        },
        hint: "It is also a country."
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
            en: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
            hi: ["15 अगस्त 1947", "26 नवंबर 1949", "26 जनवरी 1950", "2 अक्टूबर 1950"]
        },
        answer: 2,
        explanation: {
            en: "The Constitution of India came into effect on 26 January 1950.",
            hi: "भारत का संविधान 26 जनवरी 1950 को लागू हुआ।"
        },
        hint: "This date is celebrated as Republic Day."
    },

    {
        category: "Polity",
        question: {
            en: "Who was the Chairman of the Drafting Committee of the Constituent Assembly?",
            hi: "संविधान सभा की प्रारूप समिति के अध्यक्ष कौन थे?"
        },
        options: {
            en: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
            hi: ["महात्मा गांधी", "डॉ. बी. आर. आंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"]
        },
        answer: 1,
        explanation: {
            en: "Dr. B. R. Ambedkar was the Chairman of the Drafting Committee.",
            hi: "डॉ. बी. आर. आंबेडकर प्रारूप समिति के अध्यक्ष थे।"
        },
        hint: "He is known as the chief architect of the Indian Constitution."
    },

    {
        category: "Polity",
        question: {
            en: "What is the minimum age required to become the President of India?",
            hi: "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु कितनी होनी चाहिए?"
        },
        options: {
            en: ["25 years", "30 years", "35 years", "40 years"],
            hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"]
        },
        answer: 2,
        explanation: {
            en: "A person must be at least 35 years old to become President of India.",
            hi: "भारत का राष्ट्रपति बनने के लिए व्यक्ति की आयु कम से कम 35 वर्ष होनी चाहिए।"
        },
        hint: "It is higher than the minimum age for Lok Sabha membership."
    },

    {
        category: "Polity",
        question: {
            en: "Fundamental Rights are mentioned in which Part of the Indian Constitution?",
            hi: "मौलिक अधिकार भारतीय संविधान के किस भाग में हैं?"
        },
        options: {
            en: ["Part I", "Part II", "Part III", "Part IV"],
            hi: ["भाग I", "भाग II", "भाग III", "भाग IV"]
        },
        answer: 2,
        explanation: {
            en: "Fundamental Rights are contained in Part III of the Constitution.",
            hi: "मौलिक अधिकार संविधान के भाग III में दिए गए हैं।"
        },
        hint: "Directive Principles are in the following part."
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
            en: "There are six Fundamental Rights at present.",
            hi: "वर्तमान में छह मौलिक अधिकार हैं।"
        },
        hint: "One right was removed from the list by the 44th Amendment."
    },

    {
        category: "Polity",
        question: {
            en: "Who is the constitutional head of the Union of India?",
            hi: "भारत संघ का संवैधानिक प्रमुख कौन है?"
        },
        options: {
            en: ["Prime Minister", "President", "Chief Justice", "Home Minister"],
            hi: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "गृह मंत्री"]
        },
        answer: 1,
        explanation: {
            en: "The President is the constitutional head of the Union.",
            hi: "राष्ट्रपति भारत संघ के संवैधानिक प्रमुख हैं।"
        },
        hint: "The office is mentioned at the beginning of the Union executive provisions."
    },

    {
        category: "Polity",
        question: {
            en: "Which house of Parliament is known as the House of the People?",
            hi: "संसद के किस सदन को जनता का सदन कहा जाता है?"
        },
        options: {
            en: ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Vidhan Parishad"],
            hi: ["राज्यसभा", "लोकसभा", "विधानसभा", "विधान परिषद"]
        },
        answer: 1,
        explanation: {
            en: "Lok Sabha is known as the House of the People.",
            hi: "लोकसभा को जनता का सदन कहा जाता है।"
        },
        hint: "Members are directly elected by the people."
    },

    {
        category: "Polity",
        question: {
            en: "What is the normal term of the Lok Sabha?",
            hi: "लोकसभा का सामान्य कार्यकाल कितना होता है?"
        },
        options: {
            en: ["3 years", "4 years", "5 years", "6 years"],
            hi: ["3 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"]
        },
        answer: 2,
        explanation: {
            en: "The normal term of the Lok Sabha is five years.",
            hi: "लोकसभा का सामान्य कार्यकाल पाँच वर्ष होता है।"
        },
        hint: "General elections normally occur after this period."
    },

    {
        category: "Polity",
        question: {
            en: "Who appoints the Prime Minister of India?",
            hi: "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?"
        },
        options: {
            en: ["President", "Chief Justice", "Lok Sabha Speaker", "Election Commission"],
            hi: ["राष्ट्रपति", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष", "निर्वाचन आयोग"]
        },
        answer: 0,
        explanation: {
            en: "The President appoints the Prime Minister.",
            hi: "प्रधानमंत्री की नियुक्ति राष्ट्रपति करते हैं।"
        },
        hint: "The appointment is made under Article 75."
    },


    // =========================
    // HISTORY
    // =========================

    {
        category: "History",
        question: {
            en: "Who founded the Maurya Empire?",
            hi: "मौर्य साम्राज्य की स्थापना किसने की?"
        },
        options: {
            en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harshavardhana"],
            hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "हर्षवर्धन"]
        },
        answer: 1,
        explanation: {
            en: "Chandragupta Maurya founded the Maurya Empire.",
            hi: "चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना की।"
        },
        hint: "He was guided by Chanakya."
    },

    {
        category: "History",
        question: {
            en: "Who founded the Mughal Empire in India?",
            hi: "भारत में मुगल साम्राज्य की स्थापना किसने की?"
        },
        options: {
            en: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
            hi: ["अकबर", "बाबर", "हुमायूँ", "शाहजहाँ"]
        },
        answer: 1,
        explanation: {
            en: "Babur founded the Mughal Empire after the First Battle of Panipat.",
            hi: "बाबर ने पानीपत के प्रथम युद्ध के बाद मुगल साम्राज्य की स्थापना की।"
        },
        hint: "He defeated Ibrahim Lodi in 1526."
    },

    {
        category: "History",
        question: {
            en: "Who commissioned the construction of the Taj Mahal?",
            hi: "ताजमहल का निर्माण किस मुगल शासक ने करवाया?"
        },
        options: {
            en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
            hi: ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगजेब"]
        },
        answer: 2,
        explanation: {
            en: "Shah Jahan commissioned the Taj Mahal in memory of Mumtaz Mahal.",
            hi: "शाहजहाँ ने मुमताज महल की स्मृति में ताजमहल बनवाया।"
        },
        hint: "He was the father of Aurangzeb."
    },

    {
        category: "History",
        question: {
            en: "Who is popularly known as the Iron Man of India?",
            hi: "भारत के लौह पुरुष के नाम से किसे जाना जाता है?"
        },
        options: {
            en: ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Bhagat Singh", "Bal Gangadhar Tilak"],
            hi: ["सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस", "भगत सिंह", "बाल गंगाधर तिलक"]
        },
        answer: 0,
        explanation: {
            en: "Sardar Vallabhbhai Patel is popularly known as the Iron Man of India.",
            hi: "सरदार वल्लभभाई पटेल को भारत का लौह पुरुष कहा जाता है।"
        },
        hint: "He played a major role in integrating princely states."
    },

    {
        category: "History",
        question: {
            en: "Who gave the slogan 'Jai Hind' its famous national prominence?",
            hi: "'जय हिंद' नारे को राष्ट्रीय स्तर पर लोकप्रिय बनाने वालों में प्रमुख कौन थे?"
        },
        options: {
            en: ["Subhas Chandra Bose", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Dadabhai Naoroji"],
            hi: ["सुभाष चंद्र बोस", "महात्मा गांधी", "बाल गंगाधर तिलक", "दादाभाई नौरोजी"]
        },
        answer: 0,
        explanation: {
            en: "Subhas Chandra Bose and the Indian National Army popularized the greeting Jai Hind.",
            hi: "सुभाष चंद्र बोस और आजाद हिंद फौज ने 'जय हिंद' को व्यापक रूप से लोकप्रिय बनाया।"
        },
        hint: "Think of the Indian National Army."
    },

    {
        category: "History",
        question: {
            en: "The First Battle of Panipat was fought in which year?",
            hi: "पानीपत का प्रथम युद्ध किस वर्ष हुआ था?"
        },
        options: {
            en: ["1526", "1556", "1761", "1857"],
            hi: ["1526", "1556", "1761", "1857"]
        },
        answer: 0,
        explanation: {
            en: "The First Battle of Panipat was fought in 1526.",
            hi: "पानीपत का प्रथम युद्ध 1526 में हुआ था।"
        },
        hint: "It marked the beginning of Mughal rule in India."
    },

    {
        category: "History",
        question: {
            en: "Who founded the Indian National Congress along with other early leaders in 1885?",
            hi: "1885 में अन्य नेताओं के साथ भारतीय राष्ट्रीय कांग्रेस की स्थापना में प्रमुख भूमिका किसने निभाई?"
        },
        options: {
            en: ["A. O. Hume", "Lord Curzon", "Warren Hastings", "Robert Clive"],
            hi: ["ए. ओ. ह्यूम", "लॉर्ड कर्जन", "वॉरेन हेस्टिंग्स", "रॉबर्ट क्लाइव"]
        },
        answer: 0,
        explanation: {
            en: "A. O. Hume played a key role in founding the Indian National Congress in 1885.",
            hi: "ए. ओ. ह्यूम ने 1885 में भारतीय राष्ट्रीय कांग्रेस की स्थापना में महत्वपूर्ण भूमिका निभाई।"
        },
        hint: "He was a retired British civil servant."
    },

    {
        category: "History",
        question: {
            en: "Who led the Dandi March in 1930?",
            hi: "1930 में दांडी मार्च का नेतृत्व किसने किया?"
        },
        options: {
            en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
            hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस"]
        },
        answer: 0,
        explanation: {
            en: "Mahatma Gandhi led the Dandi March against the British salt law.",
            hi: "महात्मा गांधी ने ब्रिटिश नमक कानून के विरोध में दांडी मार्च का नेतृत्व किया।"
        },
        hint: "It was part of the Civil Disobedience Movement."
    },

    {
        category: "History",
        question: {
            en: "The Quit India Movement was launched in which year?",
            hi: "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?"
        },
        options: {
            en: ["1930", "1935", "1942", "1947"],
            hi: ["1930", "1935", "1942", "1947"]
        },
        answer: 2,
        explanation: {
            en: "The Quit India Movement was launched in August 1942.",
            hi: "भारत छोड़ो आंदोलन अगस्त 1942 में शुरू हुआ था।"
        },
        hint: "Its famous call was 'Do or Die'."
    },

    {
        category: "History",
        question: {
            en: "Who was the founder of the Gupta dynasty?",
            hi: "गुप्त वंश का संस्थापक कौन था?"
        },
        options: {
            en: ["Chandragupta I", "Sri Gupta", "Samudragupta", "Skandagupta"],
            hi: ["चंद्रगुप्त प्रथम", "श्रीगुप्त", "समुद्रगुप्त", "स्कंदगुप्त"]
        },
        answer: 1,
        explanation: {
            en: "Sri Gupta is generally regarded as the founder of the Gupta dynasty.",
            hi: "श्रीगुप्त को सामान्यतः गुप्त वंश का संस्थापक माना जाता है।"
        },
        hint: "His name contains the dynasty's name."
    },


    // =========================
    // GEOGRAPHY
    // =========================

    {
        category: "Geography",
        question: {
            en: "Which is the largest state of India by area?",
            hi: "क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन सा है?"
        },
        options: {
            en: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"],
            hi: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"]
        },
        answer: 2,
        explanation: {
            en: "Rajasthan is the largest Indian state by area.",
            hi: "राजस्थान क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य है।"
        },
        hint: "The Thar Desert is largely located here."
    },

    {
        category: "Geography",
        question: {
            en: "Which Indian state has the longest coastline?",
            hi: "भारत के किस राज्य की समुद्री तटरेखा सबसे लंबी है?"
        },
        options: {
            en: ["Tamil Nadu", "Gujarat", "Maharashtra", "Andhra Pradesh"],
            hi: ["तमिलनाडु", "गुजरात", "महाराष्ट्र", "आंध्र प्रदेश"]
        },
        answer: 1,
        explanation: {
            en: "Gujarat has the longest coastline among Indian states.",
            hi: "भारतीय राज्यों में गुजरात की समुद्री तटरेखा सबसे लंबी है।"
        },
        hint: "It lies on the Arabian Sea."
    },

    {
        category: "Geography",
        question: {
            en: "Which is the highest mountain peak in India?",
            hi: "भारत की सबसे ऊँची पर्वत चोटी कौन सी है?"
        },
        options: {
            en: ["Nanda Devi", "Kangchenjunga", "Anamudi", "Kamet"],
            hi: ["नंदा देवी", "कंचनजंगा", "अनामुडी", "कामेत"]
        },
        answer: 1,
        explanation: {
            en: "Kangchenjunga is the highest mountain peak in India.",
            hi: "कंचनजंगा भारत की सबसे ऊँची पर्वत चोटी है।"
        },
        hint: "It is located in the Himalayas near Sikkim."
    },

    {
        category: "Geography",
        question: {
            en: "The Thar Desert is mainly located in which Indian state?",
            hi: "थार मरुस्थल मुख्य रूप से भारत के किस राज्य में स्थित है?"
        },
        options: {
            en: ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
            hi: ["राजस्थान", "गुजरात", "पंजाब", "हरियाणा"]
        },
        answer: 0,
        explanation: {
            en: "The Thar Desert is mainly located in Rajasthan.",
            hi: "थार मरुस्थल मुख्य रूप से राजस्थान में स्थित है।"
        },
        hint: "It is India's largest desert region."
    },

    {
        category: "Geography",
        question: {
            en: "Which river is known as the longest river in India?",
            hi: "भारत में सबसे लंबी नदी कौन सी मानी जाती है?"
        },
        options: {
            en: ["Yamuna", "Ganga", "Godavari", "Narmada"],
            hi: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"]
        },
        answer: 1,
        explanation: {
            en: "The Ganga is generally regarded as the longest river within India.",
            hi: "गंगा को सामान्यतः भारत में सबसे लंबी नदी माना जाता है।"
        },
        hint: "It flows through northern India."
    },

    {
        category: "Geography",
        question: {
            en: "Which is the largest freshwater lake in India by surface area?",
            hi: "क्षेत्रफल के आधार पर भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?"
        },
        options: {
            en: ["Wular Lake", "Dal Lake", "Loktak Lake", "Chilika Lake"],
            hi: ["वूलर झील", "डल झील", "लोकटक झील", "चिलिका झील"]
        },
        answer: 0,
        explanation: {
            en: "Wular Lake in Jammu and Kashmir is India's largest freshwater lake by surface area.",
            hi: "जम्मू-कश्मीर की वूलर झील क्षेत्रफल के आधार पर भारत की सबसे बड़ी मीठे पानी की झील है।"
        },
        hint: "It is located in Jammu and Kashmir."
    },

    {
        category: "Geography",
        question: {
            en: "Which imaginary line divides Earth into the Northern and Southern Hemispheres?",
            hi: "पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में बाँटने वाली काल्पनिक रेखा कौन सी है?"
        },
        options: {
            en: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"],
            hi: ["प्रधान मध्याह्न रेखा", "भूमध्य रेखा", "कर्क रेखा", "आर्कटिक वृत्त"]
        },
        answer: 1,
        explanation: {
            en: "The Equator divides Earth into the Northern and Southern Hemispheres.",
            hi: "भूमध्य रेखा पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में विभाजित करती है।"
        },
        hint: "Its latitude is 0°."
    },

    {
        category: "Geography",
        question: {
            en: "Which planet is known as the Red Planet?",
            hi: "किस ग्रह को लाल ग्रह कहा जाता है?"
        },
        options: {
            en: ["Venus", "Mars", "Jupiter", "Mercury"],
            hi: ["शुक्र", "मंगल", "बृहस्पति", "बुध"]
        },
        answer: 1,
        explanation: {
            en: "Mars appears reddish because of iron oxide on its surface.",
            hi: "मंगल की सतह पर लौह ऑक्साइड के कारण यह लाल दिखाई देता है।"
        },
        hint: "It is the fourth planet from the Sun."
    },

    {
        category: "Geography",
        question: {
            en: "Which is the largest planet in the Solar System?",
            hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?"
        },
        options: {
            en: ["Saturn", "Earth", "Jupiter", "Neptune"],
            hi: ["शनि", "पृथ्वी", "बृहस्पति", "नेपच्यून"]
        },
        answer: 2,
        explanation: {
            en: "Jupiter is the largest planet in the Solar System.",
            hi: "बृहस्पति सौरमंडल का सबसे बड़ा ग्रह है।"
        },
        hint: "It is a gas giant."
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
            en: ["CO₂", "H₂O", "O₂", "NaCl"],
            hi: ["CO₂", "H₂O", "O₂", "NaCl"]
        },
        answer: 1,
        explanation: {
            en: "Water consists of two hydrogen atoms and one oxygen atom, giving H₂O.",
            hi: "जल में दो हाइड्रोजन और एक ऑक्सीजन परमाणु होते हैं, इसलिए इसका सूत्र H₂O है।"
        },
        hint: "It contains hydrogen and oxygen."
    },

    {
        category: "Science",
        question: {
            en: "Which organ pumps blood throughout the human body?",
            hi: "मानव शरीर में रक्त को पूरे शरीर में कौन सा अंग पंप करता है?"
        },
        options: {
            en: ["Lungs", "Heart", "Kidney", "Liver"],
            hi: ["फेफड़े", "हृदय", "गुर्दा", "यकृत"]
        },
        answer: 1,
        explanation: {
            en: "The heart pumps blood throughout the body.",
            hi: "हृदय पूरे शरीर में रक्त पंप करता है।"
        },
        hint: "It beats continuously."
    },

    {
        category: "Science",
        question: {
            en: "What is the SI unit of force?",
            hi: "बल की SI इकाई क्या है?"
        },
        options: {
            en: ["Joule", "Newton", "Watt", "Pascal"],
            hi: ["जूल", "न्यूटन", "वाट", "पास्कल"]
        },
        answer: 1,
        explanation: {
            en: "Newton is the SI unit of force.",
            hi: "न्यूटन बल की SI इकाई है।"
        },
        hint: "It is named after Isaac Newton."
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
            hi: "नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% हिस्सा है।"
        },
        hint: "It is more abundant than oxygen."
    },

    {
        category: "Science",
        question: {
            en: "Which vitamin is produced in the skin when exposed to sunlight?",
            hi: "सूर्य के प्रकाश के संपर्क में आने पर त्वचा में कौन सा विटामिन बनता है?"
        },
        options: {
            en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            hi: ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"]
        },
        answer: 3,
        explanation: {
            en: "Sunlight helps the skin synthesize vitamin D.",
            hi: "सूर्य का प्रकाश त्वचा में विटामिन D के निर्माण में मदद करता है।"
        },
        hint: "It is important for bone health."
    },

    {
        category: "Science",
        question: {
            en: "What is the SI unit of electric current?",
            hi: "विद्युत धारा की SI इकाई क्या है?"
        },
        options: {
            en: ["Volt", "Ohm", "Ampere", "Watt"],
            hi: ["वोल्ट", "ओम", "एम्पियर", "वाट"]
        },
        answer: 2,
        explanation: {
            en: "Ampere is the SI unit of electric current.",
            hi: "एम्पियर विद्युत धारा की SI इकाई है।"
        },
        hint: "Its symbol is A."
    },

    {
        category: "Science",
        question: {
            en: "What is the approximate speed of light in vacuum?",
            hi: "निर्वात में प्रकाश की लगभग चाल कितनी है?"
        },
        options: {
            en: ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"],
            hi: ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"]
        },
        answer: 2,
        explanation: {
            en: "The speed of light in vacuum is approximately 3 × 10⁸ m/s.",
            hi: "निर्वात में प्रकाश की चाल लगभग 3 × 10⁸ m/s होती है।"
        },
        hint: "It is about 300,000 kilometres per second."
    },

    {
        category: "Science",
        question: {
            en: "Which is the smallest planet in the Solar System?",
            hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?"
        },
        options: {
            en: ["Mars", "Mercury", "Venus", "Neptune"],
            hi: ["मंगल", "बुध", "शुक्र", "नेपच्यून"]
        },
        answer: 1,
        explanation: {
            en: "Mercury is the smallest planet in the Solar System.",
            hi: "बुध सौरमंडल का सबसे छोटा ग्रह है।"
        },
        hint: "It is also the closest planet to the Sun."
    },

    {
        category: "Science",
        question: {
            en: "Which blood group is commonly called the universal donor for red blood cells?",
            hi: "लाल रक्त कोशिकाओं के लिए किस रक्त समूह को सामान्यतः सार्वभौमिक दाता कहा जाता है?"
        },
        options: {
            en: ["A positive", "AB positive", "O negative", "B negative"],
            hi: ["A पॉजिटिव", "AB पॉजिटिव", "O नेगेटिव", "B नेगेटिव"]
        },
        answer: 2,
        explanation: {
            en: "O negative red blood cells lack A, B and RhD antigens and are commonly used as universal donor red cells in emergencies.",
            hi: "O नेगेटिव लाल रक्त कोशिकाओं में A, B और RhD एंटीजन नहीं होते, इसलिए आपातकाल में इन्हें सार्वभौमिक दाता लाल रक्त कोशिकाओं के रूप में उपयोग किया जाता है।"
        },
        hint: "Think of the blood group without A, B and RhD antigens."
    },


    // =========================
    // ECONOMICS
    // =========================

    {
        category: "Economics",
        question: {
            en: "What does GDP stand for?",
            hi: "GDP का पूरा नाम क्या है?"
        },
        options: {
            en: [
                "Gross Domestic Product",
                "General Domestic Product",
                "Gross Development Price",
                "General Development Product"
            ],
            hi: [
                "Gross Domestic Product",
                "General Domestic Product",
                "Gross Development Price",
                "General Development Product"
            ]
        },
        answer: 0,
        explanation: {
            en: "GDP stands for Gross Domestic Product.",
            hi: "GDP का पूरा नाम Gross Domestic Product है।"
        },
        hint: "It measures the value of final goods and services produced within an economy."
    },

    {
        category: "Economics",
        question: {
            en: "When was the Reserve Bank of India established?",
            hi: "भारतीय रिजर्व बैंक की स्थापना कब हुई थी?"
        },
        options: {
            en: ["1930", "1935", "1947", "1950"],
            hi: ["1930", "1935", "1947", "1950"]
        },
        answer: 1,
        explanation: {
            en: "The Reserve Bank of India began operations on 1 April 1935.",
            hi: "भारतीय रिजर्व बैंक ने 1 अप्रैल 1935 को काम करना शुरू किया।"
        },
        hint: "Its establishment was before India's independence."
    },

    {
        category: "Economics",
        question: {
            en: "What is the full form of RBI?",
            hi: "RBI का पूरा नाम क्या है?"
        },
        options: {
            en: [
                "Reserve Bank of India",
                "Royal Bank of India",
                "Regional Bank of India",
                "Reserve Bureau of India"
            ],
            hi: [
                "Reserve Bank of India",
                "Royal Bank of India",
                "Regional Bank of India",
                "Reserve Bureau of India"
            ]
        },
        answer: 0,
        explanation: {
            en: "RBI stands for Reserve Bank of India.",
            hi: "RBI का पूरा नाम Reserve Bank of India है।"
        },
        hint: "It is India's central bank."
    },

    {
        category: "Economics",
        question: {
            en: "Which institution is India's central bank?",
            hi: "भारत का केंद्रीय बैंक कौन सा संस्थान है?"
        },
        options: {
            en: ["SBI", "RBI", "SEBI", "NABARD"],
            hi: ["SBI", "RBI", "SEBI", "NABARD"]
        },
        answer: 1,
        explanation: {
            en: "The Reserve Bank of India is India's central bank.",
            hi: "भारतीय रिजर्व बैंक भारत का केंद्रीय बैंक है।"
        },
        hint: "It manages monetary policy."
    },

    {
        category: "Economics",
        question: {
            en: "Which tax replaced several indirect taxes in India after the GST system was introduced?",
            hi: "भारत में GST लागू होने के बाद इसने कई अप्रत्यक्ष करों को किस रूप में समाहित किया?"
        },
        options: {
            en: [
                "Income Tax",
                "Service Tax and several other indirect taxes",
                "Corporate Tax",
                "Property Tax"
            ],
            hi: [
                "आयकर",
                "सेवा कर और कई अन्य अप्रत्यक्ष कर",
                "कॉरपोरेट कर",
                "संपत्ति कर"
            ]
        },
        answer: 1,
        explanation: {
            en: "GST subsumed several indirect taxes, including Service Tax.",
            hi: "GST ने सेवा कर सहित कई अप्रत्यक्ष करों को समाहित किया।"
        },
        hint: "GST is a destination-based indirect tax."
    },

    {
        category: "Economics",
        question: {
            en: "What does GST stand for?",
            hi: "GST का पूरा नाम क्या है?"
        },
        options: {
            en: [
                "Goods and Services Tax",
                "General Sales Tax",
                "Government Service Tax",
                "Goods Supply Tax"
            ],
            hi: [
                "Goods and Services Tax",
                "General Sales Tax",
                "Government Service Tax",
                "Goods Supply Tax"
            ]
        },
        answer: 0,
        explanation: {
            en: "GST stands for Goods and Services Tax.",
            hi: "GST का पूरा नाम Goods and Services Tax है।"
        },
        hint: "It applies to the supply of goods and services."
    },

    {
        category: "Economics",
        question: {
            en: "Which organization regulates the securities market in India?",
            hi: "भारत में प्रतिभूति बाजार को कौन सा संगठन नियंत्रित करता है?"
        },
        options: {
            en: ["RBI", "SEBI", "NITI Aayog", "NABARD"],
            hi: ["RBI", "SEBI", "नीति आयोग", "NABARD"]
        },
        answer: 1,
        explanation: {
            en: "SEBI regulates India's securities market.",
            hi: "SEBI भारत के प्रतिभूति बाजार को नियंत्रित करता है।"
        },
        hint: "Its name begins with Securities and Exchange."
    },

    {
        category: "Economics",
        question: {
            en: "Which institution replaced the Planning Commission of India?",
            hi: "भारत के योजना आयोग का स्थान किस संस्था ने लिया?"
        },
        options: {
            en: ["Finance Commission", "NITI Aayog", "RBI", "SEBI"],
            hi: ["वित्त आयोग", "नीति आयोग", "RBI", "SEBI"]
        },
        answer: 1,
        explanation: {
            en: "NITI Aayog replaced the Planning Commission in 2015.",
            hi: "नीति आयोग ने 2015 में योजना आयोग का स्थान लिया।"
        },
        hint: "Its name begins with National Institution for Transforming India."
    },

    {
        category: "Economics",
        question: {
            en: "Which sector includes agriculture and fishing?",
            hi: "कृषि और मछली पालन किस क्षेत्र में आते हैं?"
        },
        options: {
            en: ["Primary sector", "Secondary sector", "Tertiary sector", "Quaternary sector"],
            hi: ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "चतुर्थक क्षेत्र"]
        },
        answer: 0,
        explanation: {
            en: "Agriculture and fishing are activities of the primary sector.",
            hi: "कृषि और मछली पालन प्राथमिक क्षेत्र की गतिविधियाँ हैं।"
        },
        hint: "This sector directly uses natural resources."
    }

];
