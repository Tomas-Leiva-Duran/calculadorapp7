import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  asignatura: string = '';
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;

  constructor(private router: Router) {}

  calcular() {
    // Validaciones y cálculos aquí

    // Guardar datos en LocalStorage
    localStorage.setItem('asignatura', this.asignatura);
    localStorage.setItem('nota1', this.nota1.toString());
    localStorage.setItem('nota2', this.nota2.toString());
    localStorage.setItem('nota3', this.nota3.toString());

    // Redireccionar a la página de resultados
    this.router.navigate(['/resultado']);
  }

}
