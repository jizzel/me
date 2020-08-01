import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [AboutComponent, ExperienceComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
