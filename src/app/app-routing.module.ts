import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateFormComponent} from './components/createForm/CreateForm.component'
import { HomeComponent } from './components/home/Home.component';
import { UpdateFormComponent } from './components/updateForm/UpdateForm.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'create', component:CreateFormComponent},
  {path:'update/:id', component:UpdateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
