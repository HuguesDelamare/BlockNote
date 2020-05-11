"use strict";

//Récupérer les notes dés qu'on entre sur la page
GetDataFromLocalStorage();
GetMoodFromLocalStorage();


//Fonction permettant d'avoir l'heure précise de la crétion de la note
function GetDatetime() {
  var d = new Date();
  var jour =  d.getDate();
  var mois = d.getMonth()+1; //car Janvier est [0]
  var année = d.getFullYear();
  var heures = d.getHours();
  var minutes = d.getMinutes();

  var toString = ("écrit le " + jour +"/" + mois + "/" + année + " à " + heures +"h" + minutes);

  return toString;
}

//Fonction qui construit la note et l'envoie dans le localStorage
$("#validateButtonNote").click(function(){

  //On récupère la valeur "text" & "title" de ce qu'on vient d'écrire dans le modal
  var text = $("textarea#comment").val();
  var title = $("input#title").val();

  var mood = $("#moodSelect").val();

  //Je récupère la date au moment ou j'ai validé ma note
  var date = GetDatetime();

  var idNote;
  var tableau = localStorage.getItem("Notes");

  if (tableau == null) {
    idNote = 0;
  }else
  {
    var tableau2 = JSON.parse(tableau);
    idNote = tableau2.length; 
  }

  //Je construis un objet à partir des éléments que j'ai créés/récupérés
  var objet = {
    id: idNote,
    mood: mood,
    title: title,
    text: text,
    date: date
  }

  //J'utilise la fonction adéquate afin de sauvegarder dans le localStorage mon nouvel objet
  SaveDataToLocalStorage(objet,'Notes');
});


//Fonction permettant de sauvegarder/ajouter mon nouveal objet créé dans le localStorage
function SaveDataToLocalStorage(data,localname)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem(localname)) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
   
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem(localname, JSON.stringify(a));

    //Vide la contenu HTML de container afin de le re-remplir (illusion de refresh des données)
    RefreshPage();
}

//Fonction qui va appeler les différents objets présents dans le localStorage et les lister dans le container HTML
function GetDataFromLocalStorage(){
  //Je récupère le tableau dans le localstorage "Notes" et le parse
  var jsonDataNotes = JSON.parse(window.localStorage.getItem('Notes'));

  //Boucle Jquery
  $.each(jsonDataNotes, function(key, value)
  {
    $('#notesContainer').append(`<div class="row">
    <div style="background-color: ${value.mood};"class="col-10 border  rounded mb-3" id="noteContent" data-id="${value.id}" data-mood="${value.mood}">
    <div class="col" id="titleContent"><b>${value.title}</b></div>
    <div class="col-8" id="textContent">${value.text}</div>
    <div class="w-100"></div>

    <div class="col" id="dateContent">${value.date}</div>

  </div>
    <div class="col align-middle" id="buttonContent">
      <div class="btn-group dropright">

        <button type="button" class="btn btn-success" id="validationButton">
          <svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
          </svg>
        </button>

        <button type="button" class="btn btn-secondary dropdown-toggle bg-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg class="bi bi-gear-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z" clip-rule="evenodd"/>
          </svg>
        </button>

        <div class="dropdown-menu">
          <div id="modifyButtonGroup">
            <a class="dropdown-item" href="#" id="modifyButton">
            Modifier
             <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
              <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
             </svg>
            </a>
          </div>

          <div id="removeButtonGroup">
            <a class="dropdown-item" href="#" id="removeButton">
            Supprimer
              <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>`
  );
 }) 
}


function GetMoodFromLocalStorage(){
  var jsonDataMood = JSON.parse(window.localStorage.getItem('Mood'));
  $.each(jsonDataMood, function(key, value){
    $('#moodSelect').append(`<option value="${value.color}">${value.mood}</option>`);
  });
}


//Fonction qui permet la modification de la note séléctionnée
 $(document).on("click", "#modifyButton",function(){

  //On stocke les valeurs de la date,texte,titre dans des variables afin de les utiliser plus tard
  var date = $(this).closest('#notesContainer > #noteContent').find('#dateContent').text();
  var text = $(this).closest('#notesContainer > #noteContent').find('#textContent ').text();
  var titre = $(this).closest('#notesContainer > #noteContent').find('#titleContent').text();

  //Je transforme les div en input afin que l'utilisateur puisse rentrer ses modifications
  $(this).closest('#noteContent').find('#titleContent').replaceWith($('<div class="form-group col"> <input type="text" id="exampleForm2" class="form-control" value="' + titre + '"></div>'));
  $(this).closest('#noteContent').find('#textContent').replaceWith($('<div class="form-group col-8"><textarea class="form-control" rows="3">' + text + '</textarea></div>'));
  
  //Je rend visible le bouton "Valider" qui possède un event
  $(this).closest('#noteContent').find('#validationButton').css("display","block");
});



//Permet la suppression de la note sélectionnée lors de l'appuie du bouton "Supprimer"
$(document).on('click', '#removeButton',function(){

  //On récupère l'id de la note en question
  var id = $(this).closest('#notesContainer').find('#noteContent').data('id');
  console.log(id);
  //J'appelle ma fonction pour supprimer la note selon son ID
  RemoveNote(id);

  //Je refresh la page
  RefreshPage();

});

//Fonction qui permet de faire un refresh de page rapide
function RefreshPage(){
  //Je vide la main page
  notesContainer.innerHTML = "";
  moodSelect.innerHTML = "";

  GetMoodFromLocalStorage();
  //Je récupère mon localstorage "Notes" et push tout son contenu dans la main page
  GetDataFromLocalStorage();
}


 //Quand je clique sur le bouton valider 
 $(document).on('click', '#validationButton',function(){
    var date = $(this).closest('#noteContent').find('#dateContent').text();
    var text = $(this).closest('#noteContent').find('textarea').val();
    var titre = $(this).closest('#noteContent').find('#exampleForm2').val();
    var id = $(this).closest('#noteContent').data('id');
    var color = $('#moodSelect:option').val();

    RemoveNote(id);

      var objet = {
        id: id,
        title: titre,
        text: text,
        color: color,
        date: date
      }

    console.log(objet);
      
    SaveDataToLocalStorage(objet);
    RefreshPage();  
 });


   function RemoveNote(id){
    var actualStorage = JSON.parse(localStorage.getItem("Notes")); 
    //Je boucle sur le tableau parser
    for (var i = 0; i < actualStorage.length; i++)
    {
      var item = actualStorage[i];
      console.log(item);

      if (item.id == id) 
      {
        actualStorage.splice(i,1);
        console.log(actualStorage);
        break;
      }    
    }

  //Je push le nouveau tableau dans le localstorage
  var newStorage = JSON.stringify(actualStorage);
  localStorage.setItem("Notes", newStorage);
  }

  $('#color-panel-group > :button').on('click',function(){
    var colorPicked = $(this).data('bc');
    $('#colorInput').val(colorPicked);
});

$("#validateButtonMood").on('click',function(){
  //Je construis un objet à partir des éléments que j'ai créés/récupérés
  var mood = $(this).closest('#pills-tabContent').find('#mood-input').val();
  var color = $('#colorInput').val();

  var objet = {
    mood: mood,
    color: color
  }


  SaveDataToLocalStorage(objet, 'Mood'); 
  RefreshPage();
});
