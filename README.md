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

- Updated to Angular2 RC4
- Updated Router to 3.0.0.alpha8
- Updated AdminLTE to 2.3.3
- Updated bootstraping to use angular-cli

## Components

AlertComponent

```
<alert title="title" text="title" type="info" icon="ban" (close)="onCloseAlert()"></alert>
```
Box

```
<box title="My title" type="warning" icon="ban">Custom content</box>
```
