import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponentComponent } from 'app/page-not-found-component/page-not-found-component.component';

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

  },
  {
    path: '**', component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        enableTracing: false
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  MainComponent,
  DashboardComponent,
  PageNotFoundComponentComponent
]
