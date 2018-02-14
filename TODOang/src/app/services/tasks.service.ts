/*
Importer les class
*/
  import { Injectable } from '@angular/core';

  // Importer la class Http et Response pour faire des requêtes
  import { Http, Response } from '@angular/http';

  // Importer le sytème de gestion de Promises
  import 'rxjs/add/operator/toPromise';

  // Importer le model de données
  import { TaskModel } from '../models/task.model';
//


/*
Définir le service
*/
  @Injectable()

  export class TasksService {

  /*
  Définir l'adresse de l'API
  */
    private apiUrl: string = `http://localhost:3000/tasks`;
  //
  
  // Injecter la class Http dans le constructeur
  constructor( private http: Http ){}


  /*
  Créer une fonction pour récupérer toutes les tâches à faire
  */
    public showTasks = (): Promise<TaskModel[]> => {
      return this.http.get( this.apiUrl ).toPromise()
      // Success
      .then( data => this.dataFromApi(data)  )

      // Error
      .catch( error => this.handleError(error) );
    };
  //




  /*
  Fonctions de traitement des requêtes sur l'API
  */
    // Traitement des réponses JSON
    private dataFromApi(res: Response) {
      return res.json() || { };
    }


    // Traitement des erreurs
    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

      return Promise.reject(errMsg);
    }
  //

  }
//