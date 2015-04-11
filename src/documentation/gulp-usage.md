---
title: Using with Gulp
topic: Tools & Plugins
---

There is no Gulp plugin for Acetate and none is needed. Just use Acetate's existing API.

```js
var gulp = require('gulp');
var acetate = require('acetate');
var path = require('path');
var configFile = path.join(process.cwd(), 'acetate.conf.js');

gulp.task('acetate:watch', function () {
  acetate({
    config: configFile,
    watcher: true,
    server: true,
    open: true
  });
});

gulp.task('acetate:build', function () {
  acetate({
    config: configFile,
  });
});
```

### Options

| Option      | Default        | Description |
| ----------  | -------------- | ----------- |
| `config`    | `undefined`    | The path to your configuration file.
| `server`    | `false`        | Enable to built-in development server.
| `watcher`   | `false`        | Enable wathcing and rebuilding files as they change.
| `port`      | `3000`         | Integer. The port on which the webserver will respond.
| `host`      | `'localhost'`  | The hostname to server the website on.
| `findPort`  | `true`         | If `port` is occupied by another process, find another port to use.
| `clean`     | `false`        | Removes pages created by Acetate in the build directory before building.
| `log`       | `'info'`       | Logging level to use. Should be one of `debug`,`verbose`,`info`,`success`,`warn`,`error`,`stack`,`silent`.

### Example

[patrickarlt.com](http://patrickarlt.com) is built with Gulp and Acetate. Take a look at it's [gulpfile](https://github.com/patrickarlt/patrickarlt.github.io/blob/source/tasks/acetate.js).