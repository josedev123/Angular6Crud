import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm: FormGroup;
fullNameLength = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner']
      })
    });

    this.employeeForm.get('fullName').valueChanges.subscribe((value: string) => {
      this.fullNameLength = value.length;
    })

  }

  onLoadDataClick(): void {
this.employeeForm.setValue({
fullName: 'Pragim Technologies',
email: 'pragim@pragimtech.com',
skills: {
  skillName: 'C#',
  experienceInYears: 5,
  proficiency: 'beginner'
}
});
  }

  onSubmit(): void {
    console.log(this.employeeForm);
  }

}
