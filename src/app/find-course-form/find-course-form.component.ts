import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroupDirective,
  NgForm } from '@angular/forms';
import { NumberInputValidator } from '../services/number-input.validatation';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'golf-find-course-form',
  templateUrl: './find-course-form.component.html',
  styleUrls: ['./find-course-form.component.scss']
})
export class FindCourseFormComponent implements OnInit {

  zipcode: FormControl;
  findCourseForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.findCourseForm = this.formBuilder.group({
      zipcode: new FormControl('', [
        Validators.required,
        NumberInputValidator.checkLimit(10000, 99999)
      ])
    });
  }

}
