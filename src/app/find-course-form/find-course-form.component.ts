import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormControl,
  Validators} from '@angular/forms';
import { NumberInputValidator } from '../services/number-input.validatation';
import { MyErrorStateMatcher } from '../services/mat-matcher.validation';


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
