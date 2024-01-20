// app-routing.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'resultado', loadChildren: () => import('./resultado/resultado.module').then(m => m.ResultadoModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    IonicModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
