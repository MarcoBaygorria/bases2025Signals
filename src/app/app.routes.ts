import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent,
    },
    {
        path: "hero-page",
        component: HeroPageComponent
    }
];
