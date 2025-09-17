import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Terms } from './terms/terms';

export const routes: Routes = [
    {path:"about", component: About},
    {path:"", component: Home},
    {path:"terms", component: Terms}
];
