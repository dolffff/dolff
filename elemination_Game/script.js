let score = 0;
let maxScore = 0;
let lives = 1;
let questionActive = false;
const userScore = document.getElementById('user-score');
const userLives = document.getElementById('user-lives');
const highestScore = document.getElementById('highest-score');

const questions = {
    easy: [
        { question: "What is the first step in conducting research?", choices: ["Data Collection", "Formulating a Research Problem", "Analyzing Data", "Writing a Conclusion"], answer: "Formulating a Research Problem" },
        { question: "What is a hypothesis?", choices: ["A research title", "A tentative explanation", "A survey", "A citation"], answer: "A tentative explanation" },
        { question: "Which is NOT a characteristic of good research?", choices: ["Systematic", "Objective", "Biased", "Logical"], answer: "Biased" },
        { question: "What type of research focuses on real-world problems?", choices: ["Basic Research", "Applied Research", "Experimental Research", "Theoretical Research"], answer: "Applied Research" },
        { question: "What is the primary purpose of a literature review?", choices: ["To collect new data", "To summarize existing research", "To conduct experiments", "To write conclusions"], answer: "To summarize existing research" },
        { question: "What part of research introduces the topic and objectives?", choices: ["Methodology", "Introduction", "Findings", "Bibliography"], answer: "Introduction" },
        { question: "What do you call the group being studied in research?", choices: ["Control Group", "Sample", "Experiment", "Research Gap"], answer: "Sample" },
        { question: "What is the tool used to gather data in a survey?", choices: ["Hypothesis", "Questionnaire", "Analysis", "Abstract"], answer: "Questionnaire" },
        { question: "Which is a type of qualitative research?", choices: ["Experimental", "Case Study", "Survey", "Descriptive Statistics"], answer: "Case Study" },
        { question: "What do you call the final part of research that summarizes findings?", choices: ["Introduction", "Data Collection", "Conclusion", "Hypothesis"], answer: "Conclusion" }
    ],
    normal: [
        { question: "What is an example of a quantitative research method?", choices: ["Interview", "Survey with numerical data", "Observation", "Case Study"], answer: "Survey with numerical data" },
        { question: "What term refers to the ethical principle of protecting participant information?", choices: ["Confidentiality", "Transparency", "Plagiarism", "Hypothesis"], answer: "Confidentiality" },
        { question: "Which variable is manipulated in an experiment?", choices: ["Dependent Variable", "Control Variable", "Independent Variable", "Confounding Variable"], answer: "Independent Variable" },
        { question: "What does validity in research refer to?", choices: ["If results can be generalized", "If results measure what they intend to", "If results are consistent", "If results are biased"], answer: "If results measure what they intend to" },
        { question: "What sampling technique ensures every member has an equal chance?", choices: ["Convenience Sampling", "Stratified Sampling", "Random Sampling", "Quota Sampling"], answer: "Random Sampling" },
        { question: "What is the significance of a conceptual framework?", choices: ["It presents a summary of findings", "It guides the research process", "It ensures ethical considerations", "It contains statistical formulas"], answer: "It guides the research process" },
        { question: "Which section of research explains how data was gathered?", choices: ["Methodology", "Results", "Abstract", "Recommendations"], answer: "Methodology" },
        { question: "What is triangulation in qualitative research?", choices: ["Using multiple research methods", "Focusing on a single case", "A type of survey", "A literature review technique"], answer: "Using multiple research methods" },
        { question: "What statistical measure describes the average value of a dataset?", choices: ["Median", "Mode", "Mean", "Range"], answer: "Mean" },
        { question: "Which part of research states the research problem?", choices: ["Methodology", "Introduction", "Results", "Conclusion"], answer: "Introduction" }
    ],
    hard: [
        { question: "What is the purpose of an operational definition in research?", choices: ["To define a variable for measurement", "To summarize findings", "To describe previous research", "To propose a hypothesis"], answer: "To define a variable for measurement" },
        { question: "Which research approach focuses on in-depth understanding rather than numerical data?", choices: ["Qualitative", "Quantitative", "Experimental", "Longitudinal"], answer: "Qualitative" },
        { question: "What does reliability in research refer to?", choices: ["Consistency of results", "Accuracy of measurement", "Ethical considerations", "Validity of findings"], answer: "Consistency of results" },
        { question: "Which statistical test compares two means?", choices: ["Chi-square test", "ANOVA", "T-test", "Regression"], answer: "T-test" },
        { question: "What is the main goal of descriptive research?", choices: ["To explain causation", "To describe characteristics", "To test a hypothesis", "To conduct an experiment"], answer: "To describe characteristics" },
        { question: "What is a null hypothesis?", choices: ["A proven statement", "A hypothesis that suggests no effect", "An alternative hypothesis", "A conclusion"], answer: "A hypothesis that suggests no effect" },
        { question: "Which sampling technique divides the population into groups?", choices: ["Cluster Sampling", "Random Sampling", "Convenience Sampling", "Systematic Sampling"], answer: "Cluster Sampling" },
        { question: "What is a pilot study?", choices: ["A large-scale experiment", "A small trial run of research", "A literature review", "A final research report"], answer: "A small trial run of research" },
        { question: "What type of research aims to solve specific real-world problems?", choices: ["Basic Research", "Applied Research", "Exploratory Research", "Longitudinal Research"], answer: "Applied Research" },
        { question: "Which ethical principle ensures voluntary participation?", choices: ["Anonymity", "Confidentiality", "Informed Consent", "Objectivity"], answer: "Informed Consent" }
    ],
    advanced: [
        { question: "What type of validity measures how well a test predicts outcomes?", choices: ["Face Validity", "Content Validity", "Predictive Validity", "Construct Validity"], answer: "Predictive Validity" },
        { question: "What is an example of a longitudinal study?", choices: ["A one-time survey", "Observing changes over years", "An experimental trial", "A case study"], answer: "Observing changes over years" },
        { question: "Which research method is best for understanding human experiences?", choices: ["Surveys", "Phenomenology", "Experimental Research", "Regression Analysis"], answer: "Phenomenology" },
        { question: "What is a moderator variable?", choices: ["A variable that changes the relationship between two variables", "An independent variable", "A dependent variable", "A confounding variable"], answer: "A variable that changes the relationship between two variables" },
        { question: "Which research method is based on historical records?", choices: ["Experimental", "Historical Research", "Descriptive", "Ethnographic"], answer: "Historical Research" },
        { question: "What is an example of a quasi-experimental design?", choices: ["Randomized trial", "Case study", "Pre-test/post-test without randomization", "Survey"], answer: "Pre-test/post-test without randomization" },
        { question: "What statistical test is used to compare multiple groups?", choices: ["T-test", "ANOVA", "Chi-square", "Regression"], answer: "ANOVA" },
        { question: "Which research method collects data through participant observation?", choices: ["Ethnography", "Survey", "Experimental", "Correlation"], answer: "Ethnography" },
        { question: "What does the term 'generalizability' mean in research?", choices: ["Applicability to other settings", "Repetition of research", "Analyzing a hypothesis", "Formulating a problem"], answer: "Applicability to other settings" },
        { question: "What type of sampling selects individuals based on specific criteria?", choices: ["Random Sampling", "Purposive Sampling", "Snowball Sampling", "Systematic Sampling"], answer: "Purposive Sampling" }
    ]
};


