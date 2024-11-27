let form = document.getElementById("formulaire");

form.addEventListener("submit",function(event) { 
    event.preventDefault(); // // Empêcher le rechargement de la page
    let input= document.getElementById("inputt"); // Récupérer la valeur du champ texte.
    let inputValue = input.value; // Créer un élément de liste (li) avec cette valeur
    let li = document.createElement("li") // Créer un élément de liste (li) avec cette valeur
    li.textContent= inputValue; // Ajouter cet élément à la liste affichée
    let ul = document.getElementById("liste");
    ul.appendChild(li);
    
    let button = document.createElement("button") // Ajouter le bouton Supprimer et Créer le bouton supprimer
    button.textContent = "supprimer";  //Appliquer le texte "Supprimer"
    li.appendChild(button); 
    button.addEventListener("click",function(i) {
    ul.removeChild(li); // Supprimer la tâche lorsque "Supprimer" est cliqué
    })
    let butto = document.createElement("button");
    butto.textContent = "modifier";
    butto.addEventListener("click",function(h) {
        ul.firstChild(li);
        let inpput = document.createElement("input");
        


       
    })
    li.appendChild(butto);
   

    


})

