import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styles: []
})
export class AddTaskComponent implements OnInit {

  // Définition d'un événement
  @Output() sendNewTask = new EventEmitter;

  // Créer un objet à utiliser dans le formulair
  public formObject = {
    content: ``,
    error: true
  }

  // Créer une variable pour le message d'erreur
  public errorFormMsg: boolean = false;

  // Créer un fonction  pour la validation du formulaire
  public submitForm(): void {
    this.formObject.error = true;
    
    // Vérifier la valeur de l'input
    if( this.formObject.content.length >= 5 ) { 
      this.formObject.error = false;
      this.errorFormMsg = false;

    } else{ this.errorFormMsg = true }

    // Vérifier le formulaire
    if( this.formObject.error === false ){
      // Emettre l'événement
      this.sendNewTask.emit(this.formObject);
      // Vider le formulaire
      this.formObject = {
        content: ``,
        error: true
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
