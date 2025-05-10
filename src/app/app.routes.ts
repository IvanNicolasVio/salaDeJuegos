import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home',
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'aboutUs',
        component: AboutUsComponent
    },
    {
        path:'**',
        redirectTo:'home',
    }
];
