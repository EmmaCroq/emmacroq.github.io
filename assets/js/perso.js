jeu1 = document.getElementById('jeu1');
jeu2 = document.getElementById('jeu2');
jeu3 = document.getElementById('jeu3');
jeu4 = document.getElementById('jeu4');
jeu5 = document.getElementById('jeu5');
jeu6 = document.getElementById('jeu6');
jeu7 = document.getElementById('jeu7');
jeu8 = document.getElementById('jeu8');
web1 = document.getElementById('web1');
web2 = document.getElementById('web2');


// CHECKBOX BUTTON

document.getElementById('checkRPG').onclick = function(e) {
    if ( this.checked ) {
        jeu8.style.display = "block";
    } else {
        jeu8.style.display = "none";
    }
};

document.getElementById('checkHorreur').onclick = function(e) {
    if ( this.checked ) {
        
    } else {
        
    }
};

document.getElementById('checkPlateforme').onclick = function(e) {
    if ( this.checked ) {
        jeu2.style.display = "block";
    } else {
        jeu2.style.display = "none";
    }
};

document.getElementById('checkVisualNovel').onclick = function(e) {
    if ( this.checked ) {
        jeu1.style.display = "block";
    } else {
        jeu1.style.display = "none";
    }
};

document.getElementById('checkIdleGame').onclick = function(e) {
    if ( this.checked ) {
        jeu6.style.display = "block";
    } else {
        jeu6.style.display = "none";
    }
};

document.getElementById('checkAction').onclick = function(e) {
    if ( this.checked ) {
        jeu7.style.display = "block";
    } else {
        jeu7.style.display = "none";
    }
};

document.getElementById('checkPuzzle').onclick = function(e) {
    if ( this.checked ) {
        jeu2.style.display = "block";
        jeu3.style.display = "block";
        jeu4.style.display = "block";
        jeu5.style.display = "block";
    } else {
        jeu2.style.display = "none";
        jeu3.style.display = "none";
        jeu4.style.display = "none";
        jeu5.style.display = "none";
    }
};

// RADIO BUTTON

function radioClick(maRadio) {
    var valeur = maRadio.value;
    if(valeur=="1"){
        jeu1.style.display = "block";
        jeu2.style.display = "block";
        jeu3.style.display = "block";
        jeu4.style.display = "block";
        jeu5.style.display = "block";
        jeu6.style.display = "block";
        jeu7.style.display = "block";
        jeu8.style.display = "block";
    } else if(valeur=="2"){
        jeu3.style.display = "block";
        jeu4.style.display = "block";
        jeu5.style.display = "block";
        jeu7.style.display = "block";

        jeu1.style.display = "none";
        jeu2.style.display = "none";
        jeu6.style.display = "none";
        jeu8.style.display = "none";
    }else if(valeur=="3"){
        jeu1.style.display = "block";
        jeu6.style.display = "block";
        jeu8.style.display = "block";

        jeu2.style.display = "none";
        jeu3.style.display = "none";
        jeu4.style.display = "none";
        jeu5.style.display = "none";
        jeu7.style.display = "none";
    }else if(valeur=="4"){
        jeu2.style.display = "block";

        jeu1.style.display = "none";
        jeu3.style.display = "none";
        jeu4.style.display = "none";
        jeu5.style.display = "none";
        jeu6.style.display = "none";
        jeu7.style.display = "none";
        jeu8.style.display = "none";
    }
}

// SECTIONS JEU WEB LOGICIEL

document.getElementById('SectionJeu').onclick = function(e) {
    jeu1.style.display = "block";
    jeu2.style.display = "block";
    jeu3.style.display = "block";
    jeu4.style.display = "block";
    jeu5.style.display = "block";
    jeu6.style.display = "block";
    jeu7.style.display = "block";
    jeu8.style.display = "block";

    web1.style.display = "none";
    web2.style.display = "none";
    web3.style.display = "none";

    document.getElementById('checkboxes').style.display = "block";
    document.getElementById('labels').style.display = "block";
    document.getElementById('radiobtn1').style.display = "block";
    document.getElementById('now').style.display = "block";

    document.getElementById('titlepresentation').innerHTML = "Jeux vidéo";
};


document.getElementById('SectionWeb').onclick = function(e) {
    jeu1.style.display = "none";
    jeu2.style.display = "none";
    jeu3.style.display = "none";
    jeu4.style.display = "none";
    jeu5.style.display = "none";
    jeu6.style.display = "none";
    jeu7.style.display = "none";
    jeu8.style.display = "none";

    web1.style.display = "block";
    web2.style.display = "block";
    web3.style.display = "block";

    document.getElementById('checkboxes').style.display = "none";
    document.getElementById('labels').style.display = "none";
    document.getElementById('radiobtn1').style.display = "none";
    document.getElementById('now').style.display = "none";

    document.getElementById('titlepresentation').innerHTML = "Sites Web";
};

document.getElementById('SectionLogiciel').onclick = function(e) {
    jeu1.style.display = "none";
    jeu2.style.display = "none";
    jeu3.style.display = "none";
    jeu4.style.display = "none";
    jeu5.style.display = "none";
    jeu6.style.display = "none";
    jeu7.style.display = "none";
    jeu8.style.display = "none";
    web1.style.display = "none";
    web2.style.display = "none";
    web3.style.display = "none";
    document.getElementById('checkboxes').style.display = "none";
    document.getElementById('labels').style.display = "none";
    document.getElementById('radiobtn1').style.display = "none";
    document.getElementById('now').style.display = "none";

    document.getElementById('titlepresentation').innerHTML = "Logiciels";
};