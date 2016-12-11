export class User {
  public firstname: string;
  public lastname: string;
  public email: string;
  public avatarUrl: string;
  public creationDate: string;

  public constructor(data: any = {}) {
    this.firstname = data.firstname || '';
    this.lastname = data.lastname || '';
    this.email = data.email || '';
    this.avatarUrl = data.avatarUrl || '';
    this.creationDate = data.creation_date || Date.now();
  }

  public getName() {
    return this.firstname + ' ' + this.lastname;
  }
}
