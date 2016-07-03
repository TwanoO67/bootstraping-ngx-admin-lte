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
cd src/app/_widgets/
ng g component my-new-widget
```


Ajouter une page

```
ng g route my-new-page
```

Ajouter un service

```
cd src/app/_services/
ng g service my-new-service
```


## Changelog

- Added ng2-bootstrap
- Updated to Angular2 RC4
- Updated Router to 3.0.0.alpha8
- Updated AdminLTE to 2.3.3
- Updated bootstraping to use angular-cli

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

This widget is registred to the user service

### Menu Aside

This widget handle the left navigation Menu



### AlertComponent (deprecated, use ng2-bootstrap)

```
<alert title="title" text="title" type="info" icon="ban" (close)="onCloseAlert()"></alert>
```

### Box  (deprecated, use ng2-bootstrap)

```
<box title="My title" type="warning" icon="ban">Custom content</box>
```
