/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  //'@angular/core/src/facade/lang',

  // Thirdparty barrels.
  'rxjs',
  'ng2-bootstrap',
  //'moment',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+home',
  'app/_widgets/app-header/',
  'app/_widgets/menu-aside',
  'app/+page2',
  'app/+page3',
  'app/_widgets/alert',
  'app/_widgets/box',
  'app/_widgets/messages-box',
  'app/_widgets/notification-box',
  'app/_widgets/tasks-box',
  'app/_widgets/user-box',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    // ng2-bootstrap specifics
    "ng2-bootstrap":"vendor/ng2-bootstrap",
    "moment":"vendor/moment/moment.js"
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
