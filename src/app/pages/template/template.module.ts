import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    TabsModule.forRoot()
  ],
  exports:[
    HeaderComponent
  ]
})
export class TemplateModule { }
