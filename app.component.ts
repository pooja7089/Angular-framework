import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _stateForm: any;
  private readonly newProperty = this._stateForm;
  private url='https://od=api.oxforddictionries.com';


  public get stateForm(): any {
    return this.newProperty;
  }
  public set stateForm(value: any) {
    this.newMethod(value);
  }


  state=['Alabama','Alaska','Arizona','Arkansaa','Califormia','Colondo'
  ,'Connection','Delaware','District of Columbia','Florida'
  ,'Finland','France','Gabon','Gambia','Haiti','Hungary','Iceland','India','Iran','Italy','Kenya','Kosovo','Kuwait','Loos'
  ,'Libya','Latvia','Macedonia','Mali','Morococo','Niger','Oman','Peru','Poland'
  ,'Panama','Qatar','Romania','Rwanda','Russian Federation','Snegal','Serbia'
  ,'Singapore','Sudan','Spain','Togo','Tunisia','Venezuela','Vietnam','Wau','Warren','Wuxi'
  ,'Wonju','Waco'];
  

  private newMethod(value: any) {
    this._stateForm = value;
  }
}


      
