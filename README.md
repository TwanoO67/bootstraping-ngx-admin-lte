# bootstraping ngx-admin-lte

[![Join the chat at https://gitter.im/TwanoO67/ng2-admin-lte](https://badges.gitter.im/TwanoO67/ng2-admin-lte.svg)](https://gitter.im/TwanoO67/ng2-admin-lte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/TwanoO67/ng2-admin-lte.svg?branch=master)](https://travis-ci.org/TwanoO67/ng2-admin-lte)

Bootstraping of Angular4 with AdminLTE dashboard template
( Using ngx-admin-lte Library)

![Preview](https://almsaeedstudio.com/img/AdminLTE2.1.png)

## UPDATE !

This version use the new npm package ngx-admin-lte (this will be easier to update)
If your are looking for the old version for angular check the "angular2" branch.

There's now two different repo:
[bootstraping-ngx-admin-lte](https://github.com/TwanoO67/bootstraping-ngx-admin-lte) For those who want the full bootstraping
[ngx-admin-lte](https://github.com/TwanoO67/ngx-admin-lte) For whom want to install via npm in a existing project

## Support
Hey dude! Help me out for a couple of :beers:!

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ghostsmaker@hotmail.com&lc=US&item_name=TwanoO67&item_number=ng2-admin-lte&no_note=0&currency_code=EUR)

## Launching with docker

```
./bin/start.sh
```

## Building with docker

```
./bin/prod.sh
```

## Lauching with node > 7 locally installed

```
npm install -g yarn
yarn
yarn start
```

## Developpement

Adding a component

```
cd src/app/widgets/
npm run gen component my-new-widget
```

Ajouter une page

```
cd src/app/pages/
yarn gen component my-new-page
```

Ajouter un service

```
cd src/app/services/
yarn gen service my-new-service
```


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
