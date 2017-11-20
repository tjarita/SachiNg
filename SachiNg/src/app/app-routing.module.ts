import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        component: DashboardComponent,
        path: ''
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  MainComponent, DashboardComponent
]
