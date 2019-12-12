import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: 'template', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: '', component: TemplateFormComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
