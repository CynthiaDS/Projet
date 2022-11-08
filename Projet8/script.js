//selectionne tout les formulairesn dans la page web
const forms = document.querySelectorAll('form');

//attribuer un écouteur d'événement au formulaire
for(let i = 0; i < forms.length; i++){
    forms[i].addEventListener('submit', function(e){
        //vérifi checkvalidity retourne faux
        //ce qui veut dire que le formulaire n'est pas remplit correctement
        if(!forms[i].checkValidity()){
            e.preventDefault(); //stop l'envoie du formulaire
            forms[i].classList.add('error');
        }
    });
}