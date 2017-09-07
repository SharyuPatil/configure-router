import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
{path : '', component : FirstComponent},
{path : 'second', component : SecondComponent}
];

export const MyRouterModule = RouterModule. forRoot(APP_ROUTES);
