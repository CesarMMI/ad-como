import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/task-form/task-form.module').then(
        (m) => m.TaskFormModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/task-form/task-form.module').then(
        (m) => m.TaskFormModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories-list/categories-list.module').then(
        (m) => m.CategoriesListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
