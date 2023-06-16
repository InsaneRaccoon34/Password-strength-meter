import { Component } from '@angular/core';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent {
  password = '';

  onChange(event: any) {
    this.password = event.target.value
    //console.log(event.target.value)
  }
}
