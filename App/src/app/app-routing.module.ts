import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParserComponent } from './Components/parser/parser.component';

const routes: Routes = [
  {path: 'parser', component: ParserComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
