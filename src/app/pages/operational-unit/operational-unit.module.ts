import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OperationalUnitComponent } from './operational-unit.component';

export const routes: Routes = [
  { path: '', component: OperationalUnitComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [OperationalUnitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    OrganizationChartModule
  ]
})
export class OperationalUnitModule { }
