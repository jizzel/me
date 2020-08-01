import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TestPageComponent} from './test-page/test-page.component';
// import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing/landing.component';
// import {ResumeComponent} from './resume/resume.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'test-page', component: TestPageComponent },
  { path: 'joseph', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:  PageNotFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
