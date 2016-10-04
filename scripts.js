var answers = ["Sure", 
               "You can bet on it!", 
               "I would not do it", 
               "Better think it twice", 
               "Good luck..", 
               "Are you really sure about it?"];

var getPrediction = function() {
    var randomAnswer = Math.random();
        if (randomAnswer < 0.15) {
            randomAnswer = answers[0];
            document.getElementById("answer").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.3) {
            randomAnswer = answers[1];
            document.getElementById("answer").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.45) {
            randomAnswer = answers[2];
            document.getElementById("answer").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.6) {
            randomAnswer = answers[3];
            document.getElementById("answer").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.75) {
            randomAnswer = answers[4];
            document.getElementById("answer").innerHTML = randomAnswer;
        }
        else if(randomAnswer < 0.9) {
            randomAnswer = answers[5];
            document.getElementById("answer").innerHTML = randomAnswer;
        }
}