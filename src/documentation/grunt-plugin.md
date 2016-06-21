---
title: Using with Grunt
navTitle: Grunt
topic: Integrations
order: 20
---

For easy use with Grunt install the `grunt-acetate` plugin with this command:

```bash
npm install grunt-acetate --save-dev
```

Then load it into your Gruntfile:

```js
grunt.loadNpmTasks('grunt-acetate');
```

In your project's Gruntfile, add a section named `acetate` to the config object passed into `grunt.initConfig()`:

```
grunt.initConfig({
  acetate: {
    // global options
    options: {
      config: 'acetate.config.js',
    },

    // with all default options
    build: {
      mode: 'build'
    },

    // with custom options
    watch: {
      options: {
        mode: 'server'
      }
    }
  }
});
```

### Options

| Option      | Default        | Description |
| ----------  | -------------- | ----------- |
| `mode`    | *REQUIRED* |  The Acetate mode to run in. Either `'build'`, `'watcher'`, or `'server`.
| `config`    | `'acetate.conf.js'`    | The name of your configuration file.
| `root`    | `process.cwd()`    | The root directory where you are working. This shoudl contain your `src` and `dest` folders.
| `src`    | `'src'`    | The folder where pages are located in
| `dest`    | `'build'`    | The folder where pages will be built.
| `mode` | `build` | The task that Acetate will run. Should be one of `server`, `watch` or `build`.
| `port`      | `8000`         | Integer. The port on which the webserver will respond.
| `host`      | `'localhost'`  | The hostname to server the website on.
| `log`       | `'info'`       | Logging level to use. Should be one of `debug`, `verbose`, `info`, `success`, `warn`, `error`, `silent`.
| `args` | `{}` | Any additional arguments you want to be available under `acetate.args` in your config file.
| `server` | `{}` | Any [additional Browsersync options](https://www.browsersync.io/docs/options/) to use when running in `server` mode.

### Example

The Acetate website is built with Grunt. Take a look at it's [Gruntfile](https://github.com/patrickarlt/acetate-site/blob/master/Gruntfile.js).
