
const questions = [
    
        {
            question: "What is the first step in conducting research?",
            choices: ["Formulating a research question", "Analyzing data", "Writing the abstract", "Creating a presentation"],
            answer: "Formulating a research question"
        },
        {
            question: "What is the purpose of a research hypothesis?",
            choices: ["To provide a conclusion", "To conduct a survey", "To predict the outcome of the study", "To collect data"],
            answer: "To predict the outcome of the study"
        },
        {
            question: "Which part of a research paper provides a summary of the study?",
            choices: ["Introduction", "Methodology", "Abstract", "Conclusion"],
            answer: "Abstract"
        },
        {
            question: "What is the variable that is manipulated in an experiment?",
            choices: ["Dependent variable", "Independent variable", "Controlled variable", "Extraneous variable"],
            answer: "Independent variable"
        },
        {
            question: "Which research design is used to explore cause-and-effect relationships?",
            choices: ["Descriptive", "Experimental", "Correlational", "Qualitative"],
            answer: "Experimental"
        },
        {
            question: "What type of research aims to solve practical problems?",
            choices: ["Basic research", "Applied research", "Theoretical research", "Exploratory research"],
            answer: "Applied research"
        },
        {
            question: "Which sampling technique gives every member of the population an equal chance of being selected?",
            choices: ["Convenience sampling", "Purposive sampling", "Random sampling", "Snowball sampling"],
            answer: "Random sampling"
        },
        {
            question: "What is the main purpose of a literature review?",
            choices: ["To collect data", "To analyze research findings", "To summarize existing studies", "To draw conclusions"],
            answer: "To summarize existing studies"
        },
        {
            question: "Which research approach focuses on numerical data?",
            choices: ["Qualitative research", "Quantitative research", "Mixed methods research", "Theoretical research"],
            answer: "Quantitative research"
        },
        {
            question: "What do you call a study that observes participants over a long period?",
            choices: ["Case study", "Longitudinal study", "Experimental study", "Cross-sectional study"],
            answer: "Longitudinal study"
        },
        {
            question: "Which section of a research paper explains how the study was conducted?",
            choices: ["Abstract", "Methodology", "Findings", "Discussion"],
            answer: "Methodology"
        },
        {
            question: "What ethical principle ensures that participants are fully informed about a study before participating?",
            choices: ["Confidentiality", "Anonymity", "Informed consent", "Voluntary participation"],
            answer: "Informed consent"
        },
        {
            question: "Which data collection method involves asking participants questions directly?",
            choices: ["Observation", "Survey", "Document analysis", "Experiment"],
            answer: "Survey"
        },
        {
            question: "What is a null hypothesis?",
            choices: ["A statement predicting a relationship", "A hypothesis that assumes no effect or relationship", "An untested assumption", "A proven theory"],
            answer: "A hypothesis that assumes no effect or relationship"
        },
        {
            question: "Which statistical test is commonly used to compare the means of two groups?",
            choices: ["Chi-square test", "ANOVA", "T-test", "Regression analysis"],
            answer: "T-test"
        },
        {
            question: "What is the main goal of research?",
            choices: ["To prove a point", "To generate knowledge", "To confirm biases", "To publish a paper"],
            answer: "To generate knowledge"
        },
        {
            question: "Which type of research explores patterns and themes in data?",
            choices: ["Qualitative research", "Quantitative research", "Experimental research", "Descriptive research"],
            answer: "Qualitative research"
        },
        {
            question: "What is the process of organizing and summarizing collected data?",
            choices: ["Data collection", "Data analysis", "Data validation", "Data gathering"],
            answer: "Data analysis"
        },
        {
            question: "Which research design involves studying one subject in depth?",
            choices: ["Survey research", "Case study", "Experimental research", "Longitudinal research"],
            answer: "Case study"
        },
        {
            question: "What is plagiarism?",
            choices: ["Citing sources properly", "Using someone else’s work as your own", "Paraphrasing ideas", "Conducting research ethically"],
            answer: "Using someone else’s work as your own"
        },
        {
            question: "Which section of a research paper discusses the meaning of the findings?",
            choices: ["Introduction", "Methodology", "Discussion", "References"],
            answer: "Discussion"
        },
        {
            question: "What is the role of an operational definition in research?",
            choices: ["To provide a dictionary definition", "To define how variables are measured", "To create a hypothesis", "To summarize data"],
            answer: "To define how variables are measured"
        },
        {
            question: "Which type of research relies on firsthand experiences and observations?",
            choices: ["Theoretical research", "Empirical research", "Conceptual research", "Descriptive research"],
            answer: "Empirical research"
        },
        {
            question: "What does a p-value indicate in research?",
            choices: ["The probability that the null hypothesis is true", "The sample size", "The mean of the data", "The number of variables"],
            answer: "The probability that the null hypothesis is true"
        },
        {
            question: "Which of the following is NOT a qualitative research method?",
            choices: ["Case study", "Survey", "Focus group", "Ethnography"],
            answer: "Survey"
        },
        {
            question: "What is triangulation in research?",
            choices: ["Using multiple methods to validate results", "A type of survey", "A mathematical formula", "A type of hypothesis"],
            answer: "Using multiple methods to validate results"
        },
        {
            question: "Which research method involves analyzing pre-existing data?",
            choices: ["Experiment", "Survey", "Secondary research", "Ethnography"],
            answer: "Secondary research"
        },
        {
            question: "What is the difference between primary and secondary data?",
            choices: ["Primary data is collected firsthand, secondary data is pre-existing", "Primary data is numerical, secondary data is qualitative", "Primary data is unreliable, secondary data is accurate", "There is no difference"],
            answer: "Primary data is collected firsthand, secondary data is pre-existing"
        },
        {
            question: "Which software is commonly used for statistical analysis in research?",
            choices: ["Photoshop", "SPSS", "PowerPoint", "Notepad"],
            answer: "SPSS"
        },
        {
            question: "What is an example of a qualitative research question?",
            choices: ["What is the average age of employees?", "What are the experiences of cancer survivors?", "How many students passed the exam?", "What is the relationship between height and weight?"],
            answer: "What are the experiences of cancer survivors?"
        }
        [
            {
                question: "What is the first step in conducting research?",
                choices: ["Formulating a research question", "Analyzing data", "Writing the abstract", "Creating a presentation"],
                answer: "Formulating a research question"
            },
            {
                question: "What is the purpose of a research hypothesis?",
                choices: ["To provide a conclusion", "To conduct a survey", "To make a prediction", "To analyze findings"],
                answer: "To make a prediction"
            },
            {
                question: "Which research method is commonly used for qualitative research?",
                choices: ["Experiment", "Survey", "Interview", "Statistical analysis"],
                answer: "Interview"
            },
            {
                question: "What is the main characteristic of quantitative research?",
                choices: ["It focuses on numerical data", "It relies on personal experiences", "It does not use statistics", "It has no hypothesis"],
                answer: "It focuses on numerical data"
            },
            {
                question: "What part of a research paper provides a summary of the entire study?",
                choices: ["Introduction", "Abstract", "Methodology", "Conclusion"],
                answer: "Abstract"
            },
            {
                question: "Which of the following is NOT a type of research design?",
                choices: ["Descriptive", "Experimental", "Narrative", "Computational"],
                answer: "Computational"
            },
            {
                question: "What is the primary purpose of a literature review?",
                choices: ["To summarize past research", "To present new findings", "To collect survey responses", "To write conclusions"],
                answer: "To summarize past research"
            },
            {
                question: "Which research approach focuses on understanding human behavior and experiences?",
                choices: ["Qualitative", "Quantitative", "Mixed methods", "Experimental"],
                answer: "Qualitative"
            },
            {
                question: "What is the best way to avoid plagiarism in research writing?",
                choices: ["Copy and paste from sources", "Use proper citations", "Do not use references", "Summarize without citing"],
                answer: "Use proper citations"
            },
            {
                question: "What section of a research paper explains how data was collected and analyzed?",
                choices: ["Introduction", "Methodology", "Findings", "Conclusion"],
                answer: "Methodology"
            },
            {
                question: "Which of the following is an example of a primary source?",
                choices: ["A textbook", "A research article", "An interview transcript", "A Wikipedia page"],
                answer: "An interview transcript"
            },
            {
                question: "What is the purpose of a research problem statement?",
                choices: ["To list references", "To summarize findings", "To identify the research gap", "To describe the research setting"],
                answer: "To identify the research gap"
            },
            {
                question: "Which data collection method is best for gathering opinions from a large number of people?",
                choices: ["Case study", "Survey", "Experiment", "Focus group discussion"],
                answer: "Survey"
            },
            {
                question: "What does a research variable represent?",
                choices: ["A fixed number", "An element that can change", "A specific research question", "A conclusion"],
                answer: "An element that can change"
            },
            {
                question: "Which of the following is an ethical concern in research?",
                choices: ["Data collection", "Plagiarism", "Survey distribution", "Hypothesis testing"],
                answer: "Plagiarism"
            },
            {
                question: "What type of research aims to solve practical problems?",
                choices: ["Basic research", "Applied research", "Theoretical research", "Exploratory research"],
                answer: "Applied research"
            },
            {
                question: "What is a common tool used for analyzing statistical data?",
                choices: ["Excel", "SPSS", "NVivo", "All of the above"],
                answer: "All of the above"
            },
            {
                question: "Which sampling technique ensures every individual has an equal chance of being selected?",
                choices: ["Purposive sampling", "Random sampling", "Snowball sampling", "Convenience sampling"],
                answer: "Random sampling"
            },
            {
                question: "What section of a research paper discusses the findings and their significance?",
                choices: ["Methodology", "Discussion", "Abstract", "Literature review"],
                answer: "Discussion"
            },
            {
                question: "What does 'peer-reviewed' mean in academic research?",
                choices: ["Reviewed by experts", "Published on a website", "Written by a student", "Contains personal opinions"],
                answer: "Reviewed by experts"
            },
            {
                question: "Which research approach combines both qualitative and quantitative methods?",
                choices: ["Mixed methods", "Descriptive", "Exploratory", "Longitudinal"],
                answer: "Mixed methods"
            },
            {
                question: "What is the key difference between qualitative and quantitative research?",
                choices: ["Qualitative uses numbers, quantitative uses words", "Quantitative is subjective, qualitative is objective", "Qualitative is narrative, quantitative is numerical", "Both are the same"],
                answer: "Qualitative is narrative, quantitative is numerical"
            },
            {
                question: "What type of study observes participants over a long period?",
                choices: ["Cross-sectional", "Longitudinal", "Experimental", "Case study"],
                answer: "Longitudinal"
            },
            {
                question: "What is the main goal of an experimental research design?",
                choices: ["To describe a phenomenon", "To establish cause and effect", "To explore new theories", "To summarize previous research"],
                answer: "To establish cause and effect"
            },
            {
                question: "What is the importance of reliability in research?",
                choices: ["It ensures consistency", "It proves the hypothesis", "It makes the study longer", "It allows for bias"],
                answer: "It ensures consistency"
            },
            {
                question: "What is a control group in experimental research?",
                choices: ["A group that receives treatment", "A group that does not receive treatment", "A randomly selected sample", "A survey respondent"],
                answer: "A group that does not receive treatment"
            },
            {
                question: "What does an informed consent form ensure?",
                choices: ["Participants understand the study", "Data remains confidential", "Participants can withdraw", "All of the above"],
                answer: "All of the above"
            },
            {
                question: "Which is NOT a characteristic of a good research question?",
                choices: ["Specific", "Broad", "Measurable", "Relevant"],
                answer: "Broad"
            },
            {
                question: "What is the primary purpose of a conclusion in research?",
                choices: ["To introduce new topics", "To summarize findings", "To present raw data", "To list references"],
                answer: "To summarize findings"
            }
        ]
        
    
];

