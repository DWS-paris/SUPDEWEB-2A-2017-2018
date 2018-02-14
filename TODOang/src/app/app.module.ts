import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer la class HttpModule
import { HttpModule } from '@angular/http';

// Importer la class FormsModule pour utiliser les [(ngModel)]
import { FormsModule } from '@angular/forms'


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
import { SingleTaskComponent } from './partials/single-task/single-task.component';
import { AddTaskComponent } from './partials/add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    FooterComponent,
    HeaderComponent,
    SingleTaskComponent,
    AddTaskComponent
  ],

  imports: [
    // Ajouter le module de route dans le tableau des imports
    HttpModule, BrowserModule, Routing, FormsModule
  ],

  // Les services sont à indiquer dans le tableau des providers
  providers: [ TasksService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
