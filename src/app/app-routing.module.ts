import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
 import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
// 
   //{  path: 'homepage', component: HomepageComponent },
   { path: 'header', component: HeaderComponent  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'header',
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
