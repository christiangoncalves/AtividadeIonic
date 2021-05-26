import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/Amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'folder/Viagens',
    loadChildren: () => import('./viagens/viagens.module').then( m => m.ViagensPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
