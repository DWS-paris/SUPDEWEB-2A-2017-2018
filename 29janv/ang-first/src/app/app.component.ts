/*
Importer les class du composant
*/
  import { Component, style } from '@angular/core';
//

/*
Définir le composant
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      <app-dashboard></app-dashboard>
      <app-footer></app-footer>
    `
  })
//

/*
Exporter le composant
*/
  export class AppComponent {

    // Déclarer un variable
    public myCollection: Array<string>;
    public isTrue: Boolean;
    public userName: String;

    constructor(){
      this.myCollection = [
        `Premier point`,
        `Tester Angular`,
        `Ajouter Angular CLI`,
        `lancer l'application`
      ];

      this.isTrue = false;
      this.userName = `Pierre`;
    }

    // Création d'une fonction
    public showMeTheSection(){
      this.isTrue = true;
    };
  }
//