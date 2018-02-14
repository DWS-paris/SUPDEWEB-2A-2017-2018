import { Component, OnInit } from '@angular/core';

// Importer le service
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // Création d'une variable pour la collection de données
  public dataCollection: TaskModel[];
  public errorMsg: string;

  // Créer une fonction pour capter l'événement du partial
  public getDataFromPartial(evt: TaskModel): void{

    // Inverser la valeur isDone
    evt.isDone = !evt.isDone;
    
    // Appeler la fonction du service pour éditer une tache
    this.myService.setIsDone(evt)
    // Success
    .then( data => {
      // Msg User
      console.log(data)
    } )
    // Error
    .catch(err => {
      // Msg User
      console.error(err)
    });
    
  };

  

  // Injecter le service dans le constructeur
  constructor( private myService: TasksService ) { }

  
  // Fonction pour attendre le chargement du composant
  ngOnInit() {

    // Appeler la fonction du service pour récupérer la liste de tâches
    this.myService.showTasks()

      // Success
      .then( data => this.dataCollection = data)
      // Error
      .catch( err => this.errorMsg = err );
  };

};