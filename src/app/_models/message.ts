import {User} from "./user";

export class Message{
  public content:string;
  public title:string;
  public author:User;
  public destination:User;
  public date:string;

  public constructor() {

  }
}
