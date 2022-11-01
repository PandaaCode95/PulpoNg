import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/Models/vehicle';
import { VehicleService } from 'src/app/Service/vehicle.service';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/Service/login.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public hidden:boolean=true;
  public flota:Vehicle[]=[];
  public vehiculo!:Vehicle;
  public vehicle:Vehicle=new Vehicle;
  public role?:string;
  constructor(public vehicleService:VehicleService, public login:LoginService) { }

  ngOnInit(): void {
    this.role=this.login.user.role
    
    this.getVehicles()
  }
  public getVehicles(){
    this.vehicleService.getVehicle().subscribe((data:any)=>{
          this.flota = data
          
        })
  }
  public hiddenClick(vehicle:Vehicle){
    
    this.hidden=!this.hidden;
    if(this.hidden==true){
      this.hidden=!this.hidden
    }
   
    this.vehiculo = vehicle;
   
  }
  public onSubmitFilter(form:NgForm){
   
     this.vehicleService.getFilterVehicle(this.vehicle).subscribe((data:any)=>{
      form.reset();
      this.flota = data
      
     })
  }
  public deleteVehicle(vehicle:Vehicle){
    this.vehicleService.delVehicle(vehicle).subscribe((data:any)=>{
      
      this.getVehicles();
    })
  }
}
