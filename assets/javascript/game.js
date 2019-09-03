$(document).ready(function(){
    var numberGenerator = Math.floor(Math.random() * ((100 - 10) + 1) + 10); $('#numberGen').html(numberGenerator);
        console.log(numberGenerator)
    
    function getID() {
        var crystalID = Math.floor(Math.random() * 9)+1;
        console.log(crystalID);
        return crystalID;
        }
        
    var crystal1 = getID();
    var crystal2 = getID();
    var crystal3 = getID();
    var crystal4 = getID();

    var win = 0;
    var lose = 0;  
    var totalScore = 0;

    $('#crystal1').click(() => {
        totalScore = totalScore + crystal1;
        button();
    });
    $('#crystal2').click(() => {
        totalScore = totalScore + crystal2;
        button();
    });
    $('#crystal3').click(() => {
        totalScore = totalScore + crystal3;
        button();
    });
    $('#crystal4').click(() => {
        totalScore = totalScore + crystal4;
        button();
    });

    function button() {
        $('#total').text(totalScore);
        if (totalScore === numberGenerator) {
            win++;
            $('#win').text(win);
        } 
        else if (totalScore > numberGenerator) {
            lose++;
            $('#lose').text(lose);
        } 
        else {return;
        }
        reset();
        resetTwo();
    }
    function reset() {
        totalScore = 0;
        $('#total').text(totalScore);
    }
    function resetTwo() {
        numberGenerator = Math.floor(Math.random() * ((100 - 10) + 1) + 10);
        $('#numberGen').html(numberGenerator);
        crystal1 = Math.floor(Math.random() * 9)+1;
        crystal2 = Math.floor(Math.random() * 9)+1;
        crystal3 = Math.floor(Math.random() * 9)+1;
        crystal4 = Math.floor(Math.random() * 9)+1;
    }
});
