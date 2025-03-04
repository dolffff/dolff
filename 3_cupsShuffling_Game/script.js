let correctAnswers = 0;
let mode = "easy";
let cupCount = 3;
let ballPosition;
let hasPicked = false;
let firstShuffle = true;

document.addEventListener("DOMContentLoaded", () => {
    updateCups();
    updateCounter();
    updateModeDisplay();
    document.getElementById("shuffle-btn").classList.remove("hidden"); // Enable shuffle button
    disableCups(); // Disable cups initially
});

function updateCounter() {
    let counterText = `Correct Answers: ${correctAnswers}/3`;
    document.getElementById("counter").innerText = counterText;
}

function updateCups() {
    const container = document.querySelector(".cups-container");
    container.innerHTML = "";
    let cupWidth = 100;
    let spacing = 120;
    let offset = (container.clientWidth - (cupCount * spacing - (spacing - cupWidth))) / 2; // Calculate offset to center cups
    for (let i = 0; i < cupCount; i++) {
        let cup = document.createElement("div");
        cup.classList.add("cup");
        cup.style.left = `${i * spacing + offset}px`; // Apply offset
        cup.onclick = () => pickCup(i);
        cup.id = `cup${i}`;
        container.appendChild(cup);
    }
    resetGame();
}

function resetGame() {
    ballPosition = Math.floor(Math.random() * cupCount);
    hasPicked = false;
    document.getElementById("result").innerText = "";
    document.getElementById("question").classList.add("hidden");
    document.getElementById("shuffle-next").classList.add("hidden");
    if (firstShuffle) {
        document.getElementById("shuffle-btn").classList.add("hidden");
        firstShuffle = false;
    }
}

function revealAndShuffle() {
    disableCups();
    document.getElementById("shuffle-btn").classList.add("hidden"); // Hide shuffle button
    document.getElementById("result").innerText = ""; // Clear result text
    revealAllCups();
    setTimeout(() => {
        hideBall();
        const { shuffleCount, delay } = enhancedShuffleCups(); // Get shuffleCount and delay
        setTimeout(enableCups, (shuffleCount * delay) + 500); // Enable cups after shuffling is complete
    }, 2000);
}

function nextRound() {
    resetGame();
    document.getElementById("shuffle-next").classList.add("hidden"); // Hide next round button
    document.getElementById("shuffle-btn").classList.remove("hidden"); // Show shuffle button
}

function disableCups() {
    document.querySelectorAll('.cup').forEach(cup => {
        cup.style.pointerEvents = 'none';
    });
}

function enableCups() {
    document.querySelectorAll('.cup').forEach(cup => {
        cup.style.pointerEvents = 'auto';
    });
}

function revealAllCups() {
    const cups = document.querySelectorAll(".cup");
    cups.forEach((cup, index) => {
        cup.innerHTML = index === ballPosition ? '<div class="ball"></div>' : '<div class="wrong-mark">X</div>';
    });
}

function hideBall() {
    document.querySelectorAll(".cup").forEach(cup => {
        cup.innerHTML = "";
    });
}

function enhancedShuffleCups() {
    hasPicked = false;
    ballPosition = Math.floor(Math.random() * cupCount);
    const positions = Array.from({ length: cupCount }, (_, i) => i * 120);

    let shuffleCount;
    let delay;

    if (mode === "easy") {
        shuffleCount = 3 + Math.floor(Math.random() * 3); // Random shuffle times between 3 and 5
        delay = 400; // Slow shuffle speed
    } else if (mode === "normal") {
        shuffleCount = 5 + Math.floor(Math.random() * 5); // Random shuffle times between 5 and 9
        delay = 200; // Normal shuffle speed
    } else if (mode === "hard") {
        shuffleCount = 7 + Math.floor(Math.random() * 5); // Random shuffle times between 7 and 11
        delay = 100; // Fast shuffle speed
    }

    for (let i = 0; i < shuffleCount; i++) {
        setTimeout(() => {
            positions.sort(() => Math.random() - 0.5);
            document.querySelectorAll(".cup").forEach((cup, index) => {
                cup.style.transition = "left 0.5s ease-in-out";
                cup.style.left = positions[index] + "px";
                cup.classList.add("juggle");
                setTimeout(() => {
                    cup.classList.remove("juggle");
                }, 500);
            });
        }, i * delay);
    }

    return { shuffleCount, delay }; // Return shuffleCount and delay
}

