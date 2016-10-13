export class User{
  public firstname:string;
  public lastname:string;
  public email:string;
  public avatar_url:string;
  public creation_date: string;

  public constructor(data:any = {}) {
    this.firstname = data.firstname || "";
    this.lastname = data.lastname || "";
    this.email = data.email || "";
    this.avatar_url = data.avatar_url || "";
    this.creation_date = data.creation_date || Date.now();
  }

  public getName(){
    return this.firstname+" "+this.lastname;
  }
}
