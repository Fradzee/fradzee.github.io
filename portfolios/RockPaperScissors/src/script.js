const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
       image.classList.add("active"); 
       
       optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active")
       });

       userResult.src = cpuResult.src = "images/rock.png"
       result.textContent = "Wait..."
       result.style.color = "#7d2ae8"

       gameContainer.classList.add("start")

       setTimeout(() => {
        gameContainer.classList.remove("start")

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let images = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            let values = ["R", "P", "S"];

            let randomIndex = Math.floor(Math.random() * images.length);
            let randomImage = images[randomIndex];
            cpuResult.src = randomImage;

            let cpuValue = values[randomIndex];
            let userValue = values[index];

            let outcomes = {
                RR: "Draw",
                RP: "CPU",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "CPU",
                SS: "Draw",
                SR: "CPU",
                SP: "User",
            };

            let outComesValue = outcomes[userValue + cpuValue];

            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComesValue} Won!!`;

            if (outComesValue === "User") {
                result.style.color = "green";
            } else if (outComesValue === "CPU") {
                result.style.color = "red";
            } else {
                result.style.color = "#7d2ae8"; 
            }

            let userScore = document.querySelector(".user_score"),
            cpuScore = document.querySelector(".cpu_score");
       
            if (outComesValue === "User") {
                userScore.innerHTML = parseInt(userScore.innerHTML)+1;
            } else if (outComesValue === "CPU") {
                cpuScore.innerHTML = parseInt(cpuScore.innerHTML)+1;
            } else {}
       },1200)
    });
});

    