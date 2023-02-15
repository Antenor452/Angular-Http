import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  constructor(
    private formGroup: FormGroup,
    private formBuilder: FormBuilder,
    private formControl: FormControl
  ) {}
  form = this.formBuilder.group({
    name: ['', [Validators.nullValidator]],
  });
}