// Variables to track player health
let chouHP = 100, dyrrothHP = 100;
const maxHP = 100, damage = 20, penalty = 10, heal = 10;
let currentQuestionIndex = 0, isChouTurn = true, gameOver = false;

// Sound effects for attack and damage
const attackSound = new Audio("sounds/attack.mp3");
const damageSound = new Audio("sounds/damage.mp3");

// Initialize the game on page load
window.onload = function () {
    loadQuestion();
    updateTurn();
    updateHP("chou-hp", chouHP);
    updateHP("dyrroth-hp", dyrrothHP);
};

// Load a new question and update the choices
function loadQuestion() {
    if (gameOver) return; // Stop loading questions if the game is over
    
    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    
    let choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    
    // Shuffle and display choices
    questionData.choices.sort(() => Math.random() - 0.5).forEach(choice => {
        let btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(btn);
    });
}

// Check if the selected answer is correct and update HP accordingly
function checkAnswer(userAnswer) {
    if (gameOver) return; // Prevent answering if the game is over
    
    let correctAnswer = questions[currentQuestionIndex].answer;
    let damageTarget = isChouTurn ? "dyrroth-hp" : "chou-hp";
    let attacker = isChouTurn ? "chou-img" : "dyrroth-img";
    let defender = isChouTurn ? "dyrroth-img" : "chou-img";
    
    if (userAnswer === correctAnswer) {
        // Correct answer: deal damage to the opponent and heal the attacker
        isChouTurn ? dyrrothHP -= damage : chouHP -= damage;
        isChouTurn ? chouHP = Math.min(chouHP + heal, maxHP) : dyrrothHP = Math.min(dyrrothHP + heal, maxHP);
        animateAttack(attacker, defender);
    } else {
        // Incorrect answer: apply penalty damage to the current player
        isChouTurn ? chouHP -= penalty : dyrrothHP -= penalty;
        animateDamage(attacker);
    }
    
    // Update the HP bars
    updateHP(damageTarget, isChouTurn ? dyrrothHP : chouHP);
    updateHP(isChouTurn ? "chou-hp" : "dyrroth-hp", isChouTurn ? chouHP : dyrrothHP);
    
    // Check if the game is over
    if (checkGameOver()) return;
    
    // Move to the next question
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    isChouTurn = !isChouTurn;
    updateTurn();
    loadQuestion();
}

