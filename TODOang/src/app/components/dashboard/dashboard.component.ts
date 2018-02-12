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

  /*
  Création d'une collection de données
  */  
    public dataCollection: Array<TaskModel> = [
      {
        id: 0,
        content: `Créer des composants`,
        isDone: true
      },
      {
        id: 1,
        content: `Créer un servive`,
        isDone: true
      },
      {
        id: 2,
        content: `Afficher les tâches dans le dashboard`,
        isDone: false
      }
    ];
  //

  // Renseigner le service dans le constructeur
  constructor( private myService: TasksService ) { }

  
  // Fonction pour attendre le chargement du composant
  ngOnInit() {

    // Appeler la fonction du service
    this.myService.showTasks()
  }

}
