# Angular CLI (as of v1.0.0-beta.32)

https://cli.angular.io/

https://github.com/angular/angular-cli

The official Angular CLI is the best choice to use as you are getting
started with Angular development. We also have other examples here
(some of them not updated since the angular beta series) that show
that other tooling choices are possible.

The CLI is covered in depth during the main body of the class, but
here are extra pieces that may be useful for advanced students.

## Installing

```
npm install -g @angular/cli
```

## Lazy Loading

After generating this example programmi, we added a couple of routes and set
up lazy loading of these routes.

To see this run as if in production, use ```ng build``` and observe the
additional bundles. Also, take note as you move through the application the
additional bundles will be fetched as required.

### Bundles before Lazy Loading

```
chunk    {0} polyfills.bundle.js, polyfills.bundle.map (polyfills) 153 kB {4} [initial]
chunk    {1} main.bundle.js, main.bundle.map (main) 7.54 kB {3} [initial] [rendered]
chunk    {2} styles.bundle.js, styles.bundle.map (styles) 10 kB {4} [initial]
chunk    {3} vendor.bundle.js, vendor.bundle.map (vendor) 2.93 MB [initial]
chunk    {4} inline.bundle.js, inline.bundle.map (inline) 0 bytes [entry]
```

### Bundles after Lazy Loading

```
chunk    {0} 0.chunk.js, 0.bundle.map 2.89 kB {1} {3} [rendered]
chunk    {1} 1.chunk.js, 1.bundle.map 2.84 kB {0} {3} [rendered]
chunk    {2} polyfills.bundle.js, polyfills.bundle.map (polyfills) 153 kB {6} [initial] [rendered]
chunk    {3} main.bundle.js, main.bundle.map (main) 7.54 kB {5} [initial] [rendered]
chunk    {4} styles.bundle.js, styles.bundle.map (styles) 10 kB {6} [initial] [rendered]
chunk    {5} vendor.bundle.js, vendor.bundle.map (vendor) 2.93 MB [initial] [rendered]
chunk    {6} inline.bundle.js, inline.bundle.map (inline) 0 bytes [entry] [rendered]
```

## AOT

By default the [angular-cli](https://github.com/angular/angular-cli) will build using AOT. This ensures that
the bundles are as small as possible and we have a production ready application.

```
ng build --prod
```

You can turn off AOT if you desire by passing:

```
ng build --prod --aot false
```

-----------------------------------------------------------------------------

# ExampleApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.32.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

You can use the short-hand `ng g c component-name` to reduce some key strokes.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

The task will automatically start up the application server and run all end-to-end tests.

## "Eject" Webpack Config

Run `ng eject` to extract the `webpack.config.js` in order to add additional logic.

By default the [angular-cli](https://github.com/angular/angular-cli) obfuscates the majority of the config needed to run and build the application.
There might be some occassions where you need to add custom plugins or additional logic for the Webpack builds. With this command you will be required to
run the scripts that were generated in your `package.json` in order to run your application.

For example, instead of `ng serve` to start your application, you will run `npm start`

## Further help

To get more help on the [angular-cli](https://github.com/angular/angular-cli) use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
