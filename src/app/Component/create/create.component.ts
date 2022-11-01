import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/Models/vehicle';
import { VehicleService } from 'src/app/Service/vehicle.service';
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public vehicle:Vehicle=new Vehicle;
  constructor(public vehicleService:VehicleService ) { 
    
  }

  ngOnInit(): void {
  }

  public onSubmit(form:NgForm){
    this.vehicleService.postVehicle(this.vehicle).subscribe((data:any)=>{
      console.log(data)
    })
  }

}
