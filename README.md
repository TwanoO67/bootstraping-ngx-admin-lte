# ng2-admin-lte

[![Join the chat at https://gitter.im/TwanoO67/ng2-admin-lte](https://badges.gitter.im/TwanoO67/ng2-admin-lte.svg)](https://gitter.im/TwanoO67/ng2-admin-lte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Bootstraping of Angular2 with AdminLTE dashboard template

![Preview](https://almsaeedstudio.com/img/AdminLTE2.1.png)

## Installation

```
npm install
npm start
```

## Developpement

Ajouter un composant

```
cd src/app/widgets/
ng g component my-new-widget
```

Ajouter une page

```
cd src/app/pages/
ng g component my-new-page
```

Ajouter un service

```
cd src/app/services/
ng g service my-new-service
```


## Changelog 13/10/2016

- Updated to Angular 2.1
- Updated to Angular-cli webpack beta 17
- Fix: Build issues, rigth nav issue
- Add: Second page for routing example

## Components from Ng2-bootstrap

For standard boostrap widget we are using ng2-bootstrap

You can find all widget and the doc here:
http://valor-software.com/ng2-bootstrap/#/alerts

## Specific Components

### App Header

This widget handle the header bar, it includes other 'box' widgets for the top navigation:

* Messages Box
* Notification Box
* Tasks Box
* User box

### Messages Box

This widget is registred to the messages service

### Notification Box

WIP This widget is registred to the notification service

### Tasks Box

WIP This widget is registred to the task service

### User box

This widget is registred to the user service (for the current user display)

### Menu Aside

This widget handle the left navigation Menu

It is registred to the user service (for the current user display)

## Models

### User

* *firstname*: string, First Name of the user
* *lastname* : string, Last Name of the user
* *email* : string, Email address of the user
* *avatar_url* : string, URL for the user avatar, could be absolute or relative
* *creation_date* : string, timestamp of the creation of the user

### Message

* *title* : string, title of the message
* *content* : string, content of the mesage
* *author* : User, source user of the message
* *destination* : User, destination user of the message
* *date* : string, date of sending

## Services

### User service

This service is used to send/get the current user informations accross the app

For example you can set the current user :

```
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
...
constructor(
  private _user_serv: UserService
){
...
ngOnInit(){
  let user = new User({
    firstname: "WEBER",
    lastname: "Antoine",
    email: "why-not-yop@yopmail.com",
    avatar_url: "assets/img/user2-160x160.jpg"
  });
  this._user_serv.setCurrentUser( user );
```

and you can get the user in a widget:

```
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
...
private current_user: User;
constructor(
  private _user_serv : UserService,
){
  //se connecter au modification du user courant
  this._user_serv.current_user.subscribe((user: User) => this.current_user = user);
```

warning, the import path are relative to the component you're writing in ...
