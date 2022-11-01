export class Vehicle {

    public id_vehicle?:number;
    public brand?:string;
    public model?:string;
    public year?:number;
    public color?:string;
    public entry_date?:string;
    public status?:string;

    constructor(id_vehicle?:number,brand?:string, model?:string,year?:number,color?:string,entry_date?:string,status?:string){
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.color=color;
        this.entry_date=entry_date;
        this.status=status;
        this.id_vehicle=id_vehicle;
    }

}
