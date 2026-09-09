const questions = [];

// Helper function
function q(category, en, hi, options, answer, explanation) {
    questions.push({
        category: category,

        question: {
            en: en,
            hi: hi
        },

        options: options,

        answer: answer,

        explanation: {
            en: explanation,
            hi: "सही उत्तर: " + options[answer]
        },

        hint: {
            en: "Think about the core concept and eliminate the incorrect options.",
            hi: "मुख्य concept याद करें और गलत विकल्पों को हटाएँ।"
        }
    });
}


// =====================================================
// GK — 50 HARD QUESTIONS
// =====================================================

q(
    "GK",
    "Which Indian city is popularly known as the Silicon Valley of India?",
    "भारत के किस शहर को 'भारत की सिलिकॉन वैली' कहा जाता है?",
    ["Hyderabad", "Bengaluru", "Pune", "Chennai"],
    1,
    "Bengaluru is India's major information technology hub."
);

q(
    "GK",
    "The concept of Blue Economy primarily relates to the sustainable use of:",
    "Blue Economy की अवधारणा मुख्य रूप से किसके सतत उपयोग से संबंधित है?",
    ["Forest resources", "Marine and ocean resources", "Mineral resources", "Agricultural land"],
    1,
    "Blue Economy focuses on sustainable use of ocean and marine resources."
);

q(
    "GK",
    "The Human Development Report is published by which organization?",
    "Human Development Report किस संगठन द्वारा प्रकाशित की जाती है?",
    ["World Bank", "UNDP", "IMF", "UNESCO"],
    1,
    "The Human Development Report is published by the United Nations Development Programme."
);

q(
    "GK",
    "The Strait of Malacca connects the Andaman Sea with the:",
    "मलक्का जलडमरूमध्य अंडमान सागर को किससे जोड़ता है?",
    ["South China Sea", "Arabian Sea", "Red Sea", "East China Sea"],
    0,
    "The Strait of Malacca connects the Andaman Sea with the South China Sea."
);

q(
    "GK",
    "Which Indian state has the longest coastline?",
    "भारत के किस राज्य की समुद्री तटरेखा सबसे लंबी है?",
    ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    2,
    "Gujarat has the longest coastline among Indian states."
);

q(
    "GK",
    "The International Court of Justice is headquartered in:",
    "International Court of Justice का मुख्यालय कहाँ है?",
    ["Geneva", "New York", "The Hague", "Vienna"],
    2,
    "The ICJ is headquartered at The Hague in the Netherlands."
);

q(
    "GK",
    "The Mariana Trench is located in which ocean?",
    "Mariana Trench किस महासागर में स्थित है?",
    ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    2,
    "The Mariana Trench is located in the western Pacific Ocean."
);

q(
    "GK",
    "Who is regarded as the father of the Indian space programme?",
    "भारतीय अंतरिक्ष कार्यक्रम का जनक किसे माना जाता है?",
    ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Satish Dhawan", "Homi Bhabha"],
    1,
    "Vikram Sarabhai played the foundational role in India's space programme."
);

q(
    "GK",
    "Which civilian award ranks immediately below the Bharat Ratna in the Indian honours system?",
    "भारतीय सम्मान प्रणाली में भारत रत्न के ठीक नीचे कौन सा नागरिक पुरस्कार है?",
    ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Ashoka Chakra"],
    2,
    "Padma Vibhushan is the second-highest civilian award of India."
);

q(
    "GK",
    "WIPO is primarily concerned with:",
    "WIPO मुख्य रूप से किससे संबंधित है?",
    ["Public health", "Intellectual property", "International trade", "Agriculture"],
    1,
    "WIPO stands for World Intellectual Property Organization."
);

q(
    "GK",
    "Which planet has the shortest orbital period around the Sun?",
    "सूर्य की परिक्रमा करने में सबसे कम समय कौन सा ग्रह लेता है?",
    ["Venus", "Mercury", "Mars", "Earth"],
    1,
    "Mercury completes one revolution around the Sun in about 88 Earth days."
);

q(
    "GK",
    "The International Date Line roughly follows which longitude?",
    "International Date Line लगभग किस देशांतर का अनुसरण करती है?",
    ["0°", "90°E", "180°", "90°W"],
    2,
    "The International Date Line roughly follows the 180° longitude."
);

q(
    "GK",
    "Indonesia is best described geographically as a:",
    "इंडोनेशिया को भौगोलिक रूप से किस रूप में जाना जाता है?",
    ["Landlocked country", "Archipelagic country", "Peninsular country", "Desert country"],
    1,
    "Indonesia consists of thousands of islands and is an archipelagic country."
);

q(
    "GK",
    "The Nobel Peace Prize is awarded in:",
    "Nobel Peace Prize कहाँ प्रदान किया जाता है?",
    ["Stockholm", "Oslo", "Geneva", "Copenhagen"],
    1,
    "Unlike the other Nobel Prizes, the Peace Prize is awarded in Oslo, Norway."
);

q(
    "GK",
    "Nalanda Mahavihara was located in present-day:",
    "Nalanda Mahavihara वर्तमान में किस राज्य में स्थित था?",
    ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Odisha"],
    1,
    "Ancient Nalanda was located in present-day Bihar."
);

q(
    "GK",
    "Kathakali is a classical dance-drama tradition associated with:",
    "कथकली किस राज्य की शास्त्रीय नृत्य-नाट्य परंपरा है?",
    ["Kerala", "Odisha", "Assam", "Tamil Nadu"],
    0,
    "Kathakali originated in Kerala."
);

q(
    "GK",
    "Which institution is primarily responsible for providing financial assistance to countries facing balance-of-payments problems?",
    "Balance of Payments की समस्या वाले देशों को मुख्य रूप से कौन सहायता देता है?",
    ["IMF", "WTO", "UNESCO", "WHO"],
    0,
    "The IMF provides financial assistance to countries facing external payment difficulties."
);

q(
    "GK",
    "Zoji La pass connects Kashmir Valley with:",
    "Zoji La दर्रा कश्मीर घाटी को किस क्षेत्र से जोड़ता है?",
    ["Ladakh", "Sikkim", "Arunachal Pradesh", "Himachal Pradesh"],
    0,
    "Zoji La connects Kashmir with Ladakh."
);

q(
    "GK",
    "Which of the following is a major greenhouse gas?",
    "निम्नलिखित में से कौन एक प्रमुख greenhouse gas है?",
    ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    2,
    "Carbon dioxide is an important greenhouse gas."
);

q(
    "GK",
    "Siachen Glacier is situated in the:",
    "Siachen Glacier किस पर्वत क्षेत्र में स्थित है?",
    ["Aravalli Range", "Karakoram Range", "Western Ghats", "Vindhya Range"],
    1,
    "Siachen Glacier lies in the eastern Karakoram range."
);

q(
    "GK",
    "The Statue of Liberty was a gift to the United States from:",
    "Statue of Liberty अमेरिका को किस देश ने उपहार में दी थी?",
    ["United Kingdom", "France", "Germany", "Italy"],
    1,
    "France gifted the Statue of Liberty to the United States."
);

q(
    "GK",
    "The term 'Golden Revolution' is associated mainly with:",
    "Golden Revolution मुख्य रूप से किससे संबंधित है?",
    ["Milk production", "Horticulture and honey production", "Fish production", "Oilseeds"],
    1,
    "Golden Revolution is associated with horticulture and related high-value crops."
);

q(
    "GK",
    "Which Indian city is popularly called the 'City of Pearls'?",
    "भारत के किस शहर को 'City of Pearls' कहा जाता है?",
    ["Jaipur", "Hyderabad", "Surat", "Kochi"],
    1,
    "Hyderabad is popularly known as the City of Pearls."
);

q(
    "GK",
    "The headquarters of UNESCO is located in:",
    "UNESCO का मुख्यालय कहाँ स्थित है?",
    ["Paris", "Rome", "London", "New York"],
    0,
    "UNESCO headquarters is located in Paris, France."
);

q(
    "GK",
    "Which organ is primarily responsible for detoxification and metabolism of drugs?",
    "दवाओं के detoxification और metabolism के लिए मुख्य रूप से कौन सा अंग जिम्मेदार है?",
    ["Kidney", "Liver", "Heart", "Lung"],
    1,
    "The liver plays a major role in detoxification and drug metabolism."
);

q(
    "GK",
    "A barometer is used to measure:",
    "Barometer का उपयोग किसे मापने के लिए किया जाता है?",
    ["Humidity", "Atmospheric pressure", "Temperature", "Wind speed"],
    1,
    "A barometer measures atmospheric pressure."
);

q(
    "GK",
    "The scientific study of earthquakes is called:",
    "भूकंपों के वैज्ञानिक अध्ययन को क्या कहा जाता है?",
    ["Meteorology", "Seismology", "Geology", "Hydrology"],
    1,
    "Seismology is the scientific study of earthquakes and seismic waves."
);

q(
    "GK",
    "The Hornbill Festival is associated with which Indian state?",
    "Hornbill Festival किस भारतीय राज्य से संबंधित है?",
    ["Nagaland", "Manipur", "Mizoram", "Tripura"],
    0,
    "The Hornbill Festival is celebrated in Nagaland."
);

q(
    "GK",
    "The Gulf Stream is a major:",
    "Gulf Stream एक प्रमुख:",
    ["Cold ocean current", "Warm ocean current", "Tidal wave", "Wind system"],
    1,
    "The Gulf Stream is a warm Atlantic Ocean current."
);

q(
    "GK",
    "The Great Barrier Reef is located off the coast of:",
    "Great Barrier Reef किस देश के तट के पास स्थित है?",
    ["Australia", "Brazil", "South Africa", "Japan"],
    0,
    "The Great Barrier Reef lies off the northeastern coast of Australia."
);

q(
    "GK",
    "Which metal has the highest electrical conductivity among common metals?",
    "सामान्य धातुओं में सबसे अधिक विद्युत चालकता किस धातु की होती है?",
    ["Copper", "Aluminium", "Silver", "Gold"],
    2,
    "Silver has the highest electrical conductivity among common metals."
);

