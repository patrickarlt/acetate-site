---
title: Using with Gulp
topic: Tools & Plugins
---

There is no Gulp plugin for Acetate and none is needed. Just use Acetate's existing API.

```js
var acetate = require('acetate');
var gulp = require('gulp');

gulp.task('acetate:dev', function () {
  acetate(
    server: true,
    watcher: true,
    open: true
  );
});

gulp.task('acetate:build', function () {
  acetate();
});
```

### Options

| Option      | Default        | Description |
| ----------  | -------------- | ----------- |
| `config`    | `acetate.conf.js`    | The name of your configuration file.
| `root`    | `process.cwd()`    | The root directory where you are working. This shoudl contain your `src` and `dest` folders.
| `src`    | `src`    | The folder where pages are located in
| `dest`    | `build`    | The folder where pages will be built.
| `server`    | `false`        | Enable to built-in development server.
| `watcher`   | `false`        | Enable wathcing and rebuilding files as they change.
| `port`      | `3000`         | Integer. The port on which the webserver will respond.
| `host`      | `'localhost'`  | The hostname to server the website on.
| `findPort`  | `true`         | If `port` is occupied by another process, find another port to use.
| `log`       | `'info'`       | Logging level to use. Should be one of `debug`, `verbose`, `info`, `success`, `warn`, `error`, `silent`.

### Example

[patrickarlt.com](http://patrickarlt.com) is built with Gulp and Acetate. Take a look at it's [gulpfile](https://github.com/patrickarlt/patrickarlt.github.io/blob/source/tasks/acetate.js).