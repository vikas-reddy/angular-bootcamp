# Compiling Angular applications, development and production

There are various options to consider in compiling/building Angular
applications, both for development and production. Here is a short
summary of the state-of-the-art as of March 2017.

## Angular CLI

Example in our `Tooling-CLI` directory, and we work with this
extensively during Angular Boot Camp.

[CLI web site](https://cli.angular.io/)

[CLI on Github](https://github.com/angular/angular-cli)

Angular CLI is best choice to start with, because...

* Endorsed by the Angular team.
* Developed partly by the Angular team, along with outside
  contributors.
* Supports AOT easily.
* Many features, ready immediately when you need them.
* Performance is quite good.
* Output bundles are small, as small as easily achievable.
* Keeping it up to date is Someone Else's Problem - this is perhaps
  the most important feature.

Behind the scenes, Angular CLI is based on webpack and various related
libraries and Angular-specific plugins.

## SystemJS + Typescript (in-browser)

It is possible to run Angular applications directly in the browser,
with the help of tooling that runs in browser. In fact, this is what
we do while teaching Angular Boot Camp most of the way through.

To see this machinery in detail, look at the
[Angular.io "quick start"](https://angular.io/guide/quickstart)

* Develop code using only a browser and static files.
* Works a "Plunkr" and simlar online tools.
* Rapid iteration.
* Scales up poorly, loading a large project will require many file
  transfers and a long time.
* No AOT, only JIT.
* Doesn't provide a production bundling option, the read below.

How it works, briefly:
* Runs the TypeScript compiler in the browser
* Runs a module loader in the browser
* Loads the configuration in the browswer
* Fetches your source code, and library code to the browser, processes
  it all there.

## SystemJS + TSC (command-line builds)

It is possible to compile Angular code with surprisingly little
tooling, a modest extension of the approach above. TypeScript alone,
or with a small amount of help another tool, can produce a single-file
output bundle. That file can be consumed by SystemJS, or even combined
with the libraries ("SystemJS Builder") to a single output bundle.

Unfortunately:

* This tends to result in very large output bundles
* Doesn't support AOT.
* Has almost no adoption.

Therefore we don't recommend it.

## JSPM

JSPM is a sister project with SystemJS, offering higher-level
capabilities that wraparound system, configure system, fetch
dependencies and wire them up.

JSPM was one of the more popular ways of using early Angular versions,
but hasn't received as much attention recently. Behind the scenes, it
uses Rollup to prepare production output, so it should ultimately be
capable of excellent results and may gain popularity in the future.

AOT support should be possible with a suitable JSPM plug-in, but at
the moment we do not know of one.

## webpack (without CLI)

Behind the scenes, Angular CLI is built on webpack. CLI offers a
convenient `ng eject` feature which will convert your CLI-based
project to a webpack-based project. (Though there is an important
caveat: that project will still depend on an important piece of CLI
which arrives as a web pack plug-in.)

* Long, proven history - although for good results you need webpack 2,
  which does not yet have a long or proven history.
* AOT support, with the above-mentioned Angular-specific plugin.
* Numerous plugins and addons.
* Can be slow in development, although many iterations of work have
  made betterr.
* Tendency to end up with a long, complex config file; but there are
  now tools to help manage web pet configuration complexity.

(Sometimes people ask what older tools like Browserify and Require.js.
These could be used with Angular, but you won't find the
Angular-specific add-ons that help so much with webpack.)

## Rollup

Rollup is receiving lots of attention as a particularly efficient
module bundler, and in fact it does sometimes produce meaningfully
smaller distributable Angular programs then CLI/webpack, though at the
cost of more project specific configuration work.

It can be used in combination with various tools or loan, you can see
a couple of examples that we have published online:

[Angular 4 AOT Example with es2015 ESM, Rollup, Buble, Uglify](https://github.com/OasisDigital/angular-aot-es2015-rollup)

[Another variation, AOT + Rollup + Closure](https://github.com/OasisDigital/angular-aot-es2015-rollup/tree/closure-compiler)

## AOT + Closure Compiler

This is the Angular build stack "of the future". Angular team members
have pointed out at conferences that stack has a lot of internal interest at Google.

Closure Compiler is a JavaScript bundler and compressor that can work
in a more advanced level than most (or possibly all) of the
competition. But to do that it can impose more strict requirements on
the code passed to it.

Angular itself has had many changes over the last six months to make
it more compatible with Closure Compiler, and the requirements for
application code for the stack are still emerging.

You can see this working in the following report we have published:

[AOT and Closure Compiler Example](https://github.com/OasisDigital/angular-aot-closure)