q(
    "GK",
    "The headquarters of the International Atomic Energy Agency is in:",
    "International Atomic Energy Agency का मुख्यालय कहाँ है?",
    ["Vienna", "Geneva", "Paris", "Washington D.C."],
    0,
    "The IAEA headquarters is in Vienna, Austria."
);

q(
    "GK",
    "The 1964 Summer Olympics were held in:",
    "1964 Summer Olympics कहाँ आयोजित हुए थे?",
    ["Tokyo", "Rome", "Mexico City", "Munich"],
    0,
    "Tokyo hosted the 1964 Summer Olympics."
);

q(
    "GK",
    "Which is the smallest continent by land area?",
    "क्षेत्रफल की दृष्टि से सबसे छोटा महाद्वीप कौन सा है?",
    ["Europe", "Australia", "South America", "Antarctica"],
    1,
    "Australia is the smallest continent by land area."
);

q(
    "GK",
    "Which planet is known for having the largest volcano in the Solar System?",
    "सौरमंडल के सबसे बड़े ज्वालामुखी वाला ग्रह कौन सा है?",
    ["Earth", "Venus", "Mars", "Jupiter"],
    2,
    "Olympus Mons, the Solar System's largest volcano, is on Mars."
);

q(
    "GK",
    "Vitamin B12 contains which metal?",
    "Vitamin B12 में कौन सी धातु पाई जाती है?",
    ["Iron", "Cobalt", "Magnesium", "Zinc"],
    1,
    "Vitamin B12 contains the metal cobalt."
);

q(
    "GK",
    "Assam is especially famous for the production of:",
    "असम विशेष रूप से किसके उत्पादन के लिए प्रसिद्ध है?",
    ["Coffee", "Tea", "Rubber", "Saffron"],
    1,
    "Assam is one of India's major tea-producing regions."
);

q(
    "GK",
    "The Asian Development Bank has its headquarters in:",
    "Asian Development Bank का मुख्यालय कहाँ है?",
    ["Manila", "Beijing", "Tokyo", "Singapore"],
    0,
    "The Asian Development Bank is headquartered in Manila, Philippines."
);

q(
    "GK",
    "The currency of Japan is:",
    "जापान की मुद्रा क्या है?",
    ["Won", "Yuan", "Yen", "Ringgit"],
    2,
    "Japan uses the Japanese Yen."
);

q(
    "GK",
    "The currency of South Korea is:",
    "दक्षिण कोरिया की मुद्रा क्या है?",
    ["Yen", "Won", "Baht", "Peso"],
    1,
    "South Korea uses the Won."
);

q(
    "GK",
    "Most weather phenomena occur in which layer of the atmosphere?",
    "अधिकांश मौसम संबंधी घटनाएँ वायुमंडल की किस परत में होती हैं?",
    ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
    1,
    "Most weather phenomena occur in the troposphere."
);

q(
    "GK",
    "Which river is often called the 'Sorrow of Bihar'?",
    "किस नदी को अक्सर 'बिहार का शोक' कहा जाता है?",
    ["Ganga", "Kosi", "Son", "Gandak"],
    1,
    "The Kosi River is known as the Sorrow of Bihar because of its floods and shifting course."
);

q(
    "GK",
    "The International Labour Organization primarily deals with:",
    "International Labour Organization मुख्य रूप से किससे संबंधित है?",
    ["Labour standards", "International banking", "World trade", "Climate change"],
    0,
    "The ILO focuses on labour rights, standards and decent work."
);

q(
    "GK",
    "Which element is liquid at ordinary room temperature?",
    "सामान्य कमरे के तापमान पर कौन सा तत्व द्रव अवस्था में होता है?",
    ["Bromine", "Mercury", "Sodium", "Iodine"],
    1,
    "Mercury is a metal that remains liquid at ordinary room temperature."
);

q(
    "GK",
    "Which country has the largest land area in the world?",
    "विश्व में सबसे अधिक क्षेत्रफल वाला देश कौन सा है?",
    ["Canada", "China", "Russia", "United States"],
    2,
    "Russia is the world's largest country by land area."
);

q(
    "GK",
    "Which tournament is NOT one of the four Grand Slam tennis tournaments?",
    "निम्नलिखित में से कौन सा चार Grand Slam tennis tournaments में शामिल नहीं है?",
    ["Wimbledon", "US Open", "Davis Cup", "French Open"],
    2,
    "The Davis Cup is a team competition, not a Grand Slam tournament."
);

q(
    "GK",
    "Konark Sun Temple is located in:",
    "Konark Sun Temple कहाँ स्थित है?",
    ["Odisha", "Bihar", "Rajasthan", "Gujarat"],
    0,
    "The Konark Sun Temple is located in Odisha."
);

q(
    "GK",
    "Which is the largest ocean on Earth?",
    "पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
    ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    2,
    "The Pacific Ocean is the largest ocean on Earth."
);

q(
    "GK",
    "The World Health Organization has its headquarters in:",
    "World Health Organization का मुख्यालय कहाँ है?",
    ["New York", "Geneva", "Paris", "Rome"],
    1,
    "WHO headquarters is located in Geneva, Switzerland."
);

q(
    "GK",
    "The Tropic of Cancer passes through how many Indian states?",
    "Tropic of Cancer भारत के कितने राज्यों से होकर गुजरती है?",
    ["6", "7", "8", "9"],
    2,
    "The Tropic of Cancer passes through eight Indian states."
);// =====================================================
// POLITY — 50 HARD QUESTIONS
// =====================================================

q(
    "Polity",
    "Which Article of the Indian Constitution guarantees equality before law and equal protection of laws?",
    "भारतीय संविधान का कौन सा अनुच्छेद कानून के समक्ष समानता और कानूनों के समान संरक्षण की गारंटी देता है?",
    ["Article 14", "Article 15", "Article 16", "Article 17"],
    0,
    "Article 14 guarantees equality before law and equal protection of laws."
);

q(
    "Polity",
    "The Basic Structure doctrine was propounded by the Supreme Court in which case?",
    "Basic Structure doctrine को सर्वोच्च न्यायालय ने किस मामले में प्रतिपादित किया?",
    ["Golaknath case", "Kesavananda Bharati case", "Minerva Mills case", "Maneka Gandhi case"],
    1,
    "The Basic Structure doctrine was established in the Kesavananda Bharati case of 1973."
);

q(
    "Polity",
    "The Tenth Schedule of the Constitution deals with:",
    "संविधान की दसवीं अनुसूची किससे संबंधित है?",
    ["Panchayati Raj", "Anti-defection", "Languages", "Tribal areas"],
    1,
    "The Tenth Schedule contains provisions related to defection by legislators."
);

q(
    "Polity",
    "Judicial Review in India primarily means the power of courts to:",
    "भारत में Judicial Review का मुख्य अर्थ न्यायालयों की किस शक्ति से है?",
    ["Make laws", "Review constitutionality of laws and executive actions", "Appoint ministers", "Amend the Constitution"],
    1,
    "Judicial Review allows courts to examine whether laws and executive actions conform to the Constitution."
);

q(
    "Polity",
    "Which Constitutional Amendment reduced the voting age from 21 years to 18 years?",
    "किस संवैधानिक संशोधन ने मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष की?",
    ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
    2,
    "The 61st Constitutional Amendment Act, 1988 reduced the voting age to 18."
);

q(
    "Polity",
    "The President of India is elected by an electoral college consisting of:",
    "भारत के राष्ट्रपति का चुनाव किस निर्वाचक मंडल द्वारा किया जाता है?",
    ["Only elected MPs", "Elected MPs and elected MLAs", "All MPs and MLAs", "Only elected MLAs"],
    1,
    "The electoral college consists of elected members of both Houses of Parliament and elected members of State Legislative Assemblies."
);

q(
    "Polity",
    "A Money Bill can be introduced only in:",
    "Money Bill केवल कहाँ प्रस्तुत किया जा सकता है?",
    ["Rajya Sabha", "Lok Sabha", "Either House", "Joint sitting"],
    1,
    "A Money Bill can be introduced only in the Lok Sabha."
);

q(
    "Polity",
    "Who has the final authority to certify whether a bill is a Money Bill?",
    "किसके पास यह प्रमाणित करने का अंतिम अधिकार है कि कोई विधेयक Money Bill है?",
    ["President", "Prime Minister", "Lok Sabha Speaker", "Rajya Sabha Chairman"],
    2,
    "The Lok Sabha Speaker has the final authority to certify a bill as a Money Bill."
);

q(
    "Polity",
    "Article 32 of the Constitution is associated with:",
    "संविधान का अनुच्छेद 32 किससे संबंधित है?",
    ["Right to Property", "Constitutional Remedies", "Freedom of Religion", "Equality"],
    1,
    "Article 32 provides the Right to Constitutional Remedies."
);

q(
    "Polity",
    "Directive Principles of State Policy are contained in which Part of the Constitution?",
    "राज्य के नीति निदेशक तत्व संविधान के किस भाग में हैं?",
    ["Part III", "Part IV", "Part V", "Part VI"],
    1,
    "Directive Principles are contained in Part IV."
);

q(
    "Polity",
    "Which Constitutional Amendment added Fundamental Duties to the Constitution?",
    "किस संवैधानिक संशोधन ने संविधान में Fundamental Duties जोड़े?",
    ["24th Amendment", "42nd Amendment", "44th Amendment", "52nd Amendment"],
    1,
    "The 42nd Amendment Act of 1976 added Fundamental Duties."
);

q(
    "Polity",
    "The Comptroller and Auditor General of India is mentioned under:",
    "भारत के Comptroller and Auditor General का उल्लेख किस अनुच्छेद में है?",
    ["Article 148", "Article 280", "Article 324", "Article 76"],
    0,
    "Article 148 provides for the office of the CAG."
);

q(
    "Polity",
    "Which constitutional body conducts elections to Parliament and State Legislatures?",
    "संसद और राज्य विधानमंडलों के चुनाव कौन सा संवैधानिक निकाय कराता है?",
    ["Finance Commission", "Election Commission of India", "UPSC", "CAG"],
    1,
    "The Election Commission of India conducts elections to Parliament and State Legislatures."
);

