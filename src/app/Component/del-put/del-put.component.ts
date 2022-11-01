import { Component,Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Models/vehicle';
import { VehicleService } from 'src/app/Service/vehicle.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-del-put',
  templateUrl: './del-put.component.html',
  styleUrls: ['./del-put.component.css']
})
export class DelPutComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  constructor(public vehicleService:VehicleService) { }

  ngOnInit(): void {
  }
  public onSubmit(form:NgForm){
    this.vehicleService.putVehicle(this.vehicle).subscribe((data:any)=>{
      console.log(data)
    })
  }
}
