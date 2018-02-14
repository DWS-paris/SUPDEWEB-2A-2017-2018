import { Component, OnInit } from '@angular/core';

// Pour récupérer des données venant du compsant parent, il faut importer la class Input
import { Input } from '@angular/core';

// Pour envoyer des données vers le composant parent il faut importer les class Output et EventEmitter
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styles: [`
    .isDone{ opacity: .5 }
  `]
})
export class SingleTaskComponent implements OnInit {

  // Récupérer la valeur de la variable item venant du composant parent
  @Input() singleItem;

  // Création d'un événement
  @Output() sendData = new EventEmitter();

  // Créer une fonction pour le bouton
  public submitBtn( data ): void {
    // Emettre l'événement
    this.sendData.emit(data)
  }

  constructor() { }

  ngOnInit() {
  }

}