q(
    "Polity",
    "The maximum permissible gap between two sessions of Parliament is:",
    "संसद के दो सत्रों के बीच अधिकतम अंतर कितना हो सकता है?",
    ["3 months", "6 months", "9 months", "12 months"],
    1,
    "The Constitution requires that not more than six months should intervene between two sessions."
);

q(
    "Polity",
    "The Council of Ministers is collectively responsible to:",
    "मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?",
    ["President", "Rajya Sabha", "Lok Sabha", "Supreme Court"],
    2,
    "The Council of Ministers is collectively responsible to the Lok Sabha."
);

q(
    "Polity",
    "Article 368 primarily deals with:",
    "अनुच्छेद 368 मुख्य रूप से किससे संबंधित है?",
    ["Emergency", "Constitutional Amendment", "Election Commission", "Finance Commission"],
    1,
    "Article 368 deals with the procedure for amending the Constitution."
);

q(
    "Polity",
    "The Supreme Court of India is a Court of Record under:",
    "भारत का सर्वोच्च न्यायालय किस अनुच्छेद के तहत Court of Record है?",
    ["Article 129", "Article 131", "Article 136", "Article 143"],
    0,
    "Article 129 declares the Supreme Court to be a Court of Record."
);

q(
    "Polity",
    "Which writ is issued to command a public authority to perform a public duty?",
    "किस writ द्वारा किसी सार्वजनिक प्राधिकरण को सार्वजनिक कर्तव्य पूरा करने का आदेश दिया जाता है?",
    ["Habeas Corpus", "Mandamus", "Certiorari", "Quo Warranto"],
    1,
    "Mandamus means 'we command' and directs a public authority to perform a legal duty."
);

q(
    "Polity",
    "The Governor of a State is appointed by:",
    "किसी राज्य के Governor की नियुक्ति कौन करता है?",
    ["Prime Minister", "President", "Chief Minister", "Chief Justice of India"],
    1,
    "The Governor is appointed by the President of India."
);

q(
    "Polity",
    "The Finance Commission is constituted under:",
    "Finance Commission का गठन किस अनुच्छेद के तहत होता है?",
    ["Article 280", "Article 281", "Article 275", "Article 270"],
    0,
    "Article 280 provides for the Finance Commission."
);

q(
    "Polity",
    "The GST Council is established under which Article?",
    "GST Council की स्थापना किस अनुच्छेद के तहत की गई है?",
    ["Article 279", "Article 279A", "Article 280", "Article 268"],
    1,
    "Article 279A provides for the GST Council."
);

q(
    "Polity",
    "The 73rd Constitutional Amendment is associated with:",
    "73वां संवैधानिक संशोधन किससे संबंधित है?",
    ["Urban local bodies", "Panchayati Raj", "Fundamental Duties", "Cooperative societies"],
    1,
    "The 73rd Amendment constitutionalized Panchayati Raj institutions."
);

q(
    "Polity",
    "The 74th Constitutional Amendment deals primarily with:",
    "74वां संवैधानिक संशोधन मुख्य रूप से किससे संबंधित है?",
    ["Panchayats", "Municipalities", "Emergency provisions", "Judiciary"],
    1,
    "The 74th Amendment deals with urban local bodies or municipalities."
);

q(
    "Polity",
    "The Eleventh Schedule of the Constitution is related to:",
    "संविधान की ग्यारहवीं अनुसूची किससे संबंधित है?",
    ["Municipalities", "Panchayats", "Languages", "Anti-defection"],
    1,
    "The Eleventh Schedule contains subjects related to Panchayats."
);

q(
    "Polity",
    "The Twelfth Schedule contains subjects related to:",
    "बारहवीं अनुसूची में किससे संबंधित विषय हैं?",
    ["Panchayats", "Municipalities", "Union List", "Tribal areas"],
    1,
    "The Twelfth Schedule contains subjects assigned to Municipalities."
);

q(
    "Polity",
    "Untouchability is abolished under which Article?",
    "अस्पृश्यता का उन्मूलन किस अनुच्छेद के तहत किया गया है?",
    ["Article 15", "Article 16", "Article 17", "Article 18"],
    2,
    "Article 17 abolishes untouchability."
);

q(
    "Polity",
    "Which Article protects life and personal liberty?",
    "जीवन और व्यक्तिगत स्वतंत्रता की रक्षा किस अनुच्छेद द्वारा की जाती है?",
    ["Article 19", "Article 20", "Article 21", "Article 22"],
    2,
    "Article 21 protects life and personal liberty."
);

q(
    "Polity",
    "The President of India can nominate how many members to the Rajya Sabha?",
    "भारत के राष्ट्रपति राज्यसभा में कितने सदस्यों को मनोनीत कर सकते हैं?",
    ["10", "12", "14", "15"],
    1,
    "The President nominates 12 members to the Rajya Sabha for special knowledge or practical experience."
);

q(
    "Polity",
    "The Vice-President of India is the ex-officio Chairman of:",
    "भारत के उपराष्ट्रपति किस सदन के पदेन सभापति होते हैं?",
    ["Lok Sabha", "Rajya Sabha", "Legislative Assembly", "NITI Aayog"],
    1,
    "The Vice-President serves as the ex-officio Chairman of the Rajya Sabha."
);

q(
    "Polity",
    "Which House of Parliament is a permanent body?",
    "संसद का कौन सा सदन स्थायी सदन है?",
    ["Lok Sabha", "Rajya Sabha", "Both", "Neither"],
    1,
    "Rajya Sabha is a permanent House and is not subject to dissolution."
);

q(
    "Polity",
    "The minimum age required to become a member of the Rajya Sabha is:",
    "राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु कितनी है?",
    ["21 years", "25 years", "30 years", "35 years"],
    2,
    "A person must be at least 30 years old to become a Rajya Sabha member."
);

q(
    "Polity",
    "The minimum age required to become a member of the Lok Sabha is:",
    "लोकसभा का सदस्य बनने के लिए न्यूनतम आयु कितनी है?",
    ["18 years", "21 years", "25 years", "30 years"],
    2,
    "The minimum age for Lok Sabha membership is 25 years."
);

q(
    "Polity",
    "The Attorney General of India has the right to:",
    "भारत के Attorney General को क्या अधिकार प्राप्त है?",
    ["Vote in Parliament", "Speak and participate in Parliament but not vote", "Dissolve Parliament", "Preside over Rajya Sabha"],
    1,
    "The Attorney General may participate and speak in parliamentary proceedings but cannot vote by virtue of that office."
);

q(
    "Polity",
    "The highest law officer of a State is the:",
    "किसी राज्य का सर्वोच्च विधि अधिकारी कौन होता है?",
    ["Attorney General", "Advocate General", "Solicitor General", "Law Minister"],
    1,
    "The Advocate General is the highest law officer of a State."
);

q(
    "Polity",
    "The President can seek the advisory opinion of the Supreme Court under:",
    "राष्ट्रपति सर्वोच्च न्यायालय की सलाहकारी राय किस अनुच्छेद के तहत मांग सकते हैं?",
    ["Article 136", "Article 143", "Article 145", "Article 148"],
    1,
    "Article 143 gives the President the power to seek the Supreme Court's advisory opinion."
);

q(
    "Polity",
    "President's Rule in a State is imposed under:",
    "किसी राज्य में President's Rule किस अनुच्छेद के तहत लगाया जाता है?",
    ["Article 352", "Article 356", "Article 360", "Article 365"],
    1,
    "Article 356 provides for President's Rule when constitutional machinery fails in a State."
);

q(
    "Polity",
    "Financial Emergency is provided under:",
    "Financial Emergency का प्रावधान किस अनुच्छेद में है?",
    ["Article 352", "Article 356", "Article 360", "Article 365"],
    2,
    "Article 360 provides for Financial Emergency."
);

q(
    "Polity",
    "National Emergency can be proclaimed on the grounds of:",
    "National Emergency किन आधारों पर घोषित की जा सकती है?",
    ["War, external aggression or armed rebellion", "Financial instability only", "Failure of constitutional machinery only", "Natural disasters only"],
    0,
    "Article 352 permits National Emergency on the grounds of war, external aggression or armed rebellion."
);

q(
    "Polity",
    "The First Schedule of the Constitution contains:",
    "संविधान की पहली अनुसूची में क्या शामिल है?",
    ["Languages", "States and Union Territories", "Oaths", "Panchayat subjects"],
    1,
    "The First Schedule lists the States and Union Territories and their territories."
);

q(
    "Polity",
    "The Eighth Schedule of the Constitution deals with:",
    "संविधान की आठवीं अनुसूची किससे संबंधित है?",
    ["Official languages of States", "Recognized languages", "Union territories", "Tribal administration"],
    1,
    "The Eighth Schedule contains the languages recognized by the Constitution."
);

q(
    "Polity",
    "Distribution of legislative powers between Union and States is primarily provided through:",
    "केंद्र और राज्यों के बीच विधायी शक्तियों का विभाजन मुख्य रूप से किसके द्वारा किया गया है?",
    ["Fifth Schedule", "Sixth Schedule", "Seventh Schedule", "Eighth Schedule"],
    2,
    "The Seventh Schedule contains the Union, State and Concurrent Lists."
);

q(
    "Polity",
    "The power of Parliament to reorganize States is mainly derived from:",
    "राज्यों के पुनर्गठन की संसद की शक्ति मुख्य रूप से किस अनुच्छेद से प्राप्त होती है?",
    ["Article 2", "Article 3", "Article 4", "Article 5"],
    1,
    "Article 3 empowers Parliament to form or alter States and their boundaries or names."
);

q(
    "Polity",
    "The Indian Constitution's provision of single citizenship is broadly inspired by the constitutional system of:",
    "भारतीय संविधान में Single Citizenship की व्यवस्था मुख्य रूप से किस देश से प्रेरित है?",
    ["United States", "United Kingdom", "Canada", "Australia"],
    1,
    "The idea of single citizenship in India is broadly influenced by the British system."
);

q(
    "Polity",
    "The Directive Principles of State Policy were inspired mainly by the Constitution of:",
    "Directive Principles of State Policy मुख्य रूप से किस देश के संविधान से प्रेरित हैं?",
    ["Ireland", "USA", "Canada", "France"],
    0,
    "The Directive Principles were inspired by the Irish Constitution."
);

