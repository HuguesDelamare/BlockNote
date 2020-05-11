<!DOCTYPE html>
<html>
<head>
  <title>MyNotes</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css.css">
</head>
<body>


<div class="container">
  <!-- Bouton faisant pop le modal -->
  <div  class="row mb-4" id="header">
    <div class="col "><h2>MyNotes</h2></div>
    <div class="col">
      <button type="button" class="btn float-right" id="addButton" data-toggle="modal" data-target="#exampleModalCenter">
        <svg class="bi bi-plus-circle-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>
        </svg>
      </button> 
    </div>
  </div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Créer une note</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Ajouter une humeur</a>
          </li>
        </ul>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <input type="text" class="form-control mb-2" id="title" placeholder="Titre de la note. . ." required>
              <div class="form-group">
                <select class="form-control" id="moodSelect">

                </select>
              </div>
            <textarea class="form-control" rows="5" id="comment" placeholder="Rédigez une note . . ." required></textarea>
            
            <div class="modal-tools">
              <div class="" id="writting-tools"> 
                
                <!-- Bouton pour mettre en gras -->
                <button class="btn" id="bold-button">
                  <svg class="bi bi-type-bold" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 001.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                  </svg>
                </button> 

                <!-- Bouton pour mettre en sous-ligné -->
                <button class="btn" id="underline-button">
                  <svg class="bi bi-type-underline" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z"/>
                    <path fill-rule="evenodd" d="M12.5 15h-9v-1h9v1z" clip-rule="evenodd"/>
                  </svg>
                </button> 

                <!-- Bouton pour mettre en italic -->
                <button class="btn" id="strikethrought-button">
                  <svg class="bi bi-type-italic" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
                  </svg>
                </button> 

                <!-- Bouton pour barré le texte -->
                <button class="btn" id="bold-button">
                  <svg class="bi bi-type-strikethrough" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 01-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z"/>
                    <path fill-rule="evenodd" d="M15 8.5H1v-1h14v1z" clip-rule="evenodd"/>
                  </svg>    
                </button>     

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="validateButtonNote" data-dismiss="modal">Valider</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Retour</button>
            </div>              
          </div>

          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="form-group">
              <input type="text" class="form-control" id="mood-input" aria-describedby="emailHelp" placeholder="Entrez humeur...">
              <small id="emailHelp" class="form-text text-muted">Customiser votre humeur avec un label perso et des couleurs.</small>
            </div>

            <div class="w-100"></div>

            <div class="form-group col-12" id="color-panel-group">
              <span>Votre couleur : </span><br>    
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #04a805" data-bc="#04a805"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #d83910" data-bc="#d83910"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #19aad1" data-bc="#19aad1"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #e31031" data-bc="#e31031"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #eb89db" data-bc="#eb89db"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #f3ac6a" data-bc="#f3ac6a"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #5bc0fc" data-bc="#5bc0fc"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #fcd3d5" data-bc="#fcd3d5"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #f9df1b" data-bc="#f9df1b"></button>
              <button type="button" class="btn border rounded col" style="width: 35px;height: 35px;background-color: #1d6884" data-bc="#1d6884"></button>
                <div class="form-group" style="display: none;">
                  <input type="email" class="form-control" id="colorInput">
                </div>
              <small id="emailHelp" class="form-text text-muted">Choisissez la couleur que vous voulez associer à votre humeur.</small>       
            </div>

            <div class="modal-footer">            
              <button type="button" class="btn btn-primary" id="validateButtonMood">Valider</button>
              <button type="button" class="btn btn-secondary">Retour</button>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- Div contenant les notes -->
<div class="container" id="notesContainer"></div>


</body>

  
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="js.js"></script>
</html>