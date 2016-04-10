export class User{
  public first_name:string;
  public last_name:string;
  public email:string;
  public avatar_url:string;

  public creation_date: string;

  public constructor() {

  }

  public getName(){
    return this.first_name+" "+this.last_name;
  }
}