let currentHero = { column: 'easy', index: 0 };

document.querySelectorAll('.hero').forEach(hero => {
    hero.addEventListener('click', function() {
        const [column, index] = this.id.split('-');
        startQuestion(column, parseInt(index.replace('hero', '')) - 1);
    });
});

function startQuestion(column, index) {
    if (questionActive) return; // Prevent selecting a new hero before answering
    questionActive = true; // Set flag to true when a question starts

    currentHero = { column, index };

    const questionData = getRandomQuestion(column);
    document.getElementById('current-question').innerText = questionData.question;

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    questionData.choices.forEach(choice => {
        const choiceButton = document.createElement('div');
        choiceButton.classList.add('choice');
        choiceButton.innerText = choice;
        choiceButton.onclick = function () {
            handleAnswer(choice, choiceButton, questionData.answer);
        };
        choicesContainer.appendChild(choiceButton);
    });
}

function getRandomQuestion(column) {
    const questionsArray = questions[column];
    return questionsArray[Math.floor(Math.random() * questionsArray.length)];
}

function handleAnswer(choice, choiceButton, correctAnswer) {
    if (choice === correctAnswer) {
        choiceButton.classList.add('correct');
        document.getElementById(`${currentHero.column}-hero${currentHero.index + 1}`).classList.add('crossed-out');
        score += 10;
        userScore.innerText = score;
        
        if (score > maxScore) {
            maxScore = score;
            highestScore.innerText = maxScore;
        }
        
        alert('Correct! Now select your next hero.');
        questionActive = false; // Allow selecting a new hero
    } else {
        choiceButton.classList.add('incorrect');
        lives -= 1;
        userLives.innerText = lives;
        
        if (lives === 0) {
            alert('Game Over! Restarting...');
            restartGame();
        } else {
            alert('Wrong answer! The game will restart.');
            restartGame(); // Restart even after a wrong answer
        }
    }

    disableChoices();
}




function disableChoices() {
    document.querySelectorAll('.choice').forEach(button => button.onclick = null);
}

function moveToNextHero() {
    if (isGameCompleted()) {
        showCongratsMessage();
        return;
    }

    if (currentHero.index < 4) { // 5 heroes per difficulty (index 0-4)
        currentHero.index++;
    } else {
        moveToNextColumn();
    }
    
    // No longer calling startQuestion() here
}



// Function to check if all heroes have been crossed out
function isGameCompleted() {
    return document.querySelectorAll('.hero:not(.crossed-out)').length === 0;
}

// Function to show the congratulations message
function showCongratsMessage() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('congrats-message').classList.remove('hidden');
}

// Function to restart the game
function restartGame() {
    score = 0;
    lives = 1;
    questionActive = false; // Allow hero selection again

    userScore.innerText = score;
    userLives.innerText = lives;

    document.querySelectorAll('.hero').forEach(hero => hero.classList.remove('crossed-out'));

    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('congrats-message').classList.add('hidden');

    document.getElementById('current-question').innerText = "Click a hero to start!";
    document.getElementById('choices-container').innerHTML = ""; // Remove previous choices
}


