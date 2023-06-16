import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {reduce} from "rxjs";

@Component({
  selector: 'app-strength-meter',
  templateUrl: './strength-meter.component.html',
  styleUrls: ['./strength-meter.component.css']
})
export class StrengthMeterComponent implements OnChanges {
  private passwordStrengthList = {
    0: {status: 'under 8', color: 'red'},
    1: {status: 'easy', color: 'red'},
    2: {status: 'medium', color: 'yellow'},
    3: {status: 'strong', color: 'green'},
  }
  private colors = [
    'red', 'yellow', 'green'
  ]
  passwordStrength = 0
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

    this.passwordStrength = this.checkStrength(password)

    this.setBarColors(this.passwordStrength, this.colors[this.passwordStrength - 1])
    console.log(this.barColors)

  }

  private setBarColors(count: number, color: string) {
    this.barColors = []
    for (let i = 0; i < count; i++) {
      (this as any).barColors[i] = color
    }
  }

  protected readonly reduce = reduce;
}
