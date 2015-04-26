---
title: Command Line
topic: Tools & Plugins
---

You can install a command line with npm:

```bash
npm install -g acetate-cli
```

Then access the built in help with `acetate --help` or just `acetate`.

```bash
$ acetate --help
Usage: acetate [command] [options]

Commands:
  build     run a single build of the project and exit
  watch     build site, then watch files for changes and rebuild
  server    build site and watch for changes, serve output folder with built-in server

Options:
  -h, --help     Show help
  --host         host server should use                                    [default: "localhost"]
  --findPort     find new port if port is in use                           [boolean]  [default: false]
  --open         open browser when server starts up                        [boolean]  [default: false]
  --log          log levels: debug|verbose|info|success|warn|error|silent  [default: "info"]
  -v, --version  Show version number
  -c, --config   path to config file                                       [default: "acetate.conf.js"]
  -p, --port     port number server should use                             [default: 8000]
  -i, --input    source folder to read pages from                          [default: "src"]
  -o, --output   folder where pages will be built                          [default: "build"]

Examples:
  acetate server --open          build site, start development server and open site
  acetate watcher -o dist        build site to `dist` folder, start watching for changes
  acetate build --log=verbose    build site with extra logging
```

## Passing Custom Arguments

If you need to pass custom configuration options with using the Acetate CLI you can simply add your custom options when using `acetate` on the command line:

```bash
$ acetate server --open --env=dev
```

Acetate will seperate your custom options from the Acetate options and make then available in your config file under `acetate.args`.

<code class="filename">acetate.conf.js</code>

```js
var path = require('path');

module.exports = function(acetate){
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
