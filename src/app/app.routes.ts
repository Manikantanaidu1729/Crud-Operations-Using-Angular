import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { Heroes1Component } from './heroes1/heroes1.component';
import { Heroes2Component } from './heroes2/heroes2.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelloComponent } from './hello/hello.component';
import { NgDestroyComponent } from './ng-destroy/ng-destroy.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { canActivateGuard } from './can-activate.guard';

export const routes: Routes = 
[
    {
        path:"",
        component: DashboardComponent,
    },
    {
        path:"hello",
        component:HelloComponent,
        canActivate:[canActivateGuard]
    },
    {
        path:"dashboard",
        component: DashboardComponent
    },
    {
        path:"manageCrises",
        component: ManageCrisesComponent
    },
    {
        path:"manageheroes",
        component: ManageHeroesComponent,
        children:
        [
            {
            path:"heroes1",
            component:Heroes1Component
            },
            {
                path:"heroes2",
                component:Heroes2Component
            }
        ]
    },
    {
        path:"logout",
        component: LogoutComponent
    },
    {
        path:"contact",
        component:ContactComponent,
    },
    {
        path:"feedback",
        component:FeedbackComponent
    },
    {
        path:"destroy",
        component:NgDestroyComponent
    },
    {
        path:"routeParams/:id",
        component:RouteParamsComponent
    },
    {
        path:"**",
        component: NotFoundComponent
    }
];