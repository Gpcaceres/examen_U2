import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  speed = 0;

  acelerar(): void {
    this.speed += 5;
  }

  frenar(): void {
    this.speed -= 3;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  reiniciar(): void {
    this.speed = 0;
  }

  getVelocidad(): string {
    if (this.speed >= 0 && this.speed <= 30) {
      return 'low-speed';
    } else if (this.speed > 30 && this.speed <= 70) {
      return 'medium-speed';
    } else if (this.speed > 70 && this.speed <= 120) {
      return 'high-speed';
    } else {
      return 'danger-speed';
    }
  }
}