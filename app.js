let afficherPrix = document.querySelector('#content');
let prixAuKilo = document.querySelector('#prix_au_kg');
let quantite = document.querySelector('#poids');
let nom = document.querySelector('#Nom');
let resulat = 0;
let total = 0;

function calculPrix (){
    resulat = (prixAuKilo.value * quantite.value) /1000;
    total += resulat;
}

let afficherTotal = document.createElement('div')

document.querySelector('#calculer').addEventListener('click', function(e){
    e.preventDefault();
    calculPrix();
    const afficherResult = document.createElement('div');
    afficherResult.textContent = nom.value + " " + resulat + '€';
    afficherPrix.append(afficherResult, afficherTotal);
    afficherTotal.textContent = "Le total est de : " + total + "€";
    nom.value = "";
    prixAuKilo.value = "";
    quantite.value = "";
}
);