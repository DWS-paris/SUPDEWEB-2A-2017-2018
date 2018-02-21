/*
Importer les class
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
//

/*
Importer les composants à utiliser dans les routes
*/
    import { DashboardComponent } from './components/dashboard/dashboard.component';
    import { AddComponent } from './components/add/add.component';
    import { EditComponent } from './components/edit/edit.component';
//

// Créer une contante pour définir le comportement de la route
const route: Routes = [

    /*
    Routes classiques
    */
        {
            path: ``,
            component: DashboardComponent
        }
    //
];

/*
Exporter le module de route
*/
    export const Routing: ModuleWithProviders = RouterModule.forRoot(route);
//