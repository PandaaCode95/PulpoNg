import { Injectable } from '@angular/core';
import { Vehicle } from '../Models/vehicle';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
   private url:string = "";
  constructor(private http:HttpClient) { }

  getVehicle():Observable<Object>{
     this.url="http://localhost:3000/vehicles"
    return this.http.get(this.url)
  }
  getFilterVehicle(vehicle:Vehicle):Observable<Object>{
     this.url="http://localhost:3000/filter"
    return this.http.post(this.url,vehicle)
  }
  putVehicle(vehicle:Vehicle):Observable<Object>{
    this.url="http://localhost:3000/vehicles?id_vehicle="+vehicle.id_vehicle;
    return this.http.put(this.url,vehicle)
  }
  delVehicle(vehicle:Vehicle):Observable<Object>{
    this.url="http://localhost:3000/vehicles?id_vehicle="+vehicle.id_vehicle;
    return this.http.delete(this.url)
  }
  postVehicle(vehicle:Vehicle):Observable<Object>{
    this.url="http://localhost:3000/vehicles"
    return this.http.post(this.url,vehicle)
  }
}
