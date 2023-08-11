const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et felis sit amet dolor cursus lacinia.
     Nullam ultricies leo sit amet risus dictum bibendum. Aliquam fringilla, neque a congue interdum, libero nisi tristique elit, 
     vel mattis justo urna vel velit.`;
const characters = text.split('');
let totalTyped = 0;

function showResults(seconds) {
    $("#user-input").prop("disabled", true);
    const timeTakenInMinutes = (20 - seconds) / 60;
    const wpm = (totalTyped / 5) / timeTakenInMinutes;
    console.log(wpm)
    $(".speed span").html(`${wpm.toFixed(1)} WPM`);
    $(".speed").css("display","block");
    $("#timer").text("");
    $("#timer").css("display","none");
    $(".reset-test").css("display","flex");
}

function startTimer(){
    $("#user-input").prop('disabled', false).focus();
    $(".start-timer").css("display","none");

    let seconds = 20;
    const timerDisplay = $("#timer");
    $("#timer").css("display","block");
    const timerInterval = setInterval(function() {
        seconds--;
        if (seconds >= 0) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerDisplay.text(`Time Left : ${minutes}:${remainingSeconds.toString().padStart(2, '0')}`);
        } else {
            clearInterval(timerInterval);
            timerDisplay.text(`Time's up!`);
            showResults(seconds);
        }
    }, 1000); 
}

function handleInput(){
    $(document).on("input", "#user-input", function() {
        let correctword = 0;
        totalTyped++;
        
        const inputCharacters = $(this).val().split('');
        for (let i = 0; i < inputCharacters.length; i++) {
            const charElement = $(`#char-${i}`);
            if (inputCharacters[i] == characters[i]) {
                correctword++;
                charElement.removeClass("incorrect").addClass("correct");
            } else {
                charElement.removeClass("correct").addClass("incorrect");
            }
        }

        const accuracy = ((correctword/totalTyped)*100).toFixed(1);
        $(".accuracy span").html(`${accuracy}%`);
    });
}

function resetTester(){
    setText();
    $(".speed").css("display", "none");
    $("#user-input").prop("disabled", true).val("");
    $(".reset-test").css("display","none");
    $(".start-timer").css("display","block");
    $(".accuracy span").text("0%");
}

function setText(){
    const textToType = $("#text-to-type");
    const spanElements = characters.map((char, index) => {
        return $("<span>").addClass("neutral").attr("id", `char-${index}`).text(char);
    });
    textToType.html(spanElements);
}

$(document).ready(function (){
    setText();
    handleInput();
    $(".start-timer").on("click", function(){
        startTimer();
    }) 
    $(".reset-test").on("click" , function(){
        resetTester();
    })
});
