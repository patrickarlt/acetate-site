---
title: CLI
topic: Integrations
order: 10
---

You can install a command line with npm:

```bash
npm install -g acetate-cli
```

Then access the built in help with `acetate --help` or just `acetate`.

```plain
$ acetate --help
Usage: acetate [command] [options]

Commands:
  build   run a single build of the project and exit
  watch   build site, then watch files for changes and rebuild
  server  build site and watch for changes, serve output folder with built-in server

Options:
  -h, --help     Show help  [boolean]
  --open         open browser after server starts up (server only)  [default: false]
  --host         host server should use (server only)  [default: "localhost"]
  --findPort     if true the server will find a port automatically (server only)  [boolean] [default: false]
  --https        enable https on the dev server with built-in Browsersync certs  [boolean] [default: false]
  --log          log levels: debug|info|warn|silent  [default: "info"]
  --https-cert   enable https on the dev server with Browsersync certs
  --https-key    enable https on the dev server with Browsersync certs
  -v, --version  Show version number  [boolean]
  -r, --require  require additional modules before starting Acetate (babel-register)  [array]
  -p, --port     port number server should use (server only)  [default: 8000]
  -i, --input    source folder to read pages from  [default: "src"]
  -o, --output   folder where pages will be built  [default: "build"]
  -c, --config   path to config file  [string] [default: "acetate.config.js"]

Examples:
  acetate server --open        build site, start development server and open site
  acetate watcher -o dist      build site to `dist` folder, start watching for changes
  acetate build --log=verbose  build site with extra logging
```

## Passing Custom Arguments

If you need to pass custom configuration options when using the Acetate CLI you can simply add your custom options when using `acetate` on the command line:

```bash
$ acetate server --open --env=dev
```

You can then access all the command line arguments in your config file.

<code class="filename">acetate.conf.js</code>

```js
const path = require('path');

module.exports = function (acetate) {
  // load configuration data onto every page
  acetate.data('config', acetate.args.env + '-config.json');
};
```

You can also pass additional parameters without names. They will be available in order under the `acetate.args._` array:

```bash
$ acetate server dev --open
```

```js
var path = require('path');

module.exports = function(acetate){
  // load configuration data onto every page
  acetate.data('config', acetate.args._[0] + '-config.json');
};
```
