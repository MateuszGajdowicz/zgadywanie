let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let PlayerGuess;
let Tries=0;
let randomNumber;
h3.textContent='Liczba prób:'
function random(){
    randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
}



function Check(){
    PlayerGuess = parseInt(document.getElementById('number').value);
    if(randomNumber===PlayerGuess){
        h2.textContent='Zgadłes poprawnie!';
        Tries=0;
        h3.textContent= 'Liczba prób:'+ Tries;
        random();
    }
    else if(PlayerGuess>100 || PlayerGuess<1){
        h2.textContent='Wpisz poprawną liczbę'
    }
    else if(PlayerGuess<randomNumber){
        h2.textContent='Musisz strzelać wyżej';
        Tries++;
        h3.textContent= 'Liczba prób:'+ Tries;
    }
    else if(PlayerGuess>randomNumber){
        h2.textContent='Trochę mniej';
        Tries++;
        h3.textContent= 'Liczba prób:'+ Tries;

    }
    if(Tries===5){
        h2.textContent="Przegrałeś";
        Tries=0;
        h3.textContent= 'Poprawna odpowiedź to '+randomNumber;
        random();

    }
}
random();