import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts/public_api';
import { AppServices } from '../app.services';


@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit {

  result:any;
  form:any;
  loanstatus:boolean;
  gender:String;
  text:String;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Logistic Regression Library','Logistic Regression Hardcode','Support Vector Machine'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [];

  constructor(private appServices:AppServices) { }

  ngOnInit(): void {
    this.form = this.appServices.getApplicantInfo();
    this.gender = this.form.applicantGender;
    if(this.gender === "male")
    {
      this.text = "Mr. " + this.form.applicantFirstName; 
    }else if(this.gender === "female")
    {
      this.text = "Mrs. " + this.form.applicantFirstName;
    }else
    {
      this.text = "Mr./Mrs. " + this.form.applicantFirstName;
    }
    this.result = this.appServices.getData(); 
    this.barChartData = [
      { data: [this.result.Accuraccy_LRL , this.result.Accuraccy_LRHard , this.result.Accuraccy_SVM ,0 ,5, 100], 
        label: 'Accuraccy',
      backgroundColor : ['#FFF566' , 'lightblue' , '#FF3D3D']}
    ];
    this.loanstatus = this.result.logistic_hardcoded === true && this.result.logistic_lib === true ? true : false;
  }
}

