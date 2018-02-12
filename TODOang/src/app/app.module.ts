import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

// Importer le fichier des routes
import { Routing } from './app.routes';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';

// Importer le service
import { TasksService } from './services/tasks.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    FooterComponent,
    HeaderComponent
  ],

  imports: [
    // Ajouter le module de route dans le tableau des imports
    BrowserModule, Routing
  ],

  // Les services sont à indiquer dans le tableau des providers
  providers: [ TasksService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
