// 300 GK & GS QUESTIONS
// 50 Questions Per Category
// GK, Polity, History, Geography, Science, Economics

const questions = [];

function q(category, en, hi, options, answer) {
    questions.push({
        category: category,

        question: {
            en: en,
            hi: hi
        },

        options: options,

        answer: answer,

        explanation: {
            en: `Correct answer: ${options[answer]}.`,
            hi: `सही उत्तर: ${options[answer]}।`
        },

        hint: "Think carefully about the standard exam fact."
    });
}


/* =========================================================
   GENERAL KNOWLEDGE - 50
========================================================= */

q("GK", "What is the national animal of India?", "भारत का राष्ट्रीय पशु कौन सा है?", ["Tiger", "Lion", "Elephant", "Leopard"], 0);
q("GK", "What is the national bird of India?", "भारत का राष्ट्रीय पक्षी कौन सा है?", ["Peacock", "Sparrow", "Eagle", "Swan"], 0);
q("GK", "What is the national flower of India?", "भारत का राष्ट्रीय फूल कौन सा है?", ["Lotus", "Rose", "Sunflower", "Jasmine"], 0);
q("GK", "What is the capital of India?", "भारत की राजधानी क्या है?", ["New Delhi", "Mumbai", "Kolkata", "Chennai"], 0);
q("GK", "Who was the first President of India?", "भारत के प्रथम राष्ट्रपति कौन थे?", ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Sardar Patel"], 0);
q("GK", "Who was the first Prime Minister of India?", "भारत के प्रथम प्रधानमंत्री कौन थे?", ["Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad", "Lal Bahadur Shastri"], 0);
q("GK", "In which year did India become independent?", "भारत किस वर्ष स्वतंत्र हुआ?", ["1947", "1942", "1950", "1935"], 0);
q("GK", "Which is the largest ocean in the world?", "विश्व का सबसे बड़ा महासागर कौन सा है?", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], 0);
q("GK", "Which is the smallest continent?", "सबसे छोटा महाद्वीप कौन सा है?", ["Australia", "Europe", "Africa", "Asia"], 0);
q("GK", "What is the currency of Japan?", "जापान की मुद्रा क्या है?", ["Yen", "Dollar", "Won", "Euro"], 0);
q("GK", "What is the currency of the United Kingdom?", "यूनाइटेड किंगडम की मुद्रा क्या है?", ["Pound Sterling", "Euro", "Dollar", "Yen"], 0);
q("GK", "Which country is known as the Land of the Rising Sun?", "किस देश को उगते सूर्य की भूमि कहा जाता है?", ["Japan", "China", "India", "Thailand"], 0);
q("GK", "Which is the largest planet in our Solar System?", "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", ["Jupiter", "Saturn", "Earth", "Neptune"], 0);
q("GK", "Which planet is known as the Red Planet?", "लाल ग्रह किसे कहा जाता है?", ["Mars", "Venus", "Jupiter", "Mercury"], 0);
q("GK", "How many planets are in the Solar System?", "सौरमंडल में कितने ग्रह हैं?", ["8", "7", "9", "10"], 0);
q("GK", "Which is the largest mammal?", "सबसे बड़ा स्तनपायी कौन सा है?", ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"], 0);
q("GK", "Which is the fastest land animal?", "सबसे तेज दौड़ने वाला स्थलीय जानवर कौन सा है?", ["Cheetah", "Lion", "Tiger", "Horse"], 0);
q("GK", "Which is the largest democracy in the world?", "विश्व का सबसे बड़ा लोकतंत्र कौन सा है?", ["India", "USA", "China", "Brazil"], 0);
q("GK", "Which is the highest civilian award of India?", "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?", ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"], 0);
q("GK", "What is the national aquatic animal of India?", "भारत का राष्ट्रीय जलीय जीव कौन सा है?", ["Ganges River Dolphin", "Blue Whale", "Crocodile", "Turtle"], 0);
q("GK", "What is the national tree of India?", "भारत का राष्ट्रीय वृक्ष कौन सा है?", ["Banyan", "Neem", "Peepal", "Mango"], 0);
q("GK", "What is the national fruit of India?", "भारत का राष्ट्रीय फल कौन सा है?", ["Mango", "Apple", "Banana", "Orange"], 0);
q("GK", "What is the national game of India officially?", "भारत का आधिकारिक राष्ट्रीय खेल कौन सा है?", ["No officially declared national game", "Hockey", "Cricket", "Football"], 0);
q("GK", "Who wrote the national anthem of India?", "भारत का राष्ट्रगान किसने लिखा?", ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Subhas Chandra Bose"], 0);
q("GK", "Who wrote Vande Mataram?", "वंदे मातरम् किसने लिखा?", ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Mahatma Gandhi", "Sarojini Naidu"], 0);
q("GK", "What is the national song of India?", "भारत का राष्ट्रीय गीत कौन सा है?", ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Ae Mere Watan"], 0);
q("GK", "Which is the largest desert in the world?", "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?", ["Antarctic Desert", "Sahara Desert", "Gobi Desert", "Thar Desert"], 0);
q("GK", "Which is the largest hot desert?", "सबसे बड़ा गर्म रेगिस्तान कौन सा है?", ["Sahara Desert", "Thar Desert", "Gobi Desert", "Kalahari"], 0);
q("GK", "Which is the longest river in the world traditionally regarded?", "परंपरागत रूप से विश्व की सबसे लंबी नदी कौन सी मानी जाती है?", ["Nile", "Amazon", "Yangtze", "Mississippi"], 0);
q("GK", "Which is the largest country by area?", "क्षेत्रफल के आधार पर सबसे बड़ा देश कौन सा है?", ["Russia", "Canada", "China", "USA"], 0);
q("GK", "Which is the smallest country in the world?", "विश्व का सबसे छोटा देश कौन सा है?", ["Vatican City", "Monaco", "Maldives", "San Marino"], 0);
q("GK", "Which is the largest continent?", "सबसे बड़ा महाद्वीप कौन सा है?", ["Asia", "Africa", "Europe", "North America"], 0);
q("GK", "Which is the deepest ocean?", "सबसे गहरा महासागर कौन सा है?", ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], 0);
q("GK", "Which instrument measures atmospheric pressure?", "वायुमंडलीय दबाव किस यंत्र से मापा जाता है?", ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], 0);
q("GK", "Which instrument measures temperature?", "तापमान किस यंत्र से मापा जाता है?", ["Thermometer", "Barometer", "Seismograph", "Hygrometer"], 0);
q("GK", "Which instrument measures earthquakes?", "भूकंप को मापने वाला यंत्र कौन सा है?", ["Seismograph", "Barometer", "Thermometer", "Ammeter"], 0);
q("GK", "Which gas is most abundant in Earth's atmosphere?", "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?", ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], 0);
q("GK", "Which is the nearest star to Earth?", "पृथ्वी के सबसे निकट तारा कौन सा है?", ["Sun", "Sirius", "Polaris", "Proxima Centauri"], 0);
q("GK", "Which is the largest internal organ of the human body?", "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?", ["Liver", "Heart", "Lung", "Kidney"], 0);
q("GK", "Which blood group is known as universal donor for red cells?", "लाल रक्त कोशिकाओं के लिए सार्वभौमिक दाता रक्त समूह कौन सा है?", ["O Negative", "AB Positive", "A Positive", "B Negative"], 0);
q("GK", "Which blood group is known as universal recipient for red cells?", "लाल रक्त कोशिकाओं के लिए सार्वभौमिक प्राप्तकर्ता रक्त समूह कौन सा है?", ["AB Positive", "O Negative", "A Negative", "B Positive"], 0);
q("GK", "How many bones are there in an adult human body approximately?", "एक वयस्क मानव शरीर में लगभग कितनी हड्डियां होती हैं?", ["206", "208", "201", "210"], 0);
q("GK", "How many chambers does the human heart have?", "मानव हृदय में कितने कक्ष होते हैं?", ["4", "2", "3", "5"], 0);
q("GK", "Which vitamin is produced in the skin by sunlight?", "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?", ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"], 0);
q("GK", "Which metal is liquid at room temperature?", "कमरे के तापमान पर कौन सी धातु तरल होती है?", ["Mercury", "Iron", "Copper", "Aluminium"], 0);
q("GK", "What is the SI unit of electric current?", "विद्युत धारा की SI इकाई क्या है?", ["Ampere", "Volt", "Ohm", "Watt"], 0);
q("GK", "What is the SI unit of force?", "बल की SI इकाई क्या है?", ["Newton", "Joule", "Watt", "Pascal"], 0);
q("GK", "What is the SI unit of power?", "शक्ति की SI इकाई क्या है?", ["Watt", "Joule", "Newton", "Volt"], 0);
q("GK", "What is the SI unit of energy?", "ऊर्जा की SI इकाई क्या है?", ["Joule", "Watt", "Newton", "Pascal"], 0);
q("GK", "Which planet is closest to the Sun?", "सूर्य के सबसे निकट ग्रह कौन सा है?", ["Mercury", "Venus", "Earth", "Mars"], 0);
q("GK", "Which planet is known as Earth's twin?", "पृथ्वी की जुड़वां बहन किस ग्रह को कहा जाता है?", ["Venus", "Mars", "Mercury", "Jupiter"], 0);


/* =========================================================
   INDIAN POLITY - 50
========================================================= */

q("Polity", "When did the Constitution of India come into effect?", "भारत का संविधान कब लागू हुआ?", ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"], 0);
q("Polity", "Who was the Chairman of the Drafting Committee?", "प्रारूप समिति के अध्यक्ष कौन थे?", ["Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"], 0);
q("Polity", "What is the minimum age to become President of India?", "भारत का राष्ट्रपति बनने की न्यूनतम आयु कितनी है?", ["35 years", "30 years", "25 years", "40 years"], 0);
q("Polity", "In which Part are Fundamental Rights given?", "मौलिक अधिकार संविधान के किस भाग में हैं?", ["Part III", "Part II", "Part IV", "Part V"], 0);
q("Polity", "How many Fundamental Rights are currently guaranteed?", "वर्तमान में कितने मौलिक अधिकार हैं?", ["6", "7", "8", "5"], 0);
q("Polity", "Who is the constitutional head of India?", "भारत का संवैधानिक प्रमुख कौन है?", ["President", "Prime Minister", "Chief Justice", "Vice President"], 0);
q("Polity", "Lok Sabha is also known as?", "लोकसभा को और किस नाम से जाना जाता है?", ["House of the People", "Council of States", "Upper House", "Federal House"], 0);
q("Polity", "What is the normal term of Lok Sabha?", "लोकसभा का सामान्य कार्यकाल कितना है?", ["5 years", "6 years", "4 years", "3 years"], 0);
q("Polity", "Who appoints the Prime Minister of India?", "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?", ["President", "Chief Justice", "Lok Sabha Speaker", "Vice President"], 0);
q("Polity", "Who is the ex-officio Chairman of Rajya Sabha?", "राज्यसभा का पदेन सभापति कौन होता है?", ["Vice President", "President", "Prime Minister", "Speaker"], 0);
q("Polity", "What is the maximum strength of Lok Sabha?", "लोकसभा की अधिकतम सदस्य संख्या कितनी है?", ["552", "545", "550", "543"], 0);
q("Polity", "What is the minimum age for Lok Sabha membership?", "लोकसभा सदस्य बनने की न्यूनतम आयु कितनी है?", ["25 years", "21 years", "30 years", "35 years"], 0);
q("Polity", "What is the minimum age for Rajya Sabha membership?", "राज्यसभा सदस्य बनने की न्यूनतम आयु कितनी है?", ["30 years", "25 years", "35 years", "21 years"], 0);
q("Polity", "Who presides over Lok Sabha?", "लोकसभा की अध्यक्षता कौन करता है?", ["Speaker", "President", "Vice President", "Prime Minister"], 0);
q("Polity", "Who is the highest law officer of India?", "भारत का सर्वोच्च विधि अधिकारी कौन है?", ["Attorney General", "Solicitor General", "Chief Justice", "Law Minister"], 0);
q("Polity", "Who is the head of the Union Council of Ministers?", "केंद्रीय मंत्रिपरिषद का प्रमुख कौन है?", ["Prime Minister", "President", "Home Minister", "Speaker"], 0);
q("Polity", "Which Article deals with equality before law?", "कानून के समक्ष समानता किस अनुच्छेद में है?", ["Article 14", "Article 19", "Article 21", "Article 32"], 0);
q("Polity", "Which Article protects life and personal liberty?", "जीवन और व्यक्तिगत स्वतंत्रता की सुरक्षा किस अनुच्छेद में है?", ["Article 21", "Article 14", "Article 19", "Article 22"], 0);
q("Polity", "Which Article is known as the Right to Constitutional Remedies?", "संवैधानिक उपचार का अधिकार किस अनुच्छेद में है?", ["Article 32", "Article 21", "Article 19", "Article 14"], 0);
q("Polity", "Who called Article 32 the heart and soul of the Constitution?", "अनुच्छेद 32 को संविधान का हृदय और आत्मा किसने कहा?", ["Dr. B. R. Ambedkar", "Mahatma Gandhi", "Nehru", "Rajendra Prasad"], 0);
q("Polity", "Which part contains Directive Principles of State Policy?", "राज्य के नीति निदेशक तत्व किस भाग में हैं?", ["Part IV", "Part III", "Part V", "Part II"], 0);
q("Polity", "Fundamental Duties are mentioned in which Article?", "मौलिक कर्तव्य किस अनुच्छेद में हैं?", ["Article 51A", "Article 32", "Article 14", "Article 21"], 0);
q("Polity", "How many Fundamental Duties are there?", "मौलिक कर्तव्यों की संख्या कितनी है?", ["11", "10", "12", "9"], 0);
q("Polity", "Who appoints the Governor of a state?", "राज्यपाल की नियुक्ति कौन करता है?", ["President", "Prime Minister", "Chief Minister", "Chief Justice"], 0);
q("Polity", "What is the normal term of a State Legislative Assembly?", "राज्य विधानसभा का सामान्य कार्यकाल कितना है?", ["5 years", "6 years", "4 years", "3 years"], 0);
q("Polity", "Who is the constitutional head of a state?", "राज्य का संवैधानिक प्रमुख कौन है?", ["Governor", "Chief Minister", "President", "Speaker"], 0);
q("Polity", "Who is the real executive head of a state?", "राज्य का वास्तविक कार्यपालिका प्रमुख कौन है?", ["Chief Minister", "Governor", "President", "Chief Secretary"], 0);
q("Polity", "Who appoints the Chief Minister of a state?", "राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?", ["Governor", "President", "Prime Minister", "Speaker"], 0);
q("Polity", "Who is the supreme commander of the Armed Forces of India?", "भारत की सशस्त्र सेनाओं का सर्वोच्च सेनापति कौन है?", ["President", "Prime Minister", "Defence Minister", "Army Chief"], 0);
q("Polity", "Which body conducts elections in India?", "भारत में चुनाव कौन कराता है?", ["Election Commission of India", "Parliament", "Supreme Court", "Home Ministry"], 0);
q("Polity", "What is the voting age in India?", "भारत में मतदान की आयु कितनी है?", ["18 years", "21 years", "25 years", "20 years"], 0);
q("Polity", "Which amendment lowered voting age from 21 to 18?", "मतदान की आयु 21 से 18 वर्ष किस संशोधन से हुई?", ["61st Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"], 0);
q("Polity", "Which institution is called the guardian of the Constitution?", "संविधान का संरक्षक किसे कहा जाता है?", ["Supreme Court", "Parliament", "President", "Election Commission"], 0);
q("Polity", "What is the highest court in India?", "भारत का सर्वोच्च न्यायालय कौन सा है?", ["Supreme Court", "High Court", "District Court", "Sessions Court"], 0);
q("Polity", "Who appoints the Chief Justice of India?", "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?", ["President", "Prime Minister", "Parliament", "Law Minister"], 0);
q("Polity", "What is the retirement age of Supreme Court judges?", "सर्वोच्च न्यायालय के न्यायाधीश की सेवानिवृत्ति आयु क्या है?", ["65 years", "62 years", "60 years", "70 years"], 0);
q("Polity", "What is the retirement age of High Court judges?", "उच्च न्यायालय के न्यायाधीश की सेवानिवृत्ति आयु क्या है?", ["62 years", "65 years", "60 years", "58 years"], 0);
q("Polity", "Which house is permanent and cannot be dissolved?", "कौन सा सदन स्थायी है और भंग नहीं होता?", ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Legislative Council"], 0);
q("Polity", "One-third members of Rajya Sabha retire after every?", "राज्यसभा के एक-तिहाई सदस्य कितने समय बाद सेवानिवृत्त होते हैं?", ["2 years", "3 years", "5 years", "6 years"], 0);
q("Polity", "Who certifies a bill as a Money Bill?", "किसी विधेयक को धन विधेयक के रूप में कौन प्रमाणित करता है?", ["Lok Sabha Speaker", "President", "Prime Minister", "Rajya Sabha Chairman"], 0);
q("Polity", "A Money Bill can be introduced only in which house?", "धन विधेयक केवल किस सदन में पेश किया जा सकता है?", ["Lok Sabha", "Rajya Sabha", "Either House", "State Assembly only"], 0);
q("Polity", "Who presides over a joint sitting of Parliament?", "संसद की संयुक्त बैठक की अध्यक्षता कौन करता है?", ["Lok Sabha Speaker", "President", "Vice President", "Prime Minister"], 0);
q("Polity", "Which body replaced the Planning Commission?", "योजना आयोग का स्थान किस संस्था ने लिया?", ["NITI Aayog", "Finance Commission", "UPSC", "RBI"], 0);
q("Polity", "Which constitutional body recommends distribution of taxes?", "करों के वितरण की सिफारिश कौन करता है?", ["Finance Commission", "Election Commission", "UPSC", "NITI Aayog"], 0);
q("Polity", "Who is the Chairman of UPSC?", "UPSC का अध्यक्ष कौन होता है?", ["Chairman appointed by President", "Prime Minister", "Chief Justice", "Home Minister"], 0);
q("Polity", "Which schedule contains languages recognized by the Constitution?", "संविधान की किस अनुसूची में मान्यता प्राप्त भाषाएं हैं?", ["Eighth Schedule", "Seventh Schedule", "Ninth Schedule", "Tenth Schedule"], 0);
q("Polity", "Which schedule deals with anti-defection?", "दल-बदल विरोधी कानून किस अनुसूची में है?", ["Tenth Schedule", "Eighth Schedule", "Ninth Schedule", "Fifth Schedule"], 0);
q("Polity", "Which amendment added Panchayati Raj institutions?", "पंचायती राज संस्थाओं को संवैधानिक दर्जा किस संशोधन से मिला?", ["73rd Amendment", "74th Amendment", "42nd Amendment", "61st Amendment"], 0);
q("Polity", "Which amendment deals with municipalities?", "नगरपालिकाओं से संबंधित संशोधन कौन सा है?", ["74th Amendment", "73rd Amendment", "42nd Amendment", "44th Amendment"], 0);
q("Polity", "The Constitution of India was adopted on which date?", "भारत का संविधान किस तारीख को अपनाया गया?", ["26 November 1949", "26 January 1950", "15 August 1947", "9 December 1946"], 0);


/* =========================================================
   HISTORY - 50
========================================================= */

q("History", "Who founded the Maurya Empire?", "मौर्य साम्राज्य की स्थापना किसने की?", ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"], 0);
q("History", "Who founded the Mughal Empire in India?", "भारत में मुगल साम्राज्य की स्थापना किसने की?", ["Babur", "Akbar", "Humayun", "Shah Jahan"], 0);
q("History", "Who built the Taj Mahal?", "ताजमहल का निर्माण किसने करवाया?", ["Shah Jahan", "Akbar", "Jahangir", "Aurangzeb"], 0);
q("History", "Who is known as the Iron Man of India?", "भारत के लौह पुरुष के रूप में किसे जाना जाता है?", ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"], 0);
q("History", "Who popularized the slogan Jai Hind?", "जय हिंद को लोकप्रिय बनाने का श्रेय किसे दिया जाता है?", ["Subhas Chandra Bose", "Mahatma Gandhi", "Nehru", "Bhagat Singh"], 0);
q("History", "The First Battle of Panipat was fought in which year?", "पानीपत का प्रथम युद्ध किस वर्ष हुआ?", ["1526", "1556", "1761", "1857"], 0);
q("History", "Who played a major role in founding the Indian National Congress?", "भारतीय राष्ट्रीय कांग्रेस की स्थापना में प्रमुख भूमिका किसकी थी?", ["A. O. Hume", "Lord Curzon", "Lord Mountbatten", "W. C. Banerjee"], 0);
q("History", "Who led the Dandi March?", "दांडी मार्च का नेतृत्व किसने किया?", ["Mahatma Gandhi", "Nehru", "Sardar Patel", "Subhas Bose"], 0);
q("History", "In which year was the Quit India Movement launched?", "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ?", ["1942", "1930", "1920", "1947"], 0);
q("History", "Who is generally regarded as the founder of the Gupta dynasty?", "गुप्त वंश का संस्थापक सामान्यतः किसे माना जाता है?", ["Sri Gupta", "Chandragupta I", "Samudragupta", "Skandagupta"], 0);
q("History", "Who was known as the Father of the Nation in India?", "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?", ["Mahatma Gandhi", "Nehru", "Patel", "Bose"], 0);
q("History", "Who gave the slogan Do or Die?", "करो या मरो का नारा किसने दिया?", ["Mahatma Gandhi", "Subhas Bose", "Bhagat Singh", "Nehru"], 0);
q("History", "Who gave the slogan Inquilab Zindabad?", "इंकलाब जिंदाबाद का नारा किससे जुड़ा है?", ["Bhagat Singh", "Gandhi", "Nehru", "Patel"], 0);
q("History", "Who founded the Slave Dynasty?", "गुलाम वंश की स्थापना किसने की?", ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Razia"], 0);
q("History", "Who built Qutub Minar?", "कुतुब मीनार का निर्माण किसने शुरू करवाया?", ["Qutb-ud-din Aibak", "Akbar", "Shah Jahan", "Alauddin Khilji"], 0);
q("History", "Who completed the Qutub Minar?", "कुतुब मीनार को किसने पूरा करवाया?", ["Iltutmish", "Aibak", "Balban", "Firoz Shah Tughlaq"], 0);
q("History", "Who was the founder of the Delhi Sultanate?", "दिल्ली सल्तनत का संस्थापक किसे माना जाता है?", ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khilji"], 0);
q("History", "Who was the first woman ruler of Delhi?", "दिल्ली की पहली महिला शासक कौन थी?", ["Razia Sultan", "Nur Jahan", "Rani Durgavati", "Rani Lakshmibai"], 0);
q("History", "Who introduced Din-i Ilahi?", "दीन-ए-इलाही किसने शुरू किया?", ["Akbar", "Babur", "Jahangir", "Aurangzeb"], 0);
q("History", "Who built Fatehpur Sikri?", "फतेहपुर सीकरी का निर्माण किसने करवाया?", ["Akbar", "Shah Jahan", "Jahangir", "Babur"], 0);
q("History", "Who was the last Mughal emperor?", "अंतिम मुगल सम्राट कौन था?", ["Bahadur Shah Zafar", "Aurangzeb", "Shah Alam II", "Akbar II"], 0);
q("History", "Who founded the Maratha Empire?", "मराठा साम्राज्य के संस्थापक कौन थे?", ["Shivaji Maharaj", "Peshwa Baji Rao", "Sambhaji", "Balaji Vishwanath"], 0);
q("History", "Who was the founder of Sikhism?", "सिख धर्म के संस्थापक कौन थे?", ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan Dev", "Guru Tegh Bahadur"], 0);
q("History", "Who founded the Khalsa?", "खालसा पंथ की स्थापना किसने की?", ["Guru Gobind Singh", "Guru Nanak", "Guru Arjan Dev", "Guru Ram Das"], 0);
q("History", "The Battle of Plassey was fought in which year?", "प्लासी का युद्ध किस वर्ष हुआ?", ["1757", "1764", "1857", "1773"], 0);
q("History", "The Battle of Buxar was fought in which year?", "बक्सर का युद्ध किस वर्ष हुआ?", ["1764", "1757", "1857", "1772"], 0);
q("History", "Who introduced the Permanent Settlement?", "स्थायी बंदोबस्त किसने लागू किया?", ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Lord Curzon"], 0);
q("History", "Who introduced the Subsidiary Alliance?", "सहायक संधि की नीति किसने शुरू की?", ["Lord Wellesley", "Lord Dalhousie", "Lord Curzon", "Lord Cornwallis"], 0);
q("History", "Who introduced the Doctrine of Lapse?", "हड़प नीति किसने लागू की?", ["Lord Dalhousie", "Lord Wellesley", "Lord Curzon", "Lord Ripon"], 0);
q("History", "The Revolt of 1857 began at which place?", "1857 का विद्रोह सबसे पहले कहाँ शुरू हुआ?", ["Meerut", "Delhi", "Kanpur", "Lucknow"], 0);
q("History", "Who was the symbolic leader of the Revolt of 1857?", "1857 के विद्रोह के प्रतीकात्मक नेता कौन थे?", ["Bahadur Shah Zafar", "Nana Sahib", "Tantia Tope", "Mangal Pandey"], 0);
q("History", "Who was associated with the revolt in Jhansi?", "झांसी में 1857 के विद्रोह का नेतृत्व किसने किया?", ["Rani Lakshmibai", "Begum Hazrat Mahal", "Rani Durgavati", "Sarojini Naidu"], 0);
q("History", "Who founded the Arya Samaj?", "आर्य समाज की स्थापना किसने की?", ["Swami Dayanand Saraswati", "Swami Vivekananda", "Raja Ram Mohan Roy", "Ramakrishna"], 0);
q("History", "Who founded the Brahmo Samaj?", "ब्रह्म समाज की स्थापना किसने की?", ["Raja Ram Mohan Roy", "Dayanand Saraswati", "Vivekananda", "Ishwar Chandra Vidyasagar"], 0);
q("History", "Who founded the Ramakrishna Mission?", "रामकृष्ण मिशन की स्थापना किसने की?", ["Swami Vivekananda", "Ramakrishna Paramahamsa", "Dayanand Saraswati", "Raja Ram Mohan Roy"], 0);
q("History", "Who started the Home Rule Movement in India along with Annie Besant?", "एनी बेसेंट के साथ होम रूल आंदोलन से कौन जुड़े थे?", ["Bal Gangadhar Tilak", "Gandhi", "Nehru", "Patel"], 0);
q("History", "The Jallianwala Bagh massacre occurred in which year?", "जलियांवाला बाग हत्याकांड किस वर्ष हुआ?", ["1919", "1920", "1930", "1942"], 0);
q("History", "Who ordered the Jallianwala Bagh firing?", "जलियांवाला बाग गोलीकांड का आदेश किसने दिया?", ["General Dyer", "Lord Curzon", "Lord Irwin", "Lord Wavell"], 0);
q("History", "The Non-Cooperation Movement was launched in which year?", "असहयोग आंदोलन किस वर्ष शुरू हुआ?", ["1920", "1919", "1930", "1942"], 0);
q("History", "The Civil Disobedience Movement began in which year?", "सविनय अवज्ञा आंदोलन किस वर्ष शुरू हुआ?", ["1930", "1920", "1942", "1919"], 0);
q("History", "The Simon Commission came to India in which year?", "साइमन कमीशन भारत कब आया?", ["1928", "1927", "1930", "1935"], 0);
q("History", "Who led the Salt March?", "नमक मार्च का नेतृत्व किसने किया?", ["Mahatma Gandhi", "Nehru", "Patel", "Subhas Bose"], 0);
q("History", "Who was the first Indian Governor-General of independent India?", "स्वतंत्र भारत के पहले भारतीय गवर्नर-जनरल कौन थे?", ["C. Rajagopalachari", "Rajendra Prasad", "Nehru", "Sardar Patel"], 0);
q("History", "Who was the first Governor-General of independent India?", "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?", ["Lord Mountbatten", "C. Rajagopalachari", "Lord Wavell", "Lord Curzon"], 0);
q("History", "Who designed the Indian National Flag?", "भारतीय राष्ट्रीय ध्वज का डिजाइन किसने दिया?", ["Pingali Venkayya", "Rabindranath Tagore", "Bankim Chandra", "Gandhi"], 0);
q("History", "Who was the first woman president of the Indian National Congress?", "भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थीं?", ["Annie Besant", "Sarojini Naidu", "Indira Gandhi", "Vijaya Lakshmi Pandit"], 0);
q("History", "Who was the first Indian woman president of INC?", "कांग्रेस की पहली भारतीय महिला अध्यक्ष कौन थीं?", ["Sarojini Naidu", "Annie Besant", "Indira Gandhi", "Aruna Asaf Ali"], 0);
q("History", "The Indian National Congress was founded in which year?", "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई?", ["1885", "1886", "1905", "1919"], 0);
q("History", "Who was the first president of INC?", "कांग्रेस के प्रथम अध्यक्ष कौन थे?", ["W. C. Bonnerjee", "A. O. Hume", "Dadabhai Naoroji", "Gopal Krishna Gokhale"], 0);
q("History", "Who was known as the Grand Old Man of India?", "भारत के ग्रैंड ओल्ड मैन के नाम से कौन प्रसिद्ध थे?", ["Dadabhai Naoroji", "Gokhale", "Tilak", "Nehru"], 0);
q("History", "Who wrote Discovery of India?", "डिस्कवरी ऑफ इंडिया किसने लिखी?", ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Rajendra Prasad"], 0);


/* =========================================================
   GEOGRAPHY - 50
========================================================= */

q("Geography", "Which is the largest state of India by area?", "क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौन सा है?", ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"], 0);
q("Geography", "Which Indian state has the longest coastline?", "भारत के किस राज्य की समुद्री तटरेखा सबसे लंबी है?", ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"], 0);
q("Geography", "Which is the highest peak in India?", "भारत की सबसे ऊंची चोटी कौन सी है?", ["Kangchenjunga", "Nanda Devi", "Kamet", "Anamudi"], 0);
q("Geography", "The Thar Desert is mainly located in which state?", "थार मरुस्थल मुख्य रूप से किस राज्य में है?", ["Rajasthan", "Gujarat", "Punjab", "Haryana"], 0);
q("Geography", "Which is generally regarded as the longest river within India?", "भारत में बहने वाली सबसे लंबी नदी सामान्यतः किसे माना जाता है?", ["Ganga", "Yamuna", "Godavari", "Narmada"], 0);
q("Geography", "Which is the largest freshwater lake in India by surface area?", "सतह क्षेत्रफल के आधार पर भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?", ["Wular Lake", "Dal Lake", "Chilika Lake", "Loktak Lake"], 0);
q("Geography", "Which imaginary line divides Earth into Northern and Southern Hemispheres?", "पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में कौन सी रेखा बांटती है?", ["Equator", "Tropic of Cancer", "Prime Meridian", "Tropic of Capricorn"], 0);
q("Geography", "Which planet is called the Red Planet?", "लाल ग्रह किसे कहा जाता है?", ["Mars", "Venus", "Jupiter", "Mercury"], 0);
q("Geography", "Which is the largest planet in the Solar System?", "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", ["Jupiter", "Saturn", "Earth", "Neptune"], 0);
q("Geography", "Which is the smallest state of India by area?", "क्षेत्रफल के आधार पर भारत का सबसे छोटा राज्य कौन सा है?", ["Goa", "Sikkim", "Tripura", "Manipur"], 0);
q("Geography", "Which is the most populous state of India?", "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?", ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], 0);
q("Geography", "Which river is known as the Sorrow of Bihar?", "किस नदी को बिहार का शोक कहा जाता है?", ["Kosi", "Ganga", "Yamuna", "Son"], 0);
q("Geography", "Which river is known as the Sorrow of Bengal?", "किस नदी को बंगाल का शोक कहा जाता है?", ["Damodar", "Hooghly", "Ganga", "Teesta"], 0);
q("Geography", "Which river is called Dakshin Ganga?", "दक्षिण गंगा किस नदी को कहा जाता है?", ["Godavari", "Krishna", "Kaveri", "Narmada"], 0);
q("Geography", "Which is the longest river of Peninsular India?", "प्रायद्वीपीय भारत की सबसे लंबी नदी कौन सी है?", ["Godavari", "Krishna", "Narmada", "Kaveri"], 0);
q("Geography", "Which river flows through a rift valley?", "कौन सी नदी भ्रंश घाटी से होकर बहती है?", ["Narmada", "Ganga", "Yamuna", "Godavari"], 0);
q("Geography", "Which river forms an estuary?", "कौन सी नदी ज्वारनदमुख बनाती है?", ["Narmada", "Ganga", "Mahanadi", "Godavari"], 0);
q("Geography", "Which is the largest delta in the world?", "विश्व का सबसे बड़ा डेल्टा कौन सा है?", ["Ganga-Brahmaputra Delta", "Nile Delta", "Mississippi Delta", "Mekong Delta"], 0);
q("Geography", "The Sundarbans are located mainly in which region?", "सुंदरबन मुख्य रूप से किस क्षेत्र में स्थित है?", ["Ganga-Brahmaputra Delta", "Thar Desert", "Deccan Plateau", "Western Ghats"], 0);
q("Geography", "Which mountain range runs along western India?", "पश्चिमी भारत में कौन सी पर्वत श्रृंखला है?", ["Western Ghats", "Eastern Ghats", "Aravalli", "Himalayas"], 0);
q("Geography", "Which is the oldest mountain range in India?", "भारत की सबसे पुरानी पर्वत श्रृंखला कौन सी है?", ["Aravalli Range", "Himalayas", "Western Ghats", "Eastern Ghats"], 0);
q("Geography", "Which is the highest peak of the Western Ghats?", "पश्चिमी घाट की सबसे ऊंची चोटी कौन सी है?", ["Anamudi", "Doddabetta", "Kalsubai", "Mahabaleshwar"], 0);
q("Geography", "Which plateau is known as the mineral storehouse of India?", "भारत का खनिज भंडार किस पठार को कहा जाता है?", ["Chota Nagpur Plateau", "Deccan Plateau", "Malwa Plateau", "Tibetan Plateau"], 0);
q("Geography", "Which is the largest plateau in India?", "भारत का सबसे बड़ा पठार कौन सा है?", ["Deccan Plateau", "Chota Nagpur Plateau", "Malwa Plateau", "Meghalaya Plateau"], 0);
q("Geography", "Which soil is best suited for cotton cultivation?", "कपास की खेती के लिए कौन सी मिट्टी उपयुक्त है?", ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil"], 0);
q("Geography", "Which soil is most widespread in India?", "भारत में सबसे अधिक विस्तृत मिट्टी कौन सी है?", ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"], 0);
q("Geography", "Which soil is rich in iron?", "कौन सी मिट्टी लोहे से समृद्ध होती है?", ["Red Soil", "Black Soil", "Alluvial Soil", "Desert Soil"], 0);
q("Geography", "Which state is famous for tea production?", "कौन सा राज्य चाय उत्पादन के लिए प्रसिद्ध है?", ["Assam", "Punjab", "Rajasthan", "Gujarat"], 0);
q("Geography", "Which state is famous for coffee production?", "कौन सा राज्य कॉफी उत्पादन के लिए प्रसिद्ध है?", ["Karnataka", "Punjab", "Bihar", "Haryana"], 0);
q("Geography", "Which state is the largest producer of wheat in India?", "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?", ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"], 0);
q("Geography", "Which state is a major producer of rice?", "भारत में चावल का प्रमुख उत्पादक राज्य कौन सा है?", ["West Bengal", "Rajasthan", "Gujarat", "Punjab"], 0);
q("Geography", "Which state is famous for jute production?", "जूट उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?", ["West Bengal", "Gujarat", "Punjab", "Maharashtra"], 0);
q("Geography", "Which city is known as the Silicon Valley of India?", "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?", ["Bengaluru", "Mumbai", "Hyderabad", "Pune"], 0);
q("Geography", "Which city is known as the Pink City?", "गुलाबी शहर किसे कहा जाता है?", ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"], 0);
q("Geography", "Which city is known as the City of Lakes?", "झीलों का शहर किसे कहा जाता है?", ["Udaipur", "Jaipur", "Bhopal", "Nainital"], 0);
q("Geography", "Which city is known as the City of Nawabs?", "नवाबों का शहर किसे कहा जाता है?", ["Lucknow", "Kanpur", "Agra", "Varanasi"], 0);
q("Geography", "Which state has the largest forest area in India?", "भारत में सबसे अधिक वन क्षेत्र किस राज्य में है?", ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Odisha"], 0);
q("Geography", "Which is the largest island in India?", "भारत का सबसे बड़ा द्वीप कौन सा है?", ["Great Nicobar", "Majuli", "Diu", "Minicoy"], 0);
q("Geography", "Which is the largest brackish water lagoon in India?", "भारत की सबसे बड़ी खारे पानी की लैगून कौन सी है?", ["Chilika Lake", "Wular Lake", "Dal Lake", "Loktak Lake"], 0);
q("Geography", "Which lake is famous for floating islands?", "तैरते हुए द्वीपों के लिए कौन सी झील प्रसिद्ध है?", ["Loktak Lake", "Chilika Lake", "Wular Lake", "Dal Lake"], 0);
q("Geography", "Which strait separates India and Sri Lanka?", "भारत और श्रीलंका को कौन सी जलसंधि अलग करती है?", ["Palk Strait", "Bering Strait", "Malacca Strait", "Gibraltar Strait"], 0);
q("Geography", "Which sea lies to the west of India?", "भारत के पश्चिम में कौन सा समुद्र है?", ["Arabian Sea", "Bay of Bengal", "Red Sea", "Caspian Sea"], 0);
q("Geography", "Which bay lies to the east of India?", "भारत के पूर्व में कौन सी खाड़ी है?", ["Bay of Bengal", "Arabian Sea", "Persian Gulf", "Red Sea"], 0);
q("Geography", "Which ocean lies to the south of India?", "भारत के दक्षिण में कौन सा महासागर है?", ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"], 0);
q("Geography", "Which latitude passes through India?", "भारत से कौन सी प्रमुख अक्षांश रेखा गुजरती है?", ["Tropic of Cancer", "Equator", "Tropic of Capricorn", "Arctic Circle"], 0);
q("Geography", "How many states does the Tropic of Cancer pass through in India?", "कर्क रेखा भारत के कितने राज्यों से गुजरती है?", ["8", "7", "9", "6"], 0);
q("Geography", "Which is the easternmost state of India?", "भारत का सबसे पूर्वी राज्य कौन सा है?", ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"], 0);
q("Geography", "Which is the westernmost state of India?", "भारत का सबसे पश्चिमी राज्य कौन सा है?", ["Gujarat", "Rajasthan", "Punjab", "Maharashtra"], 0);
q("Geography", "Which is the southernmost point of mainland India?", "भारत की मुख्य भूमि का सबसे दक्षिणी बिंदु कौन सा है?", ["Kanyakumari", "Indira Point", "Rameswaram", "Kochi"], 0);
q("Geography", "Which is the southernmost point of India?", "भारत का सबसे दक्षिणी बिंदु कौन सा है?", ["Indira Point", "Kanyakumari", "Port Blair", "Minicoy"], 0);
q("Geography", "Which country shares the longest international border with India?", "भारत के साथ सबसे लंबी अंतरराष्ट्रीय सीमा किस देश की है?", ["Bangladesh", "China", "Pakistan", "Nepal"], 0);


/* =========================================================
   SCIENCE - 50
========================================================= */

q("Science", "What is the chemical formula of water?", "पानी का रासायनिक सूत्र क्या है?", ["H2O", "CO2", "O2", "H2"], 0);
q("Science", "Which organ pumps blood in the human body?", "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?", ["Heart", "Lungs", "Kidney", "Liver"], 0);
q("Science", "What is the SI unit of force?", "बल की SI इकाई क्या है?", ["Newton", "Joule", "Watt", "Pascal"], 0);
q("Science", "Which gas is most abundant in Earth's atmosphere?", "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?", ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"], 0);
q("Science", "Which vitamin is produced by sunlight exposure?", "सूर्य के प्रकाश से कौन सा विटामिन बनता है?", ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B"], 0);
q("Science", "What is the SI unit of electric current?", "विद्युत धारा की SI इकाई क्या है?", ["Ampere", "Volt", "Ohm", "Watt"], 0);
q("Science", "What is the approximate speed of light in vacuum?", "निर्वात में प्रकाश की लगभग गति कितनी है?", ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s"], 0);
q("Science", "Which is the smallest planet in the Solar System?", "सौरमंडल का सबसे छोटा ग्रह कौन सा है?", ["Mercury", "Mars", "Venus", "Earth"], 0);
q("Science", "Which blood group is universal donor for red blood cells?", "लाल रक्त कोशिकाओं का सार्वभौमिक दाता कौन सा रक्त समूह है?", ["O Negative", "AB Positive", "A Positive", "B Negative"], 0);
q("Science", "Which organ is responsible for filtering blood?", "रक्त को छानने का काम कौन सा अंग करता है?", ["Kidney", "Heart", "Liver", "Lung"], 0);
q("Science", "Which organ produces insulin?", "इंसुलिन किस अंग द्वारा बनाया जाता है?", ["Pancreas", "Liver", "Kidney", "Heart"], 0);
q("Science", "Which gas do humans inhale for respiration?", "मनुष्य श्वसन के लिए कौन सी गैस लेते हैं?", ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], 0);
q("Science", "Which gas is released during photosynthesis?", "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?", ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], 0);
q("Science", "Which pigment gives plants their green color?", "पौधों को हरा रंग कौन सा वर्णक देता है?", ["Chlorophyll", "Hemoglobin", "Melanin", "Carotene"], 0);
q("Science", "What is the basic unit of life?", "जीवन की मूल इकाई क्या है?", ["Cell", "Tissue", "Organ", "Atom"], 0);
q("Science", "Which part of the cell contains genetic material?", "कोशिका का कौन सा भाग आनुवंशिक पदार्थ रखता है?", ["Nucleus", "Cytoplasm", "Cell wall", "Ribosome"], 0);
q("Science", "Which organelle is called the powerhouse of the cell?", "कोशिका का पावरहाउस किसे कहा जाता है?", ["Mitochondria", "Nucleus", "Ribosome", "Golgi body"], 0);
q("Science", "What is the chemical formula of carbon dioxide?", "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?", ["CO2", "CO", "C2O", "O2"], 0);
q("Science", "What is the chemical formula of common salt?", "साधारण नमक का रासायनिक सूत्र क्या है?", ["NaCl", "KCl", "CaCl2", "NaOH"], 0);
q("Science", "What is the chemical formula of oxygen gas?", "ऑक्सीजन गैस का सूत्र क्या है?", ["O2", "O", "O3", "CO2"], 0);
q("Science", "What is the pH of pure water at room temperature approximately?", "शुद्ध पानी का pH लगभग कितना होता है?", ["7", "5", "9", "14"], 0);
q("Science", "Which acid is present in lemon?", "नींबू में कौन सा अम्ल पाया जाता है?", ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulphuric acid"], 0);
q("Science", "Which acid is present in vinegar?", "सिरके में कौन सा अम्ल पाया जाता है?", ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"], 0);
q("Science", "Which acid is present in curd?", "दही में कौन सा अम्ल पाया जाता है?", ["Lactic acid", "Citric acid", "Acetic acid", "Oxalic acid"], 0);
q("Science", "Which metal is liquid at room temperature?", "कमरे के तापमान पर कौन सी धातु तरल होती है?", ["Mercury", "Iron", "Copper", "Aluminium"], 0);
q("Science", "Which is the hardest natural substance?", "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?", ["Diamond", "Iron", "Quartz", "Graphite"], 0);
q("Science", "Which form of carbon is used in pencils?", "पेंसिल में कार्बन का कौन सा रूप प्रयोग होता है?", ["Graphite", "Diamond", "Coal", "Fullerene"], 0);
q("Science", "Which gas is used by plants in photosynthesis?", "पौधे प्रकाश संश्लेषण में कौन सी गैस उपयोग करते हैं?", ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 0);
q("Science", "Which part of the plant absorbs water?", "पौधे का कौन सा भाग पानी अवशोषित करता है?", ["Roots", "Leaves", "Stem", "Flower"], 0);
q("Science", "Which tissue transports water in plants?", "पौधों में पानी का परिवहन कौन सा ऊतक करता है?", ["Xylem", "Phloem", "Cambium", "Epidermis"], 0);
q("Science", "Which tissue transports food in plants?", "पौधों में भोजन का परिवहन कौन सा ऊतक करता है?", ["Phloem", "Xylem", "Cambium", "Epidermis"], 0);
q("Science", "Which vitamin helps in blood clotting?", "रक्त का थक्का जमाने में कौन सा विटामिन मदद करता है?", ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"], 0);
q("Science", "Which vitamin is important for eyesight?", "दृष्टि के लिए कौन सा विटामिन महत्वपूर्ण है?", ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"], 0);
q("Science", "Which vitamin prevents scurvy?", "स्कर्वी रोग से बचाने वाला विटामिन कौन सा है?", ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin K"], 0);
q("Science", "Which disease is caused by deficiency of Vitamin D?", "विटामिन D की कमी से कौन सा रोग होता है?", ["Rickets", "Scurvy", "Beriberi", "Night blindness"], 0);
q("Science", "Which disease is caused by Vitamin C deficiency?", "विटामिन C की कमी से कौन सा रोग होता है?", ["Scurvy", "Rickets", "Beriberi", "Goitre"], 0);
q("Science", "Which disease is caused by iodine deficiency?", "आयोडीन की कमी से कौन सा रोग होता है?", ["Goitre", "Rickets", "Scurvy", "Anaemia"], 0);
q("Science", "Which hormone controls blood sugar?", "रक्त शर्करा को नियंत्रित करने वाला हार्मोन कौन सा है?", ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"], 0);
q("Science", "Which gland produces thyroxine?", "थायरॉक्सिन हार्मोन कौन सी ग्रंथि बनाती है?", ["Thyroid", "Pituitary", "Adrenal", "Pancreas"], 0);
q("Science", "Which gland is known as master gland?", "मास्टर ग्रंथि किसे कहा जाता है?", ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], 0);
q("Science", "What is the SI unit of power?", "शक्ति की SI इकाई क्या है?", ["Watt", "Joule", "Newton", "Ampere"], 0);
q("Science", "What is the SI unit of energy?", "ऊर्जा की SI इकाई क्या है?", ["Joule", "Watt", "Newton", "Pascal"], 0);
q("Science", "What is the SI unit of pressure?", "दाब की SI इकाई क्या है?", ["Pascal", "Newton", "Joule", "Watt"], 0);
q("Science", "Which device converts electrical energy into mechanical energy?", "कौन सा उपकरण विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलता है?", ["Electric motor", "Generator", "Transformer", "Battery"], 0);
q("Science", "Which device converts mechanical energy into electrical energy?", "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है?", ["Generator", "Motor", "Battery", "Transformer"], 0);
q("Science", "Which lens is used to correct myopia?", "निकट दृष्टिदोष को ठीक करने के लिए कौन सा लेंस प्रयोग होता है?", ["Concave lens", "Convex lens", "Cylindrical lens", "Plane lens"], 0);
q("Science", "Which lens is used to correct hypermetropia?", "दूर दृष्टिदोष को ठीक करने के लिए कौन सा लेंस प्रयोग होता है?", ["Convex lens", "Concave lens", "Plane lens", "Cylindrical lens"], 0);
q("Science", "Which instrument measures electric current?", "विद्युत धारा किस यंत्र से मापी जाती है?", ["Ammeter", "Voltmeter", "Barometer", "Galvanometer"], 0);
q("Science", "Which instrument measures voltage?", "वोल्टेज किस यंत्र से मापा जाता है?", ["Voltmeter", "Ammeter", "Barometer", "Thermometer"], 0);
q("Science", "Which force attracts objects toward Earth?", "वस्तुओं को पृथ्वी की ओर खींचने वाला बल कौन सा है?", ["Gravitational force", "Magnetic force", "Frictional force", "Nuclear force"], 0);


/* =========================================================
   ECONOMICS - 50
========================================================= */

q("Economics", "What does GDP stand for?", "GDP का पूरा नाम क्या है?", ["Gross Domestic Product", "Gross Development Product", "General Domestic Product", "Gross Demand Product"], 0);
q("Economics", "When was the Reserve Bank of India established?", "भारतीय रिजर्व बैंक की स्थापना कब हुई?", ["1935", "1947", "1950", "1921"], 0);
q("Economics", "What does RBI stand for?", "RBI का पूरा नाम क्या है?", ["Reserve Bank of India", "Reserve Banking Institution", "Rural Bank of India", "Republic Bank of India"], 0);
q("Economics", "Which is the central bank of India?", "भारत का केंद्रीय बैंक कौन सा है?", ["RBI", "SBI", "SEBI", "NABARD"], 0);
q("Economics", "GST subsumed which major indirect taxes?", "GST ने किन प्रमुख अप्रत्यक्ष करों को समाहित किया?", ["Service Tax and other indirect taxes", "Income Tax", "Corporate Tax", "Customs only"], 0);
q("Economics", "What does GST stand for?", "GST का पूरा नाम क्या है?", ["Goods and Services Tax", "General Sales Tax", "Goods Supply Tax", "Government Service Tax"], 0);
q("Economics", "Which organization regulates the securities market in India?", "भारत में प्रतिभूति बाजार को कौन नियंत्रित करता है?", ["SEBI", "RBI", "IRDAI", "NITI Aayog"], 0);
q("Economics", "Which institution replaced the Planning Commission?", "योजना आयोग का स्थान किस संस्था ने लिया?", ["NITI Aayog", "RBI", "Finance Commission", "SEBI"], 0);
q("Economics", "Which is a primary sector activity?", "प्राथमिक क्षेत्र की गतिविधि कौन सी है?", ["Agriculture", "Banking", "Software", "Transport"], 0);
q("Economics", "Which sector includes manufacturing?", "विनिर्माण किस क्षेत्र में आता है?", ["Secondary sector", "Primary sector", "Tertiary sector", "Quaternary sector"], 0);
q("Economics", "Which sector is also called the service sector?", "सेवा क्षेत्र किसे कहा जाता है?", ["Tertiary sector", "Primary sector", "Secondary sector", "Agricultural sector"], 0);
q("Economics", "What is inflation?", "मुद्रास्फीति क्या है?", ["General rise in prices", "Fall in prices", "Rise in unemployment", "Fall in production only"], 0);
q("Economics", "What is deflation?", "अपस्फीति क्या है?", ["General fall in prices", "General rise in prices", "Rise in wages", "Rise in demand"], 0);
q("Economics", "What is per capita income?", "प्रति व्यक्ति आय क्या है?", ["National income divided by population", "Total exports", "Total savings", "Government revenue"], 0);
q("Economics", "Which institution issues currency notes in India?", "भारत में मुद्रा नोट जारी करने वाली संस्था कौन है?", ["RBI", "SBI", "SEBI", "Finance Ministry"], 0);
q("Economics", "Who issues the one rupee note in India?", "भारत में एक रुपये का नोट कौन जारी करता है?", ["Government of India", "RBI", "SBI", "SEBI"], 0);
q("Economics", "What is repo rate?", "रेपो रेट क्या है?", ["Rate at which RBI lends to banks", "Rate at which banks lend to RBI", "Tax rate", "Deposit rate"], 0);
q("Economics", "What is reverse repo rate?", "रिवर्स रेपो रेट क्या है?", ["Rate at which RBI borrows from banks", "Rate at which RBI lends to banks", "Income tax rate", "GST rate"], 0);
q("Economics", "What is CRR?", "CRR का पूरा नाम क्या है?", ["Cash Reserve Ratio", "Credit Reserve Rate", "Capital Reserve Ratio", "Cash Revenue Ratio"], 0);
q("Economics", "What is SLR?", "SLR का पूरा नाम क्या है?", ["Statutory Liquidity Ratio", "Standard Lending Rate", "Savings Liquidity Ratio", "Statutory Loan Rate"], 0);
q("Economics", "Which tax is a direct tax?", "प्रत्यक्ष कर कौन सा है?", ["Income Tax", "GST", "Excise Duty", "Customs Duty"], 0);
q("Economics", "Which is an indirect tax?", "अप्रत्यक्ष कर कौन सा है?", ["GST", "Income Tax", "Corporate Income Tax", "Wealth Tax"], 0);
q("Economics", "What is fiscal policy?", "राजकोषीय नीति क्या है?", ["Government taxation and spending policy", "Money supply policy only", "Trade policy", "Banking recruitment policy"], 0);
q("Economics", "What is monetary policy?", "मौद्रिक नीति क्या है?", ["Policy related to money supply and interest rates", "Tax policy", "Export policy", "Agricultural policy"], 0);
q("Economics", "Who formulates monetary policy in India?", "भारत में मौद्रिक नीति कौन बनाता है?", ["RBI", "SEBI", "Finance Commission", "NITI Aayog"], 0);
q("Economics", "What is a budget?", "बजट क्या है?", ["Statement of estimated government receipts and expenditure", "Bank loan", "Tax receipt only", "Trade balance"], 0);
q("Economics", "What is fiscal deficit?", "राजकोषीय घाटा क्या है?", ["Excess of total expenditure over total receipts excluding borrowings", "Excess of exports over imports", "Excess of savings", "Fall in prices"], 0);
q("Economics", "What is balance of trade?", "व्यापार संतुलन क्या है?", ["Difference between exports and imports of goods", "Difference between savings and investment", "Difference between income and expenditure", "Difference between taxes"], 0);
q("Economics", "What is an export?", "निर्यात क्या है?", ["Sale of goods/services to another country", "Purchase from another country", "Domestic sale", "Tax payment"], 0);
q("Economics", "What is an import?", "आयात क्या है?", ["Purchase of goods/services from another country", "Sale to another country", "Domestic production", "Government spending"], 0);
q("Economics", "What is a bank?", "बैंक क्या है?", ["Financial institution accepting deposits and providing loans", "Government court", "Tax department", "Stock exchange only"], 0);
q("Economics", "Which bank is the largest public sector bank in India?", "भारत का सबसे बड़ा सार्वजनिक क्षेत्र का बैंक कौन सा है?", ["State Bank of India", "Punjab National Bank", "Bank of Baroda", "Canara Bank"], 0);
q("Economics", "What does SBI stand for?", "SBI का पूरा नाम क्या है?", ["State Bank of India", "State Banking Institution", "Small Bank of India", "Savings Bank of India"], 0);
q("Economics", "What does NABARD stand for?", "NABARD का पूरा नाम क्या है?", ["National Bank for Agriculture and Rural Development", "National Agricultural Bank and Rural Department", "National Bank for Regional Development", "National Board for Agriculture"], 0);
q("Economics", "Which institution regulates insurance in India?", "भारत में बीमा क्षेत्र को कौन नियंत्रित करता है?", ["IRDAI", "SEBI", "RBI", "NABARD"], 0);
q("Economics", "What does SEBI stand for?", "SEBI का पूरा नाम क्या है?", ["Securities and Exchange Board of India", "Stock Exchange Bank of India", "Securities Economic Board of India", "State Exchange Board of India"], 0);
q("Economics", "What does IRDAI regulate?", "IRDAI किस क्षेत्र को नियंत्रित करता है?", ["Insurance", "Banking", "Securities", "Agriculture"], 0);
q("Economics", "What is poverty line?", "गरीबी रेखा क्या दर्शाती है?", ["Minimum level of income/consumption used to identify poverty", "Maximum tax level", "Maximum salary", "Export limit"], 0);
q("Economics", "What is unemployment?", "बेरोजगारी क्या है?", ["Situation where willing and able people cannot find work", "High inflation", "High production", "Low taxes"], 0);
q("Economics", "What is human capital?", "मानव पूंजी क्या है?", ["Skills, knowledge and health of people", "Machines only", "Money only", "Natural resources"], 0);
q("Economics", "Which is a renewable resource?", "नवीकरणीय संसाधन कौन सा है?", ["Solar energy", "Coal", "Petroleum", "Natural gas"], 0);
q("Economics", "Which is a non-renewable resource?", "अनवीकरणीय संसाधन कौन सा है?", ["Coal", "Solar energy", "Wind energy", "Tidal energy"], 0);
q("Economics", "What is demand?", "मांग क्या है?", ["Quantity consumers are willing and able to buy", "Quantity producers make only", "Government revenue", "Total exports"], 0);
q("Economics", "What is supply?", "आपूर्ति क्या है?", ["Quantity sellers are willing and able to sell", "Consumer income", "Government spending", "Tax collection"], 0);
q("Economics", "What happens to demand generally when price rises, other things equal?", "अन्य बातें समान हों तो कीमत बढ़ने पर मांग सामान्यतः क्या होती है?", ["Decreases", "Increases", "Remains always same", "Becomes zero"], 0);
q("Economics", "What happens to supply generally when price rises, other things equal?", "अन्य बातें समान हों तो कीमत बढ़ने पर आपूर्ति सामान्यतः क्या होती है?", ["Increases", "Decreases", "Becomes zero", "Does not change"], 0);
q("Economics", "What is national income?", "राष्ट्रीय आय क्या है?", ["Income earned by factors of production of a country", "Government tax only", "Exports only", "Bank deposits only"], 0);
q("Economics", "What is GDP measured within?", "GDP किस क्षेत्र की आर्थिक गतिविधि को मापता है?", ["Domestic territory", "Only foreign territory", "Only rural areas", "Only government sector"], 0);
q("Economics", "What is economic growth?", "आर्थिक वृद्धि क्या है?", ["Increase in real output/income over time", "Fall in output", "Rise in prices only", "Rise in unemployment"], 0);
q("Economics", "What is economic development?", "आर्थिक विकास क्या है?", ["Improvement in income and broader quality of life", "Only increase in prices", "Only increase in exports", "Only increase in population"], 0);
q("Economics", "Which organization publishes India's national income estimates?", "भारत की राष्ट्रीय आय के अनुमान कौन प्रकाशित करता है?", ["National Statistical Office", "RBI", "SEBI", "NITI Aayog"], 0);


/* =========================================================
   CHECK TOTAL
========================================================= */

console.log("Total Questions:", questions.length);

console.log(
    "GK:",
    questions.filter(q => q.category === "GK").length
);

console.log(
    "Polity:",
    questions.filter(q => q.category === "Polity").length
);

console.log(
    "History:",
    questions.filter(q => q.category === "History").length
);

console.log(
    "Geography:",
    questions.filter(q => q.category === "Geography").length
);

console.log(
    "Science:",
    questions.filter(q => q.category === "Science").length
);

console.log(
    "Economics:",
    questions.filter(q => q.category === "Economics").length
);
