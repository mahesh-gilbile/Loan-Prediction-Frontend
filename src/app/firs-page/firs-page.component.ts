import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-firs-page',
  templateUrl: './firs-page.component.html',
  styleUrls: ['./firs-page.component.css']
})
export class FirsPageComponent implements OnInit {
  
  isChecked:boolean = false;
  tIncome:number = 0;
  aIncome:number = 0;
  cIncome:number = 0;
  isLoading:boolean = false;

  form = new FormGroup({
    'applicantFirstName' : new FormControl(null , {validators : [Validators.required]}),
    'applicantLastName' : new FormControl(null , {validators : [Validators.required]}),
    'applicantMobileNumber' : new FormControl(null , {validators : [Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]}),
    'applicantIncome' : new FormControl(null , {validators : [Validators.required , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]}),
    'applicantGender' : new FormControl(null , {validators : [Validators.required]}),
    'applicantMarriedStatus' : new FormControl('' , {validators : [Validators.required]}),
    'applicantDependants' : new FormControl('' , {validators : [Validators.required]}),
    'applicantEducation' : new FormControl('' , {validators : [Validators.required]}),
    'coApplicantFirstName' : new FormControl(null),
    'coApplicantLastName' : new FormControl(null),
    'coApplicantMobileNumber' : new FormControl(null , {validators : [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]}),
    'coApplicantIncome' : new FormControl(null , {validators : [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]}),
    'coApplicantGender' : new FormControl(''),
    'coApplicantRelationWithApplicant' : new FormControl(''),
    'totalIncome' : new FormControl({value: ''},{validators : [Validators.required]}),
    'loanAmount' : new FormControl(null , {validators : [Validators.required , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]}),
    'loanAmountTerm' : new FormControl(null , {validators : [Validators.required , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]}),
    'creditScore' : new FormControl(null , {validators : [Validators.required]})
  })
  constructor(private appServices:AppServices) { }

  ngOnInit(): void { 
  
   }

  onSaveData(){
    this.tIncome = +this.form.value.applicantIncome + +this.form.value.coApplicantIncome ;
    this.form.value.totalIncome = this.tIncome;
    if(this.form.invalid)
    {
      alert("Please Enter Valid Data");
    }
    else
    {
      this.isLoading = true;
      this.appServices.submitData(this.form);
    }
  }

  toggle(event : MatSlideToggleChange){
    this.isChecked = event.checked;
    if(this.isChecked)
    {
      this.form.controls['coApplicantFirstName'].setValidators([Validators.required]);
      this.form.controls['coApplicantLastName'].setValidators([Validators.required]);
      this.form.controls['coApplicantMobileNumber'].setValidators([Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
      this.form.controls['coApplicantIncome'].setValidators([Validators.required , Validators.pattern(/^-?(0|[1-9]\d*)?$/)]);
      this.form.controls['coApplicantGender'].setValidators([Validators.required]);
      this.form.controls['coApplicantRelationWithApplicant'].setValidators([Validators.required]);
    }else{

      this.form.get('coApplicantFirstName').reset();
      this.form.get('coApplicantLastName').reset();
      this.form.get('coApplicantMobileNumber').reset();
      this.form.get('coApplicantIncome').reset();
      this.form.get('coApplicantGender').reset();
      this.form.get('coApplicantRelationWithApplicant').reset();

      this.form.controls['coApplicantFirstName'].clearValidators();
      this.form.controls['coApplicantLastName'].clearValidators();
      this.form.controls['coApplicantMobileNumber'].clearValidators();
      this.form.controls['coApplicantIncome'].clearValidators();
      this.form.controls['coApplicantGender'].clearValidators();
      this.form.controls['coApplicantRelationWithApplicant'].clearValidators();
      
      this.form.controls['coApplicantFirstName'].updateValueAndValidity();
      this.form.controls['coApplicantLastName'].updateValueAndValidity();
      this.form.controls['coApplicantMobileNumber'].updateValueAndValidity();
      this.form.controls['coApplicantIncome'].updateValueAndValidity();
      this.form.controls['coApplicantGender'].updateValueAndValidity();
      this.form.controls['coApplicantRelationWithApplicant'].updateValueAndValidity();
    }
  }

}
