import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonicModule, FormsModule],
})
export class HomePage {
  asignatura: string = '';
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;

  constructor(private router: Router) {}

  calcular() {

    // Validaciones
    if (!this.asignatura || !this.nota1 || !this.nota2 || !this.nota3) {
      // Muestra un mensaje de error
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (
      this.nota1 < 1.0 || this.nota1 > 7.0 ||
      this.nota2 < 1.0 || this.nota2 > 7.0 ||
      this.nota3 < 1.0 || this.nota3 > 7.0
    ) {
      alert('Las notas deben estar entre 1.0 y 7.0.');
      return;
    }

    // Guardar datos en LocalStorage
    localStorage.setItem('asignatura', this.asignatura);
    localStorage.setItem('nota1', this.nota1.toString());
    localStorage.setItem('nota2', this.nota2.toString());
    localStorage.setItem('nota3', this.nota3.toString());

    // Redireccionar a la página de resultados
    this.router.navigate(['/resultado']);
  }

}
