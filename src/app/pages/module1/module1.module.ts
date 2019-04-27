import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './pages/page1/page1.component';
import { RoutingModule } from './routes/routing.module';

@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class Module1Module { }
