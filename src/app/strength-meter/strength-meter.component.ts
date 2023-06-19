import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-strength-meter',
  templateUrl: './strength-meter.component.html',
  styleUrls: ['./strength-meter.component.css']
})
export class StrengthMeterComponent implements OnChanges {
  private colors = [
    'red', 'yellow', 'green'
  ]
  barColors = []

  @Input() public passwordToCheck!: string

  private checkStrength(password: string): number {
    const letters = Number(/[a-zA-Z]/.test(password))
    const numbers = Number(/[0-9]/.test(password))
    const symbols = Number(/[^\p{L}\d\s@#]/u.test(password))

    return [letters, numbers, symbols].reduce((force: any, currentValue: number) => (
        force += Number(currentValue)
      ))
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    const password = changes['passwordToCheck'].currentValue
    const passwordStrength = this.checkStrength(password)

    if (password && password.length < 8) this.setBarColors(3, this.colors[0])
    else this.setBarColors(passwordStrength, this.colors[passwordStrength - 1])
  }

  private setBarColors(count: number, color: string) {
    this.barColors = []
    for (let i = 0; i < count; i++) {
      (this as any).barColors[i] = color
    }
  }
}
