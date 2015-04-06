---
title: Command Line
---

You can install a command line with npm:

```bash
npm install -g acetate-cli
```

Then access the built in help:

```bash
acetate --help
Usage: acetate [command] [options]

Commands:
  build     run a single build of the project and exit
  watch     build site, then watch files for changes and rebuild
  server    build site and watch for changes, serve output folder with built-in server

Options:
  -h, --help    Show help
  --host        host server should use                                          [default: "localhost"]
  --findPort    find new port if port is in use                                 [default: false]
  --open        open browser when server starts up                              [default: false]
  --clean       clean out files from build folder                               [default: false]
  --log         log levels: debug|verbose|info|success|warn|error|stack|silent  [default: "info"]
  -p, --port                                                                    [default: 8000]
  -c, --config                                                                  [default: "acetate.conf.js"]

Examples:
  acetate build --clean    build site, cleaning the output folder before beginning
```