q(
    "Polity",
    "The Fundamental Rights in the Indian Constitution were largely inspired by the Constitution of:",
    "भारतीय संविधान के Fundamental Rights मुख्य रूप से किस देश के संविधान से प्रेरित हैं?",
    ["United Kingdom", "USA", "Ireland", "Russia"],
    1,
    "The Fundamental Rights were largely inspired by the US Constitution."
);

q(
    "Polity",
    "The impeachment of the President of India is provided under:",
    "भारत के राष्ट्रपति के impeachment का प्रावधान किस अनुच्छेद में है?",
    ["Article 52", "Article 56", "Article 61", "Article 72"],
    2,
    "Article 61 lays down the procedure for impeachment of the President."
);

q(
    "Polity",
    "Which constitutional body recommends the distribution of tax revenues between the Union and the States?",
    "कौन सा संवैधानिक निकाय केंद्र और राज्यों के बीच कर राजस्व के वितरण की सिफारिश करता है?",
    ["Election Commission", "Finance Commission", "UPSC", "CAG"],
    1,
    "The Finance Commission recommends the distribution of certain tax revenues between the Union and States."
);

q(
    "Polity",
    "Reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha is provided under:",
    "लोकसभा में SC और ST के लिए सीटों के आरक्षण का प्रावधान किस अनुच्छेद में है?",
    ["Article 324", "Article 330", "Article 332", "Article 335"],
    1,
    "Article 330 provides for reservation of seats for SCs and STs in the Lok Sabha."
);

q(
    "Polity",
    "Which Fundamental Right allows citizens to directly approach the Supreme Court for enforcement of Fundamental Rights?",
    "कौन सा मौलिक अधिकार नागरिकों को Fundamental Rights के प्रवर्तन के लिए सीधे Supreme Court जाने की अनुमति देता है?",
    ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Constitutional Remedies"],
    3,
    "Article 32 provides the Right to Constitutional Remedies."
);


// =====================================================
// END OF POLITY — 50 QUESTIONS
// =====================================================// =====================================================
// HISTORY — 50 HARD QUESTIONS
// =====================================================

q(
    "History",
    "The Allahabad Pillar inscription is primarily associated with which Gupta ruler?",
    "Allahabad Pillar inscription मुख्य रूप से किस Gupta शासक से संबंधित है?",
    ["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta I"],
    1,
    "The Allahabad Pillar inscription, composed by Harisena, praises Samudragupta."
);

q(
    "History",
    "Ashoka's Dhamma was primarily aimed at promoting:",
    "अशोक का Dhamma मुख्य रूप से किसे बढ़ावा देने के लिए था?",
    ["Military expansion", "Social and religious harmony", "Vedic sacrifices", "Trade monopoly"],
    1,
    "Ashoka's Dhamma emphasized ethical conduct, tolerance and social harmony."
);

q(
    "History",
    "The Arthashastra is traditionally attributed to:",
    "Arthashastra की रचना परंपरागत रूप से किससे संबंधित है?",
    ["Kalidasa", "Kautilya", "Banabhatta", "Panini"],
    1,
    "The Arthashastra is traditionally attributed to Kautilya, also known as Chanakya."
);

q(
    "History",
    "Chandragupta II is popularly known by which title?",
    "Chandragupta II किस प्रसिद्ध उपाधि से जाना जाता है?",
    ["Devanampriya", "Vikramaditya", "Priyadarshi", "Amitraghata"],
    1,
    "Chandragupta II is popularly known as Vikramaditya."
);

q(
    "History",
    "Which Chinese traveller visited India during the reign of Chandragupta II?",
    "Chandragupta II के शासनकाल में कौन सा Chinese traveller भारत आया था?",
    ["Hiuen Tsang", "Fa-Hien", "I-Tsing", "Al-Biruni"],
    1,
    "Fa-Hien visited India during the reign of Chandragupta II."
);

q(
    "History",
    "The Brihadeshwara Temple at Thanjavur was built by:",
    "Thanjavur का Brihadeshwara Temple किसने बनवाया था?",
    ["Rajaraja Chola I", "Rajendra Chola I", "Krishnadevaraya", "Pulakeshin II"],
    0,
    "Rajaraja Chola I built the Brihadeshwara Temple at Thanjavur."
);

q(
    "History",
    "The Battle of Talikota in 1565 led to the major decline of the:",
    "1565 का Talikota युद्ध किस साम्राज्य के पतन का प्रमुख कारण बना?",
    ["Mughal Empire", "Vijayanagara Empire", "Maratha Empire", "Chola Empire"],
    1,
    "The defeat at Talikota severely weakened the Vijayanagara Empire."
);

q(
    "History",
    "The Mansabdari system was systematically organized under:",
    "Mansabdari system को व्यवस्थित रूप से किसके शासन में विकसित किया गया?",
    ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
    1,
    "Akbar organized and developed the Mansabdari system."
);

q(
    "History",
    "The famous Peacock Throne was commissioned by:",
    "प्रसिद्ध Peacock Throne किस Mughal ruler ने बनवाया था?",
    ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    2,
    "Shah Jahan commissioned the famous Peacock Throne."
);

q(
    "History",
    "Mughal miniature painting reached significant development under:",
    "Mughal miniature painting का महत्वपूर्ण विकास किसके शासन में हुआ?",
    ["Akbar", "Babur", "Humayun", "Bahadur Shah II"],
    0,
    "Akbar greatly encouraged the development of Mughal miniature painting."
);

q(
    "History",
    "The Treaty of Purandar (1665) was signed between Shivaji and:",
    "1665 की Treaty of Purandar Shivaji और किसके बीच हुई थी?",
    ["Shaista Khan", "Jai Singh I", "Aurangzeb", "Afzal Khan"],
    1,
    "The Treaty of Purandar was signed between Shivaji and Mughal commander Jai Singh I."
);

q(
    "History",
    "The Third Battle of Panipat was fought in:",
    "Third Battle of Panipat किस वर्ष हुआ था?",
    ["1757", "1761", "1764", "1775"],
    1,
    "The Third Battle of Panipat was fought in 1761 between the Marathas and Ahmad Shah Abdali."
);

q(
    "History",
    "The Battle of Buxar was fought in:",
    "Battle of Buxar किस वर्ष हुआ था?",
    ["1757", "1761", "1764", "1772"],
    2,
    "The Battle of Buxar was fought in 1764."
);

q(
    "History",
    "The Treaty of Allahabad of 1765 resulted in the East India Company obtaining the Diwani rights of:",
    "1765 की Treaty of Allahabad के बाद East India Company को किन क्षेत्रों की Diwani मिली?",
    ["Punjab and Sindh", "Bengal, Bihar and Orissa", "Mysore and Hyderabad", "Awadh and Delhi"],
    1,
    "The Company obtained Diwani rights over Bengal, Bihar and Orissa."
);

q(
    "History",
    "The Permanent Settlement was introduced by:",
    "Permanent Settlement किसने लागू किया था?",
    ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie"],
    1,
    "Lord Cornwallis introduced the Permanent Settlement in 1793."
);

q(
    "History",
    "The Subsidiary Alliance system was most closely associated with:",
    "Subsidiary Alliance system मुख्य रूप से किस Governor-General से संबंधित है?",
    ["Lord Cornwallis", "Lord Wellesley", "Lord Bentinck", "Lord Dalhousie"],
    1,
    "Lord Wellesley extensively used the Subsidiary Alliance system."
);

q(
    "History",
    "The Doctrine of Lapse was aggressively applied by:",
    "Doctrine of Lapse को आक्रामक रूप से किस Governor-General ने लागू किया?",
    ["Lord Wellesley", "Lord Dalhousie", "Lord Canning", "Lord Curzon"],
    1,
    "Lord Dalhousie used the Doctrine of Lapse to annex several states."
);

q(
    "History",
    "The Revolt of 1857 first broke out at:",
    "1857 का विद्रोह सबसे पहले कहाँ शुरू हुआ था?",
    ["Delhi", "Meerut", "Kanpur", "Lucknow"],
    1,
    "The Revolt of 1857 began at Meerut on 10 May 1857."
);

q(
    "History",
    "The immediate military cause of the Revolt of 1857 was associated with:",
    "1857 के विद्रोह का तत्काल सैन्य कारण किससे संबंधित था?",
    ["Subsidiary Alliance", "Greased cartridges", "Permanent Settlement", "Ilbert Bill"],
    1,
    "The controversy over greased cartridges became the immediate military trigger."
);

q(
    "History",
    "The Indian National Congress was founded in:",
    "Indian National Congress की स्थापना किस वर्ष हुई?",
    ["1885", "1887", "1890", "1905"],
    0,
    "The Indian National Congress was founded in 1885."
);

q(
    "History",
    "Who was the first president of the Indian National Congress?",
    "Indian National Congress के प्रथम अध्यक्ष कौन थे?",
    ["Dadabhai Naoroji", "W.C. Bonnerjee", "Surendranath Banerjee", "A.O. Hume"],
    1,
    "W.C. Bonnerjee was the first president of the Indian National Congress."
);

q(
    "History",
    "The Partition of Bengal was announced in:",
    "Bengal का विभाजन किस वर्ष घोषित किया गया था?",
    ["1903", "1905", "1907", "1911"],
    1,
    "Lord Curzon announced the Partition of Bengal in 1905."
);

q(
    "History",
    "The Swadeshi Movement was launched primarily in response to:",
    "Swadeshi Movement मुख्य रूप से किस घटना के विरोध में शुरू हुआ?",
    ["Rowlatt Act", "Partition of Bengal", "Simon Commission", "Jallianwala Bagh"],
    1,
    "The Swadeshi Movement arose as a response to the Partition of Bengal."
);

q(
    "History",
    "The Surat Split of the Indian National Congress occurred in:",
    "Indian National Congress का Surat Split किस वर्ष हुआ?",
    ["1905", "1906", "1907", "1909"],
    2,
    "The Congress split into Moderates and Extremists at Surat in 1907."
);

