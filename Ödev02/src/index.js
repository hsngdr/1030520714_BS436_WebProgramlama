//gerekli tanımlamalar
catID = Math.floor(Math.random() * 3)
isFinished = false;
count = 0;

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const alert = document.getElementById('alert');
const winCase = document.getElementById('win');
const loseCase = document.getElementById('lose');


/*
    her kart için bir fonksiyon çalıştırıyoruz bu fonsiyon
    kaçıncı hakta olduğumuzu ve doğru cevap verip vermediğimizi test ediyor
*/
click1=() =>{

    if (catID == 0) {
        card1.setAttribute('class', 'card-cat');
        isFinished = true;
    } else {
        card1.setAttribute('class', 'card-dog');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alert.style.display = "none";
        winCase.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } else if (isFinished && count >= 2) {
        alert.style.display = "none";
        loseCase.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } 
}

click2=()=> {
    if (catID == 1) {
        card2.setAttribute('class', 'card-cat');
        isFinished = true;
    } else {
        card2.setAttribute('class', 'card-dog');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alert.style.display = "none";
        winCase.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } else if (isFinished && count >= 2) {
        alert.style.display = "none";
        loseCase.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } 
}

click3=()=> {
    if (catID == 2) {
        card3.setAttribute('class', 'card-cat');
        isFinished = true;
    } else {
        card3.setAttribute('class', 'card-dog');
        count++;
    }

    if (count == 2) {
        isFinished = true;
    }

    if (isFinished && count < 2) {
        alert.style.display = "none";
        winCase.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } else if (isFinished && count >= 2) {
        alert.style.display = "none";
        loseCase.style.display = "block";
        card1.style.pointerEvents = "none";
        card2.style.pointerEvents = "none";
        card3.style.pointerEvents = "none";
    } 
}