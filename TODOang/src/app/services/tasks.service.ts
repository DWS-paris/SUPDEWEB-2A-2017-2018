/*
Importer les class
*/
  import { Injectable } from '@angular/core';
  import { TaskModel } from '../models/task.model'
//



/*
Définir le service
*/
  @Injectable()
  export class TasksService {
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
    

    constructor() { }

    /*
    Créer une fonction pour renvoyer la collection de données
    */
      public showTasks = (): Array<TaskModel> => {
        return this.dataCollection
      }
    //
  }
//