q(
    "History",
    "The All-India Muslim League was founded in 1906 at:",
    "All-India Muslim League की स्थापना 1906 में कहाँ हुई थी?",
    ["Lahore", "Dhaka", "Aligarh", "Lucknow"],
    1,
    "The All-India Muslim League was founded at Dhaka in 1906."
);

q(
    "History",
    "The Home Rule Movement in India was associated with:",
    "भारत का Home Rule Movement किनसे संबंधित था?",
    ["Gandhi and Nehru", "Tilak and Annie Besant", "Bose and Patel", "Gokhale and Naoroji"],
    1,
    "Bal Gangadhar Tilak and Annie Besant were major leaders of the Home Rule Movement."
);

q(
    "History",
    "Gandhi's first major satyagraha in India was launched at:",
    "भारत में Gandhi का पहला प्रमुख Satyagraha कहाँ हुआ था?",
    ["Kheda", "Champaran", "Ahmedabad", "Bardoli"],
    1,
    "Gandhi launched his first major satyagraha in India at Champaran in 1917."
);

q(
    "History",
    "The Rowlatt Act was passed in:",
    "Rowlatt Act किस वर्ष पारित किया गया था?",
    ["1917", "1919", "1920", "1922"],
    1,
    "The Rowlatt Act was passed in 1919."
);

q(
    "History",
    "The Jallianwala Bagh massacre took place on:",
    "Jallianwala Bagh massacre कब हुआ था?",
    ["13 April 1919", "15 August 1919", "26 January 1920", "10 April 1919"],
    0,
    "The Jallianwala Bagh massacre occurred on 13 April 1919."
);

q(
    "History",
    "The Non-Cooperation Movement was withdrawn following the incident at:",
    "Non-Cooperation Movement किस घटना के बाद वापस लिया गया?",
    ["Jallianwala Bagh", "Chauri Chaura", "Kakori", "Dandi"],
    1,
    "Gandhi withdrew the Non-Cooperation Movement after the Chauri Chaura incident in 1922."
);

q(
    "History",
    "The Simon Commission arrived in India in:",
    "Simon Commission भारत में किस वर्ष आया?",
    ["1927", "1928", "1929", "1930"],
    1,
    "The Simon Commission arrived in India in 1928."
);

q(
    "History",
    "The Nehru Report of 1928 was headed by:",
    "1928 की Nehru Report की अध्यक्षता किसने की थी?",
    ["Jawaharlal Nehru", "Motilal Nehru", "Rajendra Prasad", "Sardar Patel"],
    1,
    "Motilal Nehru headed the committee that prepared the Nehru Report."
);

q(
    "History",
    "The Lahore Session of the Congress in 1929 was presided over by:",
    "1929 के Lahore Session की अध्यक्षता किसने की?",
    ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Motilal Nehru"],
    1,
    "Jawaharlal Nehru presided over the Lahore Session of 1929."
);

q(
    "History",
    "The Congress adopted the goal of Purna Swaraj at the:",
    "Congress ने Purna Swaraj का लक्ष्य किस अधिवेशन में अपनाया?",
    ["Calcutta Session, 1928", "Lahore Session, 1929", "Karachi Session, 1931", "Lucknow Session, 1916"],
    1,
    "The Lahore Session of 1929 adopted Purna Swaraj as the Congress objective."
);

q(
    "History",
    "The Dandi March of 1930 began from:",
    "1930 का Dandi March कहाँ से शुरू हुआ था?",
    ["Wardha", "Sabarmati Ashram", "Sevagram", "Ahmedabad Fort"],
    1,
    "Gandhi began the Dandi March from Sabarmati Ashram."
);

q(
    "History",
    "The Gandhi-Irwin Pact was signed in:",
    "Gandhi-Irwin Pact किस वर्ष हुआ था?",
    ["1929", "1930", "1931", "1932"],
    2,
    "The Gandhi-Irwin Pact was signed in 1931."
);

q(
    "History",
    "The Poona Pact of 1932 was signed between Mahatma Gandhi and:",
    "1932 का Poona Pact Mahatma Gandhi और किसके बीच हुआ था?",
    ["B.R. Ambedkar", "Jawaharlal Nehru", "Madan Mohan Malaviya", "Rajendra Prasad"],
    0,
    "The Poona Pact was signed between Gandhi and B.R. Ambedkar."
);

q(
    "History",
    "The Government of India Act, 1935 introduced:",
    "Government of India Act, 1935 ने क्या महत्वपूर्ण व्यवस्था की?",
    ["Complete independence", "Provincial autonomy", "Universal adult franchise", "Republican government"],
    1,
    "The Government of India Act, 1935 introduced provincial autonomy."
);

q(
    "History",
    "The Quit India Movement was launched in:",
    "Quit India Movement किस वर्ष शुरू हुआ?",
    ["1939", "1940", "1942", "1945"],
    2,
    "The Quit India Movement was launched in August 1942."
);

q(
    "History",
    "The slogan 'Do or Die' is associated with:",
    "'Do or Die' का नारा किस आंदोलन से संबंधित है?",
    ["Civil Disobedience Movement", "Quit India Movement", "Non-Cooperation Movement", "Swadeshi Movement"],
    1,
    "Mahatma Gandhi gave the 'Do or Die' call during the Quit India Movement."
);

q(
    "History",
    "The Indian National Army was reorganized under the leadership of:",
    "Indian National Army को किसके नेतृत्व में पुनर्गठित किया गया?",
    ["Bhagat Singh", "Subhas Chandra Bose", "Sardar Patel", "Jawaharlal Nehru"],
    1,
    "Subhas Chandra Bose reorganized and led the Indian National Army."
);

q(
    "History",
    "The Cabinet Mission came to India in:",
    "Cabinet Mission भारत में किस वर्ष आया था?",
    ["1942", "1945", "1946", "1947"],
    2,
    "The Cabinet Mission came to India in 1946."
);

q(
    "History",
    "The Mountbatten Plan was announced on:",
    "Mountbatten Plan कब घोषित किया गया था?",
    ["3 June 1947", "15 August 1947", "18 July 1947", "26 January 1947"],
    0,
    "The Mountbatten Plan was announced on 3 June 1947."
);

q(
    "History",
    "The Indian Independence Act was passed by the British Parliament in:",
    "Indian Independence Act ब्रिटिश Parliament ने किस वर्ष पारित किया?",
    ["1945", "1946", "1947", "1948"],
    2,
    "The Indian Independence Act was passed in 1947."
);

q(
    "History",
    "Who became the first Governor-General of independent India?",
    "स्वतंत्र भारत के प्रथम Governor-General कौन बने?",
    ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Rajendra Prasad"],
    1,
    "Lord Mountbatten became the first Governor-General of independent India."
);

q(
    "History",
    "Who was the first Indian to serve as Governor-General of India?",
    "भारत के Governor-General के रूप में कार्य करने वाले पहले भारतीय कौन थे?",
    ["Sardar Patel", "C. Rajagopalachari", "Rajendra Prasad", "B.R. Ambedkar"],
    1,
    "C. Rajagopalachari was the first and only Indian Governor-General of India."
);

q(
    "History",
    "The first meeting of the Constituent Assembly was held on:",
    "Constituent Assembly की पहली बैठक कब हुई थी?",
    ["9 December 1946", "15 August 1947", "26 November 1949", "26 January 1950"],
    0,
    "The first meeting of the Constituent Assembly was held on 9 December 1946."
);

q(
    "History",
    "The Objective Resolution in the Constituent Assembly was moved by:",
    "Constituent Assembly में Objective Resolution किसने प्रस्तुत किया था?",
    ["B.R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel"],
    1,
    "Jawaharlal Nehru moved the Objective Resolution."
);

q(
    "History",
    "Which Harappan site is particularly famous for its ancient dockyard?",
    "कौन सा Harappan site अपने प्राचीन dockyard के लिए प्रसिद्ध है?",
    ["Harappa", "Mohenjo-daro", "Lothal", "Kalibangan"],
    2,
    "Lothal in Gujarat is famous for its ancient dockyard."
);

q(
    "History",
    "The Brahmi script was deciphered successfully by:",
    "Brahmi script को सफलतापूर्वक किसने decipher किया था?",
    ["Alexander Cunningham", "James Prinsep", "John Marshall", "William Jones"],
    1,
    "James Prinsep deciphered the Brahmi script in the nineteenth century."
);


// =====================================================
// END OF HISTORY — 50 QUESTIONS
// =====================================================// =====================================================
// GEOGRAPHY — 50 HARD QUESTIONS
// =====================================================

q(
    "Geography",
    "The Standard Meridian of India is located at:",
    "भारत की Standard Meridian किस देशांतर पर स्थित है?",
    ["75°30'E", "82°30'E", "90°30'E", "77°30'E"],
    1,
    "India's Standard Meridian is 82°30'E longitude."
);

q(
    "Geography",
    "The Narmada River drains into the:",
    "Narmada नदी किसमें गिरती है?",
    ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Gulf of Mannar"],
    1,
    "The Narmada flows westward and drains into the Arabian Sea."
);

q(
    "Geography",
    "The Deccan Plateau is largely composed of:",
    "Deccan Plateau मुख्य रूप से किस प्रकार की चट्टानों से बना है?",
    ["Granite", "Basaltic lava rocks", "Limestone", "Sandstone"],
    1,
    "The Deccan Plateau is largely formed from basaltic lava flows."
);

q(
    "Geography",
    "Black soil is particularly suitable for the cultivation of:",
    "Black soil किस फसल की खेती के लिए विशेष रूप से उपयुक्त है?",
    ["Wheat", "Cotton", "Tea", "Jute"],
    1,
    "Black soil has high moisture-retaining capacity and is particularly suitable for cotton."
);

q(
    "Geography",
    "The Western Ghats and Eastern Ghats meet at the:",
    "Western Ghats और Eastern Ghats कहाँ मिलते हैं?",
    ["Aravalli Hills", "Nilgiri Hills", "Satpura Hills", "Vindhya Range"],
    1,
    "The Western and Eastern Ghats meet in the Nilgiri Hills region."
);

q(
    "Geography",
    "The highest peak of the Western Ghats is:",
    "Western Ghats की सबसे ऊँची चोटी कौन सी है?",
    ["Doddabetta", "Anamudi", "Mahendragiri", "Guru Shikhar"],
    1,
    "Anamudi in Kerala is the highest peak of the Western Ghats."
);

