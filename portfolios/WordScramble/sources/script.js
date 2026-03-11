let object = document.getElementById("word"),
    hint = document.getElementById("hint"),
    timer = document.getElementById("timer"),
    input = document.getElementById("input"),
    refreshBtn = document.getElementById("refresh"),
    checkBtn = document.getElementById("check"),
    timeLeft,
    countdown;

function startCountdown() {
    timeLeft = 30;
    timer.textContent = timeLeft;

    clearInterval(countdown);
    countdown = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft < 0) {
            clearInterval(countdown);
            timer.textContent = "0";
            alert(`Time's up! The correct word is ${correctWord.toUpperCase()}`);
            startCountdown();
            refreshGame();
        }
    }, 1000);
}

function refreshGame() {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let randomWord = randomObj.word.split("");

    for (let i = randomWord.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomWord[i], randomWord[j]] = [randomWord[j], randomWord[i]];
    }

    object.textContent = randomWord.join(" ");
    hint.textContent = `Hint: ${randomObj.hint}`;
    correctWord = randomObj.word.toLowerCase();
    input.setAttribute("maxlength", correctWord.length);

    startCountdown();
}

refreshGame();

refreshBtn.addEventListener("click", refreshGame);
checkBtn.addEventListener("click", function(){
    if(input.value === correctWord){
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`)
        input.value = ""
        refreshGame();
        startCountdown();
    } else if(input.value === "") {
        alert("Please enter the word to check!")
    } else{
        alert(`Oops! ${input.value.toUpperCase()} is not a correct word`)
        input.value = ""
    }
});

