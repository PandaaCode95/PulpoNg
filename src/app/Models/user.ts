export class User {

    public nick?:string;
    public password?:string;
    public role?:string;

    constructor(nick?:string,password?:string, role?:string){
        this.nick=nick;
        this.password=password;
        this.role=role;
    }
}
