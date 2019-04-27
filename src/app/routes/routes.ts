
import { AppComponent } from '../app.component';
import { LoginComponent } from '../pages/login/login.component';


export const routes = [

    { path: '', component: LoginComponent },
    { path: 'module1', loadChildren: './pages/module1/module1.module#Module1Module' },
    { path: 'module2', loadChildren: './pages/module2/module2.module#Module2Module' },

];
