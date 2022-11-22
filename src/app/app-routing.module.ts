import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { WelcomePageComponent } from './landing/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'paginaWeb/:webPage/campaniaSeo/:seoCampaign/campaniaAds/:adsCampaign/Paginas/:pages/Idiomas/:languages',
    component: HomePageComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
