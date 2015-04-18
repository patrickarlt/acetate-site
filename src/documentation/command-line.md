---
title: Command Line
topic: Tools & Plugins
---

You can install a command line with npm:

```bash
npm install -g acetate-cli
```

Then access the built in help:

```bash
$ acetate --help
Usage: acetate [command] [options]

Commands:
  build     run a single build of the project and exit
  watch     build site, then watch files for changes and rebuild
  server    build site and watch for changes, serve output folder with built-in server

Options:
  -h, --help     Show help
  --host         host server should use                                          [default: "localhost"]
  --findPort     find new port if port is in use                                 [boolean]  [default: false]
  --open         open browser when server starts up                              [boolean]  [default: false]
  --log          log levels: debug|verbose|info|success|warn|error|stack|silent  [default: "info"]
  -v, --version  Show version number
  -c, --config   path to config file                                             [default: "acetate.conf.js"]
  -p, --port     port number server should use                                   [default: 8000]
  -i, --input    source folder to read files from                                [default: "src"]
  -o, --output   destination folder where files will be built                    [default: "build"]

Examples:
  acetate server --open    build site, start development server and open site
```