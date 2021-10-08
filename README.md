# Angular Fundamentals
This app is simple angular application with 2 Components. Display component and Button components are the 2 components. With this application, I implemented/learnt angular concepts like dependency injection, service, ngrx component interaction, state management with BehaviorSubject and so on. Btw React is wayyyyyy easier than Angular.

# App Development Summary
1) This app has 2 components i.e. Display Component & Button Component.
2) Create a Service and import BehaviorSubject inside that service.
3) Make variable that will be shared across components (default value of this variable can be intiatilized here)
4) Broadcast this data as observable
5) Make a function that updates the value of the data that is to be shared
6) Import the service into the components and inject into the constructor
7) In the component, subscribe to the broadcast inside ngOnInit.

# CounterApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
https://youtu.be/49QM3KkOKXs