q(
    "Geography",
    "The Brahmaputra enters India through which state?",
    "Brahmaputra भारत में किस राज्य से प्रवेश करती है?",
    ["Assam", "Arunachal Pradesh", "Sikkim", "Nagaland"],
    1,
    "The Brahmaputra enters India through Arunachal Pradesh, where it is known as the Siang/Dihang."
);

q(
    "Geography",
    "The northernmost range of the Himalayan system is known as:",
    "Himalayan system की सबसे उत्तरी श्रेणी को क्या कहा जाता है?",
    ["Shiwalik", "Himachal", "Himadri", "Purvanchal"],
    2,
    "Himadri, or the Greater Himalaya, is the northernmost and highest Himalayan range."
);

q(
    "Geography",
    "The Bhabar belt is characterized by:",
    "Bhabar क्षेत्र की प्रमुख विशेषता क्या है?",
    ["Marshy land", "Porous deposits where streams disappear", "Black soil", "Deltaic deposits"],
    1,
    "In the Bhabar belt, streams often disappear into highly porous deposits."
);

q(
    "Geography",
    "The Terai region lies immediately south of the:",
    "Terai क्षेत्र किसके ठीक दक्षिण में स्थित है?",
    ["Himadri", "Bhabar", "Deccan Plateau", "Aravalli"],
    1,
    "The Terai lies south of the Bhabar belt and has marshy, wet conditions."
);

q(
    "Geography",
    "Rice is primarily a:",
    "Rice मुख्य रूप से किस प्रकार की फसल है?",
    ["Rabi crop", "Kharif crop", "Zaid crop", "Plantation crop"],
    1,
    "Rice is generally cultivated as a Kharif crop in India."
);

q(
    "Geography",
    "Rabi crops are generally sown during:",
    "Rabi crops सामान्यतः कब बोई जाती हैं?",
    ["Summer", "Monsoon", "Winter", "Spring only"],
    2,
    "Rabi crops are generally sown in winter and harvested in spring."
);

q(
    "Geography",
    "Which Indian state is particularly famous for coffee production?",
    "भारत का कौन सा राज्य coffee production के लिए विशेष रूप से प्रसिद्ध है?",
    ["Karnataka", "Punjab", "Bihar", "Haryana"],
    0,
    "Karnataka is India's leading coffee-producing state."
);

q(
    "Geography",
    "The Rann of Kachchh is located in:",
    "Rann of Kachchh कहाँ स्थित है?",
    ["Rajasthan", "Gujarat", "Maharashtra", "Sindh"],
    1,
    "The Rann of Kachchh is a salt marsh region in Gujarat."
);

q(
    "Geography",
    "Chilika Lake is best described as a:",
    "Chilika Lake को किस प्रकार की झील माना जाता है?",
    ["Freshwater lake", "Brackish water lagoon", "Crater lake", "Oxbow lake"],
    1,
    "Chilika is a large brackish-water lagoon on the Odisha coast."
);

q(
    "Geography",
    "Loktak Lake is located in:",
    "Loktak Lake किस राज्य में स्थित है?",
    ["Manipur", "Assam", "Mizoram", "Tripura"],
    0,
    "Loktak Lake is located in Manipur and is famous for floating phumdis."
);

q(
    "Geography",
    "The Sundarbans are famous for their:",
    "Sundarbans किसके लिए प्रसिद्ध हैं?",
    ["Coniferous forests", "Mangrove forests", "Thorn forests", "Alpine vegetation"],
    1,
    "The Sundarbans contain one of the world's largest mangrove ecosystems."
);

q(
    "Geography",
    "The Coromandel Coast lies mainly along the:",
    "Coromandel Coast मुख्य रूप से किस तट के साथ स्थित है?",
    ["Western coast", "Southeastern coast", "Northern coast", "Northwestern coast"],
    1,
    "The Coromandel Coast lies along southeastern India, mainly Tamil Nadu."
);

q(
    "Geography",
    "The Malabar Coast is primarily associated with:",
    "Malabar Coast मुख्य रूप से किस क्षेत्र से संबंधित है?",
    ["Kerala", "Odisha", "West Bengal", "Gujarat"],
    0,
    "The Malabar Coast is mainly associated with Kerala and parts of the southwestern coast."
);

q(
    "Geography",
    "Which river of Rajasthan flows through the desert region and disappears into the Rann of Kachchh?",
    "राजस्थान की कौन सी नदी मरुस्थलीय क्षेत्र से होकर Rann of Kachchh में लुप्त हो जाती है?",
    ["Chambal", "Luni", "Banas", "Mahi"],
    1,
    "The Luni flows through Rajasthan and ultimately drains toward the Rann of Kachchh."
);

q(
    "Geography",
    "The largest delta in the world is formed by the:",
    "विश्व का सबसे बड़ा delta किस नदी तंत्र द्वारा बनाया गया है?",
    ["Indus", "Ganga-Brahmaputra", "Narmada", "Godavari"],
    1,
    "The Ganga-Brahmaputra river system forms the world's largest delta."
);

q(
    "Geography",
    "Narmada and Tapi are notable among Indian rivers because they:",
    "Narmada और Tapi भारतीय नदियों में किस विशेषता के लिए जानी जाती हैं?",
    ["Flow eastward", "Flow westward through rift valleys", "Originate in the Himalayas", "Form inland lakes"],
    1,
    "Both rivers flow westward through rift valleys before entering the Arabian Sea."
);

q(
    "Geography",
    "The Aravalli Range is generally considered one of the:",
    "Aravalli Range को सामान्यतः किस प्रकार की पर्वत श्रेणी माना जाता है?",
    ["Youngest fold mountains", "Oldest fold mountain systems", "Volcanic mountains", "Block mountains"],
    1,
    "The Aravalli system is among the oldest fold mountain systems in the world."
);

q(
    "Geography",
    "Guru Shikhar, the highest point of the Aravalli Range, is located in:",
    "Aravalli Range की highest point Guru Shikhar कहाँ स्थित है?",
    ["Mount Abu", "Udaipur", "Jaisalmer", "Ajmer"],
    0,
    "Guru Shikhar is located near Mount Abu in Rajasthan."
);

q(
    "Geography",
    "Karakoram Pass is located in the region of:",
    "Karakoram Pass किस क्षेत्र में स्थित है?",
    ["Ladakh", "Sikkim", "Uttarakhand", "Arunachal Pradesh"],
    0,
    "Karakoram Pass is located in the Ladakh region."
);

q(
    "Geography",
    "Nathu La Pass connects Sikkim with:",
    "Nathu La Pass Sikkim को किस क्षेत्र से जोड़ता है?",
    ["Nepal", "Bhutan", "Tibet", "Myanmar"],
    2,
    "Nathu La is a mountain pass connecting Sikkim with Tibet."
);

q(
    "Geography",
    "The Tropic of Cancer passes through which of the following states?",
    "Tropic of Cancer निम्नलिखित में से किस राज्य से होकर गुजरती है?",
    ["Kerala", "Madhya Pradesh", "Punjab", "Tamil Nadu"],
    1,
    "The Tropic of Cancer passes through Madhya Pradesh among these options."
);

q(
    "Geography",
    "Which Indian state has one of the highest proportions of forest cover relative to its geographical area?",
    "किस भारतीय राज्य में उसके भौगोलिक क्षेत्रफल की तुलना में forest cover का अनुपात बहुत अधिक है?",
    ["Haryana", "Mizoram", "Rajasthan", "Punjab"],
    1,
    "Mizoram has a very high proportion of its geographical area under forest cover."
);

q(
    "Geography",
    "The Meghalaya Plateau is an extension of the:",
    "Meghalaya Plateau किसका विस्तार माना जाता है?",
    ["Peninsular Plateau", "Himalayas", "Deccan Trap", "Aravalli Range"],
    0,
    "The Meghalaya Plateau is considered an extension of the Peninsular Plateau."
);

q(
    "Geography",
    "Shillong is the capital of:",
    "Shillong किस राज्य की राजधानी है?",
    ["Nagaland", "Meghalaya", "Mizoram", "Tripura"],
    1,
    "Shillong is the capital of Meghalaya."
);

q(
    "Geography",
    "Laterite soil is generally formed under conditions of:",
    "Laterite soil सामान्यतः किन परिस्थितियों में बनती है?",
    ["Low rainfall and cold climate", "High temperature and heavy rainfall", "Desert climate", "Tundra climate"],
    1,
    "Heavy rainfall and high temperatures promote intense leaching and laterite formation."
);

q(
    "Geography",
    "Alluvial soil in northern India is mainly deposited by:",
    "Northern India की alluvial soil मुख्य रूप से किसके द्वारा जमा की गई है?",
    ["Wind", "Rivers", "Glaciers", "Volcanic eruptions"],
    1,
    "The major river systems deposit alluvial sediments across the northern plains."
);

q(
    "Geography",
    "The retreating monsoon season is especially important for rainfall in:",
    "Retreating monsoon season किस क्षेत्र में वर्षा के लिए विशेष रूप से महत्वपूर्ण है?",
    ["Punjab", "Tamil Nadu", "Rajasthan", "Gujarat"],
    1,
    "Tamil Nadu receives a substantial share of its rainfall from the northeast or retreating monsoon."
);

q(
    "Geography",
    "The southwest monsoon normally first reaches the Indian mainland in:",
    "Southwest monsoon सामान्यतः भारत की mainland पर सबसे पहले कहाँ पहुँचता है?",
    ["Gujarat", "Kerala", "West Bengal", "Odisha"],
    1,
    "The southwest monsoon normally reaches Kerala first."
);

q(
    "Geography",
    "The region east of the Western Ghats may experience relatively low rainfall because of:",
    "Western Ghats के पूर्वी भाग में अपेक्षाकृत कम वर्षा का प्रमुख कारण क्या है?",
    ["Cyclonic activity", "Rain-shadow effect", "Ocean currents", "Glacial winds"],
    1,
    "The eastern side lies partly in the rain-shadow region of the Western Ghats."
);

