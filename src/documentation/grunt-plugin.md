---
title: Grunt Plugin
topic: Tools & Plugins
---

For easy use with Grunt install the `grunt-acetate` plugin with this command:

```bash
npm install grunt-acetate --save-dev
```

Then load it into your Gruntfile:

```js
grunt.loadNpmTasks('grunt-acetate');
```

In your project's Gruntfile, add a section named acetate to the data object passed into `grunt.initConfig()`:

```
grunt.initConfig({
  acetate: {
    // global options
    options: {
      config: 'acetate.conf.js',
    },

    // with all default options
    build: {
    
    },

    // with custom options
    watch: {
      options: {
        watcher: true,
        server: true,
        open: true
      }
    }
  }
});
```

### Options

| Option      | Default        | Description |
| ----------  | -------------- | ----------- |
| `config`    | `'acetate.conf.js'` | Name of your configuration file.
| `keepalive` | `false`        | Keep the server alive indefinitely. Note that if this option is enabled, any tasks specified after this task will *never run*.
| `server`    | `false`        | Enable to built-in development server.
| `root`    | `process.cwd()`    | The root directory where you are working. This shoudl contain your `src` and `dest` folders.
| `src`    | `src`    | The folder where pages are located in
| `dest`    | `build`    | The folder where pages will be built.
| `watcher`   | `false`        | Enable wathcing and rebuilding files as they change.
| `port`      | `3000`         | Integer. The port on which the webserver will respond.
| `host`      | `'localhost'`  | The hostname to server the website on.
| `findPort`  | `true`         | If `port` is occupied by another process, find another port to use.
| `open`      | `false`        | Open the served page in your default browser.
| `log`       | `'info'`       | Logging level to use. Should be one of `debug`, `verbose`, `info`, `success`, `warn`, `error`, `silent`.

### Example

The Acetate website is built with Grunt. Take a look at it's [Gruntfile](https://github.com/patrickarlt/acetate-site/blob/master/Gruntfile.js).