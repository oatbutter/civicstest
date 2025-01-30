const questions = [
  {
      question: "What is the supreme law of the land?",
      correct_answers: ["The Constitution"]
  },
  {
      question: "What does the Constitution do?",
      correct_answers: [
          "Sets up the government",
          "Defines the government",
          "Protects basic rights of Americans"
      ]
  },
  {
      question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
      correct_answers: ["We the People"]
  },
  {
      question: "What is an amendment?",
      correct_answers: [
          "A change to the Constitution",
          "An addition to the Constitution"
      ]
  },
  {
      question: "What do we call the first ten amendments to the Constitution?",
      correct_answers: ["The Bill of Rights"]
  },
  {
      question: "What is one right or freedom from the First Amendment?",
      correct_answers: [
          "Speech",
          "Religion",
          "Assembly",
          "Press",
          "Petition the government"
      ]
  },
  {
      question: "How many amendments does the Constitution have?",
      correct_answers: ["27"]
  },
  {
      question: "What did the Declaration of Independence do?",
      correct_answers: [
          "Announced our independence from Great Britain",
          "Declared our independence from Great Britain",
          "Said that the United States is free from Great Britain"
      ]
  },
  {
      question: "What are two rights in the Declaration of Independence?",
      correct_answers: ["Life", "Liberty", "Pursuit of Happiness"]
  },
  {
      question: "What is the economic system in the United States?",
      correct_answers: [
          "Capitalist economy",
          "Market economy"
      ]
  },
  {
      question: "What is the rule of law?",
      correct_answers: [
          "Everyone must follow the law",
          "Leaders must obey the law",
          "Government must obey the law",
          "No one is above the law"
      ]
  },
  { question: "Name one branch or part of the government.", 
    correct_answers: [
          "Congress", 
          "Legislative", 
          "President", 
          "Executive", 
          "The courts", 
          "Judicial"
    ]
  },
  { question: "What stops one branch of government from becoming too powerful?", correct_answers: ["Checks and balances", "Separation of powers"] },
  { question: "Who is in charge of the executive branch?", correct_answers: ["The President"] },
    { question: "Who makes federal laws?", correct_answers: ["Congress", "Senate and House of Representatives", "U.S. or national legislature"] },
    { question: "What are the two parts of the U.S. Congress?", correct_answers: ["The Senate and House (of Representatives)"] },
    { question: "How many U.S. Senators are there?", correct_answers: ["100"] },
    { question: "We elect a U.S. Senator for how many years?", correct_answers: ["6"] },
    { question: "Who does a U.S. Senator represent?", correct_answers: ["All people of the state"] },
    { question: "We elect a U.S. Representative for how many years?", correct_answers: ["2"] },
    { question: "Name your U.S. Representative.", correct_answers: ["[Answer varies by location]"] },
    { question: "Why do some states have more Representatives than other states?", correct_answers: ["Because of the state's population", "Because they have more people", "Because some states have more people"] },
    { question: "We elect a President for how many years?", correct_answers: ["4"] },
    { question: "In what month do we vote for President?", correct_answers: ["November"] },
    { question: "What is the name of the President of the United States now?", correct_answers: ["[Current President]"] },
    { question: "What is the name of the Vice President of the United States now?", correct_answers: ["[Current Vice President]"] },
    { question: "If the President can no longer serve, who becomes President?", correct_answers: ["The Vice President"] },
    { question: "If both the President and the Vice President can no longer serve, who becomes President?", correct_answers: ["The Speaker of the House"] },
    { question: "Who is the Commander in Chief of the military?", correct_answers: ["The President"] },
    { question: "Who signs bills to become laws?", correct_answers: ["The President"] },
    { question: "Who vetoes bills?", correct_answers: ["The President"] },
    { question: "What does the President's Cabinet do?", correct_answers: ["Advises the President"] },
    { question: "What are two Cabinet-level positions?", correct_answers: ["Secretary of State", "Secretary of Defense", "Attorney General", "Vice President"] },
    { question: "What does the judicial branch do?", correct_answers: ["Reviews laws", "Explains laws", "Resolves disputes", "Decides if a law goes against the Constitution"] },
    { question: "What is the highest court in the United States?", correct_answers: ["The Supreme Court"] },
    { question: "How many justices are on the Supreme Court?", correct_answers: ["9"] },
    { question: "Who is the Chief Justice of the United States now?", correct_answers: ["[Current Chief Justice]"] },
    { question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", correct_answers: ["To print money", "To declare war", "To create an army", "To make treaties"] },
    { question: "Under our Constitution, some powers belong to the states. What is one power of the states?", correct_answers: ["Provide schooling and education", "Provide protection (police)", "Provide safety (fire departments)", "Give a driver’s license", "Approve zoning and land use"] },
    { question: "Who is the Governor of your state now?", correct_answers: ["[Answer varies by location]"] },
    { question: "What is the capital of your state?", correct_answers: ["[Answer varies by location]"] },
    { question: "What are the two major political parties in the United States?", correct_answers: ["Democratic and Republican"] },
    { question: "What is the political party of the President now?", correct_answers: ["[Current President's party]"] },
    { question: "What is the name of the Speaker of the House of Representatives now?", correct_answers: ["[Current Speaker of the House]"] },
    { question: "There are four amendments to the Constitution about who can vote. Describe one of them.", correct_answers: ["Citizens 18 and older can vote", "You don't have to pay a poll tax to vote", "Any citizen can vote", "A male citizen of any race can vote"] },
    { question: "What is one responsibility that is only for United States citizens?", correct_answers: ["Serve on a jury", "Vote in a federal election"] },
    { question: "What is one right only for United States citizens?", correct_answers: ["Vote in a federal election", "Run for federal office"] },
    { question: "What are two rights of everyone living in the United States?", correct_answers: ["Freedom of expression", "Freedom of speech", "Freedom of assembly", "Freedom to petition the government", "Freedom of religion", "The right to bear arms"] },
    { question: "What do we show loyalty to when we say the Pledge of Allegiance?", correct_answers: ["The United States", "The flag"] },
    { question: "What is one promise you make when you become a United States citizen?", correct_answers: ["Give up loyalty to other countries", "Defend the Constitution and laws of the United States", "Obey the laws of the United States", "Serve in the U.S. military (if needed)", "Be loyal to the United States"] },
    { question: "How old do citizens have to be to vote for President?", correct_answers: ["18 and older"] },
    { question: "What are two ways that Americans can participate in their democracy?", correct_answers: ["Vote", "Join a political party", "Help with a campaign", "Join a civic group", "Write to a newspaper", "Run for office"] },
    { question: "When is the last day you can send in federal income tax forms?", correct_answers: ["April 15"] },
    { question: "When must all men register for the Selective Service?", correct_answers: ["At age 18", "Between 18 and 26"] },
    { question: "What is one reason colonists came to America?", correct_answers: ["Freedom", "Political liberty", "Religious freedom", "Economic opportunity"] },
    { question: "Who lived in America before the Europeans arrived?", correct_answers: ["American Indians", "Native Americans"] },
    { question: "What group of people was taken to America and sold as slaves?", correct_answers: ["Africans", "People from Africa"] },
    { question: "Why did the colonists fight the British?", correct_answers: ["High taxes", "No self-government"] },
    { question: "Who wrote the Declaration of Independence?", correct_answers: ["Thomas Jefferson"] },
    { question: "When was the Declaration of Independence adopted?", correct_answers: ["July 4, 1776"] },
    { question: "There were 13 original states. Name three.", correct_answers: ["New York", "Virginia", "Georgia", "North Carolina"] },
    { question: "When was the Constitution written?", correct_answers: ["1787"] },
    { question: "Who is the 'Father of Our Country'?", correct_answers: ["George Washington"] },
    { question: "Who was the first President?", correct_answers: ["George Washington"] },
    { question: "What territory did the United States buy from France in 1803?", correct_answers: ["The Louisiana Territory", "Louisiana"] },
    { question: "Name one war fought by the United States in the 1800s.", correct_answers: ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"] },
    { question: "Name the U.S. war between the North and the South.", correct_answers: ["The Civil War", "The War between the States"] },
    { question: "Name one problem that led to the Civil War.", correct_answers: ["Slavery", "Economic reasons", "States' rights"] },
    { question: "What was one important thing that Abraham Lincoln did?", correct_answers: ["Freed the slaves (Emancipation Proclamation)", "Saved the Union", "Led the United States during the Civil War"] },
    { question: "What did the Emancipation Proclamation do?", correct_answers: ["Freed the slaves", "Freed slaves in the Confederacy", "Freed slaves in the Confederate states", "Freed slaves in most Southern states"] },
    { question: "What did Susan B. Anthony do?", correct_answers: ["Fought for women's rights", "Fought for civil rights"] },
    { question: "Name one war fought by the United States in the 1900s.", correct_answers: ["World War I", "World War II", "Korean War", "Vietnam War", "(Persian) Gulf War"] },
    { question: "Who was President during World War I?", correct_answers: ["Woodrow Wilson"] },
    { question: "Who was President during the Great Depression and World War II?", correct_answers: ["Franklin Roosevelt"] },
    { question: "Who did the United States fight in World War II?", correct_answers: ["Japan", "Germany", "Italy"] },
    { question: "Before he was President, Eisenhower was a general. What war was he in?", correct_answers: ["World War II"] },
    { question: "During the Cold War, what was the main concern of the United States?", correct_answers: ["Communism"] },
    { question: "What movement tried to end racial discrimination?", correct_answers: ["The civil rights movement"] },
    { question: "What did Martin Luther King, Jr. do?", correct_answers: ["Fought for civil rights", "Worked for equality for all Americans"] },
    { question: "What major event happened on September 11, 2001, in the United States?", correct_answers: ["Terrorists attacked the United States"] },
    { question: "Name one American Indian tribe in the United States.", correct_answers: ["Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois", "Creek", "Blackfeet", "Seminole", "Cheyenne", "Arawak", "Shawnee", "Mohegan", "Huron", "Oneida", "Lakota", "Crow", "Teton", "Hopi", "Inuit"] },
    { question: "Name one of the two longest rivers in the United States.", correct_answers: ["Missouri River", "Mississippi River"] },
    { question: "What ocean is on the West Coast of the United States?", correct_answers: ["Pacific Ocean"] },
    { question: "What ocean is on the East Coast of the United States?", correct_answers: ["Atlantic Ocean"] },
    { question: "Name one U.S. territory.", correct_answers: ["Puerto Rico", "U.S. Virgin Islands", "American Samoa", "Northern Mariana Islands", "Guam"] },
    { question: "Name one state that borders Canada.", correct_answers: ["Maine", "New Hampshire", "Vermont", "New York", "Pennsylvania", "Ohio", "Michigan", "Minnesota", "North Dakota", "Montana", "Idaho", "Washington", "Alaska"] },
    { question: "Name one state that borders Mexico.", correct_answers: ["California", "Arizona", "New Mexico", "Texas"] },
    { question: "What is the capital of the United States?", correct_answers: ["Washington, D.C."] },
    { question: "Where is the Statue of Liberty?", correct_answers: ["New York Harbor", "Liberty Island"] },
    { question: "Why does the flag have 13 stripes?", correct_answers: ["Because there were 13 original colonies", "Because the stripes represent the original colonies"] },
    { question: "Why does the flag have 50 stars?", correct_answers: ["Because there is one star for each state", "Because each star represents a state", "Because there are 50 states"] },
    { question: "What is the name of the national anthem?", correct_answers: ["The Star-Spangled Banner"] },
    { question: "When do we celebrate Independence Day?", correct_answers: ["July 4"] },
    { question: "Name two national U.S. holidays.", correct_answers: ["New Year's Day", "Martin Luther King, Jr. Day", "Presidents' Day", "Memorial Day", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving", "Christmas"] },
    { question: "What is one promise you make when you become a United States citizen?", correct_answers: ["Give up loyalty to other countries", "Defend the Constitution and laws of the United States", "Obey the laws of the United States", "Serve in the U.S. military (if needed)", "Be loyal to the United States"] },
    { question: "What is one reason colonists came to America?", correct_answers: ["Freedom", "Political liberty", "Religious freedom", "Economic opportunity"] },
    { question: "Who is the 'Father of Our Country'?", correct_answers: ["George Washington"] },
    { question: "Who was the first President?", correct_answers: ["George Washington"] },
    { question: "What group of people was taken to America and sold as slaves?", correct_answers: ["Africans", "People from Africa"] },
    { question: "Why did the colonists fight the British?", correct_answers: ["High taxes", "No self-government"] }
];