q(
    "Geography",
    "The Godavari is often called the:",
    "Godavari को अक्सर किस नाम से जाना जाता है?",
    ["Sorrow of Bengal", "Dakshin Ganga", "River of Gold", "Eastern Narmada"],
    1,
    "The Godavari is popularly known as the Dakshin Ganga or Ganga of the South."
);

q(
    "Geography",
    "The Mahanadi ultimately drains into the:",
    "Mahanadi अंततः किसमें गिरती है?",
    ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Gulf of Kachchh"],
    1,
    "The Mahanadi drains into the Bay of Bengal."
);

q(
    "Geography",
    "Which river basin is the largest in India?",
    "भारत में सबसे बड़ा river basin किस नदी का है?",
    ["Godavari", "Ganga", "Krishna", "Narmada"],
    1,
    "The Ganga basin is the largest river basin in India."
);

q(
    "Geography",
    "Indira Point is located on:",
    "Indira Point कहाँ स्थित है?",
    ["Little Andaman", "Great Nicobar Island", "Car Nicobar", "Minicoy"],
    1,
    "Indira Point is located on Great Nicobar Island."
);

q(
    "Geography",
    "Lakshadweep islands are primarily of which geological origin?",
    "Lakshadweep islands मुख्य रूप से किस geological origin के हैं?",
    ["Volcanic", "Coral", "Glacial", "Riverine"],
    1,
    "The Lakshadweep islands are mainly coral atolls and reefs."
);

q(
    "Geography",
    "The Ten Degree Channel separates:",
    "Ten Degree Channel किनके बीच स्थित है?",
    ["Andaman and Nicobar groups", "Lakshadweep and Maldives", "India and Sri Lanka", "Gujarat and Diu"],
    0,
    "The Ten Degree Channel separates the Andaman group from the Nicobar group."
);

q(
    "Geography",
    "The Palk Strait separates India from:",
    "Palk Strait भारत को किस देश से अलग करती है?",
    ["Myanmar", "Sri Lanka", "Bangladesh", "Maldives"],
    1,
    "The Palk Strait lies between southeastern India and Sri Lanka."
);

q(
    "Geography",
    "Zoji La is strategically important because it connects:",
    "Zoji La रणनीतिक रूप से महत्वपूर्ण है क्योंकि यह किसे जोड़ता है?",
    ["Kashmir Valley and Ladakh", "Sikkim and Tibet", "Assam and Arunachal Pradesh", "Rajasthan and Gujarat"],
    0,
    "Zoji La provides an important route between the Kashmir Valley and Ladakh."
);

q(
    "Geography",
    "The Thar Desert is mainly located in:",
    "Thar Desert मुख्य रूप से कहाँ स्थित है?",
    ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Odisha"],
    0,
    "The Thar Desert occupies much of western Rajasthan."
);

q(
    "Geography",
    "Ladakh is often described as a:",
    "Ladakh को अक्सर किस प्रकार का क्षेत्र कहा जाता है?",
    ["Hot desert", "Cold desert", "Coastal desert", "Tropical desert"],
    1,
    "Ladakh is a high-altitude cold desert."
);

q(
    "Geography",
    "The Brahmaputra is an example of an antecedent river because it:",
    "Brahmaputra को antecedent river क्यों माना जाता है?",
    ["Originated in a desert", "Maintained its course while mountains rose", "Flows only underground", "Has no tributaries"],
    1,
    "An antecedent river maintains its course despite uplift of mountain ranges."
);

q(
    "Geography",
    "Mawsynram is famous for receiving:",
    "Mawsynram किसके लिए प्रसिद्ध है?",
    ["Very low rainfall", "Extremely high rainfall", "Snowfall throughout the year", "Dust storms"],
    1,
    "Mawsynram in Meghalaya is famous for exceptionally high annual rainfall."
);

q(
    "Geography",
    "El Niño is generally associated with:",
    "El Niño सामान्यतः किससे संबंधित है?",
    ["Unusual warming of central/eastern tropical Pacific", "Cooling of Atlantic Ocean", "Warming of Arctic Ocean", "Cooling of Indian Ocean only"],
    0,
    "El Niño involves unusual warming of the central and eastern tropical Pacific Ocean."
);

q(
    "Geography",
    "La Niña is generally associated with:",
    "La Niña सामान्यतः किससे संबंधित है?",
    ["Cooling of central/eastern tropical Pacific", "Warming of Mediterranean Sea", "Cooling of Arctic Ocean", "Warming of Atlantic Ocean"],
    0,
    "La Niña is characterized by cooler-than-normal sea-surface temperatures in the central and eastern tropical Pacific."
);

q(
    "Geography",
    "The continental shelf is best described as:",
    "Continental shelf को सबसे सही रूप में कैसे परिभाषित किया जाता है?",
    ["Deepest part of an ocean", "Gently sloping submerged extension of a continent", "Ocean trench", "Mid-ocean ridge"],
    1,
    "The continental shelf is the shallow, gently sloping submerged extension of a continent."
);


// =====================================================
// END OF GEOGRAPHY — 50 QUESTIONS
// =====================================================// =====================================================
// SCIENCE — 50 HARD QUESTIONS
// =====================================================

q(
    "Science",
    "Which enzyme present in saliva begins the digestion of starch?",
    "लार में उपस्थित कौन सा enzyme starch का digestion शुरू करता है?",
    ["Pepsin", "Amylase", "Trypsin", "Lipase"],
    1,
    "Salivary amylase begins the digestion of starch in the mouth."
);

q(
    "Science",
    "The functional unit of the human kidney is:",
    "मानव kidney की functional unit क्या है?",
    ["Neuron", "Nephron", "Alveolus", "Villus"],
    1,
    "The nephron is the structural and functional unit of the kidney."
);

q(
    "Science",
    "Which type of white blood cells is mainly involved in antibody production?",
    "कौन सी white blood cells मुख्य रूप से antibodies बनाने में involved होती हैं?",
    ["Red blood cells", "Lymphocytes", "Platelets", "Neutrophils"],
    1,
    "B-lymphocytes produce antibodies as part of the immune response."
);

q(
    "Science",
    "The natural pacemaker of the human heart is:",
    "मानव हृदय का natural pacemaker क्या है?",
    ["AV node", "SA node", "Bundle of His", "Purkinje fibres"],
    1,
    "The sinoatrial (SA) node initiates the normal heartbeat."
);

q(
    "Science",
    "Which vitamin plays an important role in blood clotting?",
    "Blood clotting में कौन सा vitamin महत्वपूर्ण भूमिका निभाता है?",
    ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    2,
    "Vitamin K is essential for the synthesis of several clotting factors."
);

q(
    "Science",
    "Insulin is secreted by which cells of the pancreas?",
    "Insulin pancreas की किन cells द्वारा secreted होता है?",
    ["Alpha cells", "Beta cells", "Delta cells", "Acinar cells"],
    1,
    "Beta cells of the Islets of Langerhans secrete insulin."
);

q(
    "Science",
    "Which hormone generally increases blood glucose level?",
    "कौन सा hormone सामान्यतः blood glucose level बढ़ाता है?",
    ["Insulin", "Glucagon", "Melatonin", "Oxytocin"],
    1,
    "Glucagon raises blood glucose levels by promoting glucose release into the blood."
);

q(
    "Science",
    "The basic structural and functional unit of the nervous system is:",
    "Nervous system की basic structural और functional unit क्या है?",
    ["Neuron", "Nephron", "Hormone", "Synapse"],
    0,
    "The neuron is the basic structural and functional unit of the nervous system."
);

q(
    "Science",
    "Which part of the brain is mainly responsible for coordination and balance?",
    "Brain का कौन सा भाग मुख्य रूप से coordination और balance के लिए responsible है?",
    ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    1,
    "The cerebellum coordinates movement, posture and balance."
);

q(
    "Science",
    "The medulla oblongata controls many:",
    "Medulla oblongata मुख्य रूप से किन functions को control करता है?",
    ["Voluntary movements", "Involuntary vital functions", "Memory functions", "Vision functions"],
    1,
    "The medulla regulates vital involuntary functions such as breathing and heart rate."
);

q(
    "Science",
    "A person with blood group AB+ can generally receive red blood cells from:",
    "AB+ blood group वाला व्यक्ति सामान्यतः red blood cells किससे receive कर सकता है?",
    ["Only AB+", "Only O−", "All ABO/Rh groups", "Only A+"],
    2,
    "AB+ is considered the universal recipient for red blood cell transfusions."
);

q(
    "Science",
    "Which blood component is primarily responsible for clot formation?",
    "Blood का कौन सा component मुख्य रूप से clot formation के लिए responsible है?",
    ["Plasma", "Platelets", "Red blood cells", "Lymph"],
    1,
    "Platelets play a central role in blood clot formation."
);

q(
    "Science",
    "The SI unit of electric charge is:",
    "Electric charge की SI unit क्या है?",
    ["Volt", "Coulomb", "Ampere", "Ohm"],
    1,
    "The SI unit of electric charge is the coulomb."
);

q(
    "Science",
    "The SI unit of power is:",
    "Power की SI unit क्या है?",
    ["Joule", "Watt", "Newton", "Pascal"],
    1,
    "Power is measured in watts."
);

q(
    "Science",
    "The SI unit of pressure is:",
    "Pressure की SI unit क्या है?",
    ["Newton", "Pascal", "Joule", "Watt"],
    1,
    "The SI unit of pressure is the pascal."
);

q(
    "Science",
    "The dimensional formula of force is:",
    "Force का dimensional formula क्या है?",
    ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "M⁰LT⁻²"],
    1,
    "Force = mass × acceleration, giving the dimensional formula MLT⁻²."
);

q(
    "Science",
    "The approximate escape velocity from the Earth's surface is:",
    "Earth की surface से approximate escape velocity कितनी है?",
    ["5.6 km/s", "8.4 km/s", "11.2 km/s", "15.6 km/s"],
    2,
    "The escape velocity from Earth is approximately 11.2 km/s."
);

q(
    "Science",
    "According to Coulomb's law, electrostatic force is proportional to:",
    "Coulomb's law के अनुसार electrostatic force किसके proportional होता है?",
    ["Product of charges and inverse square of distance", "Only distance", "Square of charge only", "Mass of particles"],
    0,
    "Coulomb's law states that force is proportional to q1q2/r²."
);

