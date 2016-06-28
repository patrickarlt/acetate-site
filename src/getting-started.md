---
title: Getting Started
layout: layouts/_documentation:content
---

## Basic Project Structure

Acetate sites have 3 common components need to get started:

1. A folder containing HTML and Markdown pages. This is generally called `src`.
2. A `acetate.config.js` file that defines basic project configuration.

## Quick Start

```bash
$ npm install -g acetate-cli
```

Clone the Acetate sample project and `cd` into it:

```bash
$ git clone https://github.com/patrickarlt/acetate-sample.git && cd ./acetate-sample
```

Intall the dependencies with NPM:

```bash
$ npm install
```

Run the built-in development server:

```bash
$ acetate server
```


## What's Next?

Take a look at [Understanding Acetate](/understanding-acetate/) for a more in depth look at how Acetate works. Then you are ready to start building your project or dive into some of the sample sites.

## Starter Projects

* [Acetate Starter Project](https://github.com/patrickarlt/acetate-sample) - Minimal sample project
* [CLI Sample Project](https://github.com/patrickarlt/acetate-cli-sample) - Complete example using the Acetate CLI

## Examples

* [acetate.io](https://github.com/patrickarlt/acetate-site) - The Aceate website built with Grunt
* [patrickarlt.com](https://github.com/patrickarlt/patrickarlt.github.io) - Personal website built with Gulp
