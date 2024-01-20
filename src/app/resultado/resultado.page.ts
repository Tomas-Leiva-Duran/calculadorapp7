import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResultadoPage{


  // Obtener datos del LocalStorage
  asignatura: string = localStorage.getItem('asignatura') ?? '';
  nota1: number = parseFloat(localStorage.getItem('nota1') || '0');
  nota2: number = parseFloat(localStorage.getItem('nota2') || '0');
  nota3: number = parseFloat(localStorage.getItem('nota3') || '0');

  notaPresentacion: number = 0;
  notaExamen: number = 0;
  notaFinal: number = 0;


  // Lógica de cálculos y mostrar resultados aquí

  constructor(private router: Router) {
    // Cálculos iniciales al cargar la página de resultados
    this.calcularNotas();
  }

  calcularNotas() {

    // Validaciones
    if (!this.asignatura || !this.nota1 || !this.nota2 || !this.nota3) {
      alert('Error al cargar los datos.');
      // redirigir a la página de calculadora
      this.router.navigate(['/calculadora']);
      return;
    }

    //Validar
    if (
      this.nota1 < 1.0 || this.nota1 > 7.0 ||
      this.nota2 < 1.0 || this.nota2 > 7.0 ||
      this.nota3 < 1.0 || this.nota3 > 7.0
    ) {
      alert('Las notas deben estar entre 1.0 y 7.0.');
      // redirigir a la página de calculadora
      this.router.navigate(['/calculadora']);
      return;
    }
    // Realizar cálculos
    this.notaPresentacion = (this.nota1 * 0.3) + (this.nota2 * 0.4) + (this.nota3 * 0.3);
    this.notaExamen = 4.0 - (this.notaPresentacion * 0.6);
    this.notaFinal = (this.notaPresentacion * 0.6) + (this.notaExamen * 0.4);
  }

  retroceder() {
    // Retroceder a la página de calculadora
    this.router.navigate(['/calculadora']);
  }


}
