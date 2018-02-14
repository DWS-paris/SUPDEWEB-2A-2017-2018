import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styles: []
})
export class AddTaskComponent implements OnInit {

  // Créer un objet à utiliser dans le formulair
  public formObject = {
    content: ``,
    error: true
  }

  // Créer un fonction  pour la validation du formulaire
  public submitForm(): void {
    // Vérifier la valeur de l'input
    if( this.formObject.content.length >= 5 ) { this.formObject.error = false }

    // Vérifier le formulaire
    if( this.formObject.error === false ){
      // Envoyer les données dans l'API
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
