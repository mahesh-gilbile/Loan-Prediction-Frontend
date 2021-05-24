import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({providedIn : 'root'})
export class AppServices{

    result:any = {Accuraccy_SVM : '' , Accuraccy_LRHard : '' , Accuraccy_LRL : '' , logistic_hardcoded : '' , logistic_lib : '' , svm_lib : ''};
    form:any
    constructor(
        private route:Router,
        private http:HttpClient){}
    
    submitData(form:any)
    {
        this.form = form.value;
        this.http.post<{message:string}>("https://loan-prediction-backend.herokuapp.com/prediction",JSON.stringify(form.value))
        .subscribe((result) => {
            const values : any[] = Object.values(result);
            this.result.Accuraccy_SVM = parseFloat(values[0]);
            this.result.Accuraccy_LRHard = parseFloat(values[1]);
            this.result.Accuraccy_LRL = parseFloat(values[2]);
            this.result.logistic_hardcoded = values[3] === "1" ? true : false;
            this.result.logistic_lib = values[4] === "1" ? true : false;
            this.result.svm_lib = values[5] === "1" ? true : false;
            this.route.navigate(['\output']);
        },(error)=> {
            console.log(error);
        })
    }

    getData(){
        return this.result;
    }

    getApplicantInfo(){
        return this.form;
    }

}