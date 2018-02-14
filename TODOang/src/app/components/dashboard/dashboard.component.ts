import { Component, OnInit } from '@angular/core';

// Importer le service
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    .isDone{ opacity: .5 }
  `]
})
export class DashboardComponent implements OnInit {

  // Création d'une variable pour la collection de données
  public dataCollection: TaskModel[];
  public errorMsg: string;

  

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