function pickCup(index) {
    if (hasPicked) return;
    hasPicked = true;
    const selectedCup = document.getElementById(`cup${index}`);
    if (index === ballPosition) {
        selectedCup.innerHTML = '<div class="ball"></div>';
        document.getElementById("result").innerText = "Congratulations! You found the ball!";
        correctAnswers++;
        updateCounter();
        document.getElementById("shuffle-next").classList.remove("hidden");
    } else {
        selectedCup.innerHTML = '<div class="wrong-mark">X</div>';
        selectedCup.classList.add("shake");
        setTimeout(() => selectedCup.classList.remove("shake"), 500);
        revealAllCups();
        showQuestion();
    }
    disableCups(); // Ensure cups are disabled after revealing the answer
}

function showQuestion() {
    document.getElementById("question").classList.remove("hidden");
    document.body.classList.add("question-active"); // Add this line
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;
    document.getElementById("question-text").innerText = `What is ${num1} + ${num2}?`;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    let answers = [correctAnswer, correctAnswer + 1, correctAnswer - 1].sort(() => Math.random() - 0.5);
    answers.forEach(answer => {
        let btn = document.createElement("button");
        btn.classList.add("choice");
        btn.innerText = answer;
        btn.onclick = function() {
            disableChoices();
            if (answer === correctAnswer) {
                correctAnswers++;
                updateCounter();
                checkProgress(); // Ensure checkProgress is called after updating the counter
                alert("Correct!");
                document.getElementById("shuffle-next").classList.remove("hidden");
            } else {
                alert("Wrong! The correct answer was " + correctAnswer);
                if (document.getElementById("shuffle-btn").classList.contains("hidden")) {
                    document.getElementById("shuffle-btn").classList.remove("hidden"); // Show shuffle button for reshuffling
                }
                alert("Please reshuffle the cups and try again.");
            }
            document.body.classList.remove("question-active"); // Remove overlay
            document.getElementById("question").classList.add("hidden"); // Hide question container
            disableCups(); // Ensure cups remain disabled after alert
        };
        choicesDiv.appendChild(btn);
    });
}

function disableChoices() {
    document.querySelectorAll('.choice').forEach(choice => {
        choice.style.pointerEvents = 'none';
    });
}

function checkProgress() {
    if (mode === "easy" && correctAnswers >= 2) { // Change to 2 correct answers
        mode = "normal";
        cupCount = 4;
        correctAnswers = 0; // Reset correct answers
        alert("You've unlocked Normal mode!");
        updateCups();
        updateCounter(); // Update counter display
        updateModeDisplay();
    } else if (mode === "normal" && correctAnswers >= 2) { // Change to 2 correct answers
        mode = "hard";
        cupCount = 5;
        correctAnswers = 0; // Reset correct answers
        alert("You've unlocked Hard mode!");
        updateCups();
        updateCounter(); // Update counter display
        updateModeDisplay();
    } else if (mode === "hard" && correctAnswers >= 2) { // Change to 2 correct answers
        alert("Congratulations! You've completed Hard mode!");
        document.getElementById("shuffle-next").classList.add("hidden"); // Hide next round button
        showRestartButton();
    }
}
function showRestartButton() {
    // Hide other buttons
    document.getElementById("shuffle-btn").classList.add("hidden");
    document.getElementById("shuffle-next").classList.add("hidden");

    let restartButton = document.getElementById("restart-btn");
    if (!restartButton) {
        restartButton = document.createElement("button");
        restartButton.id = "restart-btn";
        restartButton.innerText = "Restart to Easy Mode";
        restartButton.onclick = restartToEasyMode;
        document.body.appendChild(restartButton);
    }
    restartButton.classList.remove("hidden"); // Ensure it's visible
}

function restartToEasyMode() {
    mode = "easy";
    cupCount = 3;
    correctAnswers = 0; // Reset correct answers
    updateCups();
    updateCounter();
    updateModeDisplay();

    let restartButton = document.getElementById("restart-btn");
    if (restartButton) restartButton.remove(); // Remove restart button

    document.getElementById("shuffle-btn").classList.remove("hidden"); // Show shuffle button for new game
}
function updateModeDisplay() {
    document.getElementById("mode-display").innerText = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
}
