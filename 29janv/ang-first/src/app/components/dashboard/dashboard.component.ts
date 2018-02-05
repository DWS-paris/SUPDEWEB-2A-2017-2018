/*
Importer les class du composant
*/
  import { Component, OnInit } from '@angular/core';
  import { TaskModel } from '../../models/task.model';
//

/*
Définir le composant
*/
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
  })
//

/*
Exporter le composant
*/
  export class DashboardComponent implements OnInit {

    // Créer une variable typée avec le model TaskModel
    public newTask: TaskModel;

    // Créer un tableau de tâche
    public taskCollection: Array<TaskModel>;

    // Créer des variables pour la gestion des erreurs
    public titleError: Boolean = false;
    public typeError: Boolean = false;
    public formError: number;

    constructor() {

      // Ajouter lu contenu à l'objet
      this.newTask = {
        title: ``,
        type: `null`,
        isImportant: false
      };

      // Ajouter des tâches dans la collection
      this.taskCollection = [
        {
          title: `Installer AngulaCLI`,
          type: `WORK`,
          isImportant: true
        },
        {
          title: `Boire un café`,
          type: `LIFE`,
          isImportant: false
        }
      ]

     };

    // Créer une fonction pour la soumission du formulaire
    public addNewTask(){
      // Réinitialiser la variable formError
      this.formError = 0;
      
      // Vérifier le champs title
      if( this.newTask.title.length <= 0 ){
        this.titleError = true;
        // Incrémenter la variable formError
        this.formError++;
      };

      // Vérifier le champs type
      if( this.newTask.type === `null` ){
        this.typeError = true;
        // Incrémenter la variable formError
        this.formError++;
      };

      // Validation finale
      if(this.formError === 0){
        // Ajouter l'objet dans la collection de données
        this.taskCollection.push(this.newTask);

        // Vider le formulaire
        this.newTask = {
          title: ``,
          type: `null`,
          isImportant: false
        };
      };

    };

    /*
    EQ. DOMContentLoaded
    */
      ngOnInit() {
      }
    //

  }
//