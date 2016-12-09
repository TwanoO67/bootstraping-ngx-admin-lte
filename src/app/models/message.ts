import { User } from './user';

export class Message {
  public content: string;
  public title: string;
  public author: User;
  public destination: User;
  public date: string;

  public constructor(data: any = {}) {
    this.content = data.content || '';
    this.title = data.title || '';
    this.author = data.author || null;
    this.destination = data.destination || null;
    this.date = data.date || Date.now();
  }
}
