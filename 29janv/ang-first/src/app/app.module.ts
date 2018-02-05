/*
Import des compoasants du module
*/
  import { BrowserModule } from '@angular/platform-browser';

  // Pour utiliser le ngModel
  import { FormsModule } from '@angular/forms';

  import { NgModule } from '@angular/core';
//

/*
Importer les composants de l'application
*/
  import { AppComponent } from './app.component';
  import { DashboardComponent } from './components/dashboard/dashboard.component';
  import { HeaderComponent } from './partials/header/header.component';
  import { FooterComponent } from './partials/footer/footer.component';
//


/*
Création du décorateur NgModule
*/
  @NgModule({
    declarations: [
      // Ajouter le composant dans le tableau des déclaration
      AppComponent,
      DashboardComponent,
      HeaderComponent,
      FooterComponent
    ],
    imports: [
      BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
//


/*
Export du module
*/
  export class AppModule { }
//