q(
    "Science",
    "Faraday's law of electromagnetic induction is the operating principle of:",
    "Faraday's law of electromagnetic induction किस device के principle पर आधारित है?",
    ["Electric generator", "Electric heater", "Fuse", "Battery"],
    0,
    "Electric generators operate using electromagnetic induction."
);

q(
    "Science",
    "A transformer works on the principle of:",
    "Transformer किस principle पर काम करता है?",
    ["Electrolysis", "Mutual electromagnetic induction", "Photoelectric effect", "Thermionic emission"],
    1,
    "A transformer operates through mutual electromagnetic induction."
);

q(
    "Science",
    "Which lens is used to correct myopia?",
    "Myopia को correct करने के लिए कौन सा lens use किया जाता है?",
    ["Convex lens", "Concave lens", "Cylindrical lens only", "Plane glass"],
    1,
    "A concave lens diverges incoming rays and corrects myopia."
);

q(
    "Science",
    "Hypermetropia is commonly corrected using a:",
    "Hypermetropia को सामान्यतः किस lens से correct किया जाता है?",
    ["Concave lens", "Convex lens", "Plane mirror", "Concave mirror"],
    1,
    "A convex lens converges light and helps correct hypermetropia."
);

q(
    "Science",
    "The blue colour of the sky is mainly due to:",
    "आकाश का blue colour मुख्य रूप से किस कारण दिखाई देता है?",
    ["Reflection", "Rayleigh scattering", "Refraction", "Diffraction"],
    1,
    "Shorter wavelengths such as blue are scattered more strongly by atmospheric molecules."
);

q(
    "Science",
    "The ozone layer is mainly present in the:",
    "Ozone layer मुख्य रूप से किस atmospheric layer में स्थित है?",
    ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    1,
    "The ozone layer is concentrated mainly in the stratosphere."
);

q(
    "Science",
    "Acid rain is strongly associated with atmospheric emissions of:",
    "Acid rain मुख्य रूप से किन atmospheric emissions से संबंधित है?",
    ["Oxygen and nitrogen", "Sulfur dioxide and nitrogen oxides", "Hydrogen and helium", "Carbon and hydrogen only"],
    1,
    "Sulfur dioxide and nitrogen oxides form acids in the atmosphere."
);

q(
    "Science",
    "Rusting of iron requires the presence of:",
    "Iron के rusting के लिए किनकी presence आवश्यक होती है?",
    ["Only nitrogen", "Oxygen and moisture", "Only carbon dioxide", "Only sunlight"],
    1,
    "Rusting requires oxygen and water/moisture."
);

q(
    "Science",
    "Galvanization protects iron from corrosion by coating it with:",
    "Galvanization में iron को corrosion से बचाने के लिए किस metal की coating की जाती है?",
    ["Copper", "Zinc", "Tin", "Aluminium"],
    1,
    "Galvanization commonly protects iron by coating it with zinc."
);

q(
    "Science",
    "The atomic number of chlorine is:",
    "Chlorine का atomic number क्या है?",
    ["15", "16", "17", "18"],
    2,
    "Chlorine has atomic number 17."
);

q(
    "Science",
    "A neutral aqueous solution at 25°C has a pH of approximately:",
    "25°C पर neutral aqueous solution का pH approximately कितना होता है?",
    ["5", "6", "7", "8"],
    2,
    "At 25°C, a neutral aqueous solution has a pH of 7."
);

q(
    "Science",
    "The main acid present in gastric juice is:",
    "Gastric juice में मुख्य acid कौन सा होता है?",
    ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
    1,
    "Hydrochloric acid creates the acidic environment of the stomach."
);

q(
    "Science",
    "The major component of natural gas is:",
    "Natural gas का major component क्या है?",
    ["Ethane", "Methane", "Propane", "Butane"],
    1,
    "Methane is the major component of natural gas."
);

q(
    "Science",
    "Polyethylene is produced by polymerization of:",
    "Polyethylene किस monomer के polymerization से बनता है?",
    ["Ethene", "Ethane", "Ethyne", "Benzene"],
    0,
    "Polyethylene is formed by polymerization of ethene."
);

q(
    "Science",
    "Alcoholic fermentation of sugar mainly produces:",
    "Sugar की alcoholic fermentation से मुख्य रूप से क्या बनता है?",
    ["Methane and oxygen", "Ethanol and carbon dioxide", "Methanol and nitrogen", "Acetic acid and oxygen"],
    1,
    "Yeast converts sugars into ethanol and carbon dioxide during alcoholic fermentation."
);

q(
    "Science",
    "Which subatomic particle has no electric charge?",
    "किस subatomic particle पर कोई electric charge नहीं होता?",
    ["Proton", "Electron", "Neutron", "Positron"],
    2,
    "A neutron carries no net electric charge."
);

q(
    "Science",
    "The nucleus of an atom contains:",
    "Atom के nucleus में क्या पाया जाता है?",
    ["Only electrons", "Protons and neutrons", "Only neutrons", "Electrons and protons"],
    1,
    "The atomic nucleus contains protons and neutrons."
);

q(
    "Science",
    "The photoelectric effect provides strong evidence for the:",
    "Photoelectric effect किस concept का strong evidence देता है?",
    ["Wave nature of sound", "Particle nature of light", "Atomic nature of matter only", "Magnetic nature of electrons"],
    1,
    "The photoelectric effect supports the particle or photon nature of light."
);

q(
    "Science",
    "The SI unit of radioactivity is:",
    "Radioactivity की SI unit क्या है?",
    ["Gray", "Becquerel", "Tesla", "Sievert"],
    1,
    "The becquerel is the SI unit of radioactive activity."
);

q(
    "Science",
    "The SI unit of absorbed radiation dose is:",
    "Absorbed radiation dose की SI unit क्या है?",
    ["Becquerel", "Gray", "Tesla", "Coulomb"],
    1,
    "The gray is the SI unit of absorbed ionizing radiation dose."
);

q(
    "Science",
    "The SI unit of magnetic flux density is:",
    "Magnetic flux density की SI unit क्या है?",
    ["Weber", "Tesla", "Henry", "Gauss"],
    1,
    "Tesla is the SI unit of magnetic flux density."
);

q(
    "Science",
    "An electric generator converts:",
    "Electric generator किस energy conversion को करता है?",
    ["Electrical energy into mechanical energy", "Mechanical energy into electrical energy", "Chemical energy into heat", "Light energy into chemical energy"],
    1,
    "A generator converts mechanical energy into electrical energy."
);

q(
    "Science",
    "An electric motor converts:",
    "Electric motor किस energy conversion को करता है?",
    ["Electrical energy into mechanical energy", "Mechanical energy into electrical energy", "Chemical energy into nuclear energy", "Heat into light"],
    0,
    "An electric motor converts electrical energy into mechanical energy."
);

q(
    "Science",
    "The oxygen released during photosynthesis comes primarily from:",
    "Photosynthesis में release होने वाला oxygen मुख्य रूप से कहाँ से आता है?",
    ["Carbon dioxide", "Water", "Glucose", "Chlorophyll"],
    1,
    "The oxygen released during photosynthesis is derived from water through photolysis."
);

q(
    "Science",
    "The Calvin cycle of photosynthesis occurs mainly in the:",
    "Photosynthesis का Calvin cycle मुख्य रूप से कहाँ होता है?",
    ["Thylakoid membrane", "Stroma of chloroplast", "Nucleus", "Mitochondrial matrix"],
    1,
    "The Calvin cycle occurs in the stroma of chloroplasts."
);

q(
    "Science",
    "Which organelle is commonly called the powerhouse of the cell?",
    "किस organelle को cell का powerhouse कहा जाता है?",
    ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"],
    1,
    "Mitochondria generate most of the cell's ATP through cellular respiration."
);

q(
    "Science",
    "Which organelle is primarily responsible for protein synthesis?",
    "Protein synthesis के लिए मुख्य रूप से कौन सा organelle responsible है?",
    ["Ribosome", "Lysosome", "Vacuole", "Centrosome"],
    0,
    "Ribosomes are the primary sites of protein synthesis."
);

q(
    "Science",
    "DNA replication is described as:",
    "DNA replication को किस प्रकार का replication कहा जाता है?",
    ["Conservative", "Semi-conservative", "Dispersive only", "Random"],
    1,
    "DNA replication is semi-conservative because each daughter DNA molecule contains one parental strand."
);

q(
    "Science",
    "Which nitrogenous base is present in RNA but generally absent from DNA?",
    "RNA में कौन सा nitrogenous base पाया जाता है जो सामान्यतः DNA में नहीं होता?",
    ["Thymine", "Uracil", "Cytosine", "Guanine"],
    1,
    "RNA contains uracil instead of thymine."
);

q(
    "Science",
    "Which blood group is considered the universal donor for red blood cells?",
    "Red blood cells के लिए universal donor कौन सा blood group माना जाता है?",
    ["AB+", "A+", "O−", "B−"],
    2,
    "O− red blood cells lack A, B and Rh(D) antigens and are commonly considered the universal donor type."
);

q(
    "Science",
    "Deficiency of iodine commonly causes:",
    "Iodine की deficiency से सामान्यतः क्या होता है?",
    ["Scurvy", "Goitre", "Rickets", "Beriberi"],
    1,
    "Iodine deficiency can cause enlargement of the thyroid gland, known as goitre."
);

q(
    "Science",
    "Vitamin C deficiency causes:",
    "Vitamin C की deficiency से कौन सा disease होता है?",
    ["Rickets", "Scurvy", "Night blindness", "Pellagra"],
    1,
    "Vitamin C deficiency causes scurvy."
);

q(
    "Science",
    "Vitamin D deficiency in children can cause:",
    "बच्चों में Vitamin D की deficiency से क्या हो सकता है?",
    ["Scurvy", "Rickets", "Anaemia", "Goitre"],
    1,
    "Vitamin D deficiency can cause rickets in children."
);


// =====================================================
// END OF SCIENCE — 50 QUESTIONS
// =====================================================
