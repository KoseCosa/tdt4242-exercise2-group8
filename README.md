# Tdt4242 Exercise2 Group8

DevOps on a Budge

## How to Pipeline

1. Create your own branch
2. Make awesome code
3. Pull master if needed
4. Push to your own remote branch
5. Make a pull request with master as base and your branch as compare
--* Travis will run the unit tests
6. If the unit tests succeed merge with master if not fix your branch
--* Travis will create a docker image and push it to staging
--* Staging URL: https://tdt4242-exercise2-group8-stage.herokuapp.com/
7. Make sure everything is fine in staging
--* If something went wrong fix your branch and try again
8. Poke Clas with a stick until he promotes staging to production (Temporary Solution)
--* If something went wrong you can roll back production in heroku
--* Production URL: https://tdt4242-exercise2-group8-prod.herokuapp.com/

# Angular Information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