// Update the UI to show whose turn it is
function updateTurn() {
    document.getElementById("current-turn").innerText = isChouTurn ? "It’s player 1 turn!" : "It’s player 2 turn!";
}

// Check if the game is over and declare the winner
function checkGameOver() {
    if (chouHP <= 0 || dyrrothHP <= 0) {
        document.getElementById("winner").innerText = chouHP <= 0 ? "player 1 Wins!" : "player 2 Wins!";
        disableGame();
        gameOver = true;
        return true;
    }
    return false;
}

// Play attack animation and sound
function animateAttack(attacker, defender) {
    attackSound.play();
    document.getElementById(attacker).classList.add("attack");
    document.getElementById(defender).classList.add("damage");
    setTimeout(() => {
        damageSound.play();
        document.getElementById(attacker).classList.remove("attack");
        document.getElementById(defender).classList.remove("damage");
    }, 300);
}

// Play damage animation
function animateDamage(heroId) {
    document.getElementById(heroId).classList.add("damage");
    setTimeout(() => {
        document.getElementById(heroId).classList.remove("damage");
    }, 300);
}

// Update the HP bar UI
function updateHP(barId, hp) {
    let hpPercentage = (hp / maxHP) * 100;
    const hpBar = document.getElementById(barId);
    hpBar.style.width = `${hpPercentage}%`;
    hpBar.style.backgroundColor = hp > 50 ? "limegreen" : hp > 20 ? "orange" : "red";
}

// Disable game UI when the game is over
function disableGame() {
    document.getElementById("question").innerText = "Game Over!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("restart-btn").style.display = "inline-block";
}
document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "../dashboard/index.html"; // Change to your actual main menu file
});
// Restart the game and reset all variables
function restartGame() {
    chouHP = maxHP;
    dyrrothHP = maxHP;
    currentQuestionIndex = 0;
    isChouTurn = true;
    gameOver = false;
    document.getElementById("winner").innerText = "";
    document.getElementById("restart-btn").style.display = "none";
    updateHP("chou-hp", chouHP);
    updateHP("dyrroth-hp", dyrrothHP);
    loadQuestion();
    updateTurn();
}