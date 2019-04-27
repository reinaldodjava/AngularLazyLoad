import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './routes/routes';
import { LoginComponent } from './pages/login/login.component';
import { TemplateModule } from './pages/template/template.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    TemplateModule,
    BrowserModule,

    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
