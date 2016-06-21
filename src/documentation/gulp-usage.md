---
title: Using with Gulp
navTitle: Gulp
topic: Integrations
order: 30
---

There is no Gulp plugin for Acetate and none is needed. You can just use Acetate's existing APIs!

```js
var gulp = require('gulp');
var Acetate = require('acetate');
var server = require('acetate/lib/modes/server');
var builder = require('acetate/lib/modes/builder');

function acetate () {
  return new Acetate({
    outDir: 'dist'
  });
}

gulp.task('acetate:server', function (callback) {
  server(acetate());
});

gulp.task('acetate:build', function () {
  return builder(acetate());
});
```

### Options

| Option      | Default        | Description |
| ----------  | -------------- | ----------- |
| `config`    | `'acetate.config.js'`    | The name of your configuration file.
| `root`    | `process.cwd()`    | The root directory where you are working.
| `sourceDir`    | `'src'`    | The folder where pages are located in
| `outDir`    | `'build'`    | The folder where pages will be built.
| `log`       | `'info'`       | Logging level to use. Should be one of `debug`, `info`, `error`, or `silent`.
| `args` | `{}` | Any additonal arguments you want to be available under `acetate.args` in your config file.

### Example

[patrickarlt.com](http://patrickarlt.com) is built with Gulp and Acetate. Take a look at it's [gulpfile](https://github.com/patrickarlt/patrickarlt.github.io/blob/source/tasks/acetate.js).
