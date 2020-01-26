$(document).ready(function () {


    // Setting up starting variables.
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var number = 20;
    // Questions array

    var myQuestions = [
        {
            question: "Who directed Inception?",
            answers: ["Paul Thomas Anderson", "Christopher Nolan", "Quentin Tarantino"],
            correctaAnswer: 1
        },
        {
            question: "Who plays the Joker in The Dark Knight?",
            answers: ["Jake Gyllenhaal", "Joaquin Phoenix", "Heath Ledger"],
            correctaAnswer: 2
        },
        {
            question: "What planet are the Transformers from?",
            answers: ["Cybertron", "Unicron", "Nebulos"],
            correctaAnswer: 0
        }
    ];

    //user click on start button to create a new game
    $("#start").click(function () {
        $(this).hide();


        // Display initial time countdown
        $("#timeLeft").html("<h2>Time Remaining: 20 Seconds</h2>" + "<br>");

        // Start timer countdown
        run();

        // Display questions 

        $("#question1").html("<h3>" + myQuestions[0].question + "</h3>");
        $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + myQuestions[0].answers[0] + "</label>"
            + "<input type='radio' name='answer1' value='1'>" + "<label>" + myQuestions[0].answers[1] + "</label>"
            + "<input type='radio' name='answer1' value='2'>" + "<label>" + myQuestions[0].answers[2] + "</label><br><br>"
        );

        $("#question2").html("<h3>" + myQuestions[1].question + "</h3>");
        $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + myQuestions[1].answers[0] + "</label>"
            + "<input type='radio' name='answer2' value='1'>" + "<label>" + myQuestions[1].answers[1] + "</label>"
            + "<input type='radio' name='answer2' value='2'>" + "<label>" + myQuestions[1].answers[2] + "</label><br><br>"
        );

        $("#question3").html("<h3>" + myQuestions[2].question + "</h3>");
        $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + myQuestions[2].answers[0] + "</label>"
            + "<input type='radio' name='answer3' value='1'>" + "<label>" + myQuestions[2].answers[1] + "</label>"
            + "<input type='radio' name='answer3' value='2'>" + "<label>" + myQuestions[2].answers[2] + "</label><br><br>"
        );

        // Submit button
        $("#submit").html("<button id='done' class='btn'>Done</button>");

        // Click event runs keepingScore() and displayResults() when user clicks Done button
        $("#done").on("click", function () {


            // Click event runs keepingScore() and displayResults() when user clicks Done button
            /*$("#done").click(function () {
                console.log("Thanks for visiting!");
            });*/



            // Keeping track of score based on correct, incorrect, and unanswered
            score();

            // Display 
            displayResults();

        });

    });

    // Timer countdown function
    function run() {

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        //  Decrease number by one.
        number--;

        //  Show the number in the #time tag
        $("#timeLeft").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

        if (number === 0) {

            // Run stop function to stop timer countdown
            stop();

            score();
            displayResults();

        }
    }

    function stop() {


        clearInterval(intervalId);
    }


    // Function used for displaying results in terms of correct, incorrect, and unanswered
    function displayResults() {

        $("#timeLeft").hide();
        $("#question1").hide();
        $("#answer1").hide();
        $("#question2").hide();
        $("#answer2").hide();
        $("#question3").hide();
        $("#answer3").hide();
        $("#submit").hide();

        $("#finalMessage").html("<h3>All Done!</h3>");
        $("#correct").html("Correct Answers: " + correctAnswers);
        $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
        $("#unanswered").html("Unanswered: " + unanswered);
    }

    // Function keeps score in terms of correct, incorrect, and unanswered
    function score() {

        var userAnswer1 = $("input[name='answer1']:checked").val();
        var userAnswer2 = $("input[name='answer2']:checked").val();
        var userAnswer3 = $("input[name='answer3']:checked").val();

        // Question 1
        if (userAnswer1 === undefined) {

            unanswered++;
        }
        else if (userAnswer1 == myQuestions[0].correctaAnswer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

        // Question 2
        if (userAnswer2 === undefined) {

            unanswered++;
        }
        else if (userAnswer2 == myQuestions[1].correctaAnswer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

        // Question 3
        if (userAnswer3 === undefined) {

            unanswered++;
        }
        else if (userAnswer3 == myQuestions[2].correctaAnswer) {

            correctAnswers++;
        }
        else {

            incorrectAnswers++;
        }

    }



});



