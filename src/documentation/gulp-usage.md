---
title: Using with Gulp
topic: Tools & Plugins
---

There is no Gulp plugin for Acetate and none is needed. Just use Acetate's existing API.

```js
var acetate = require('acetate');
var gulp = require('gulp');

gulp.task('acetate:dev', function () {
  acetate({
    mode: 'server'
  });
});

gulp.task('acetate:build', function () {
  acetate();
});
```

### Options

| Option      | Default        | Description |
| ----------  | -------------- | ----------- |
| `config`    | `'acetate.conf.js'`    | The name of your configuration file.
| `root`    | `process.cwd()`    | The root directory where you are working. This shoudl contain your `src` and `dest` folders.
| `src`    | `'src'`    | The folder where pages are located in
| `dest`    | `'build'`    | The folder where pages will be built.
| `mode` | `build` | The task that Acetate will run. Should be one of `server`, `watch` or `build`.
| `port`      | `8000`         | Integer. The port on which the webserver will respond.
| `host`      | `'localhost'`  | The hostname to server the website on.
| `log`       | `'info'`       | Logging level to use. Should be one of `debug`, `verbose`, `info`, `success`, `warn`, `error`, `silent`.
| `args` | `{}` | Any additonal arguments you want to be available under `acetate.args` in your config file.

### Example

[patrickarlt.com](http://patrickarlt.com) is built with Gulp and Acetate. Take a look at it's [gulpfile](https://github.com/patrickarlt/patrickarlt.github.io/blob/source/tasks/acetate.js).