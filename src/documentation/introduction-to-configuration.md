---
title: Acetate Configuration
navTitle: Introduction
topic: Configuration
order: 1
---

Acetate is configured using a file called `acetate.conf.js`. This file allows you to set up where your source and build folders are, add custom helpers, and much more. 

The configuration should just be a node module that will be called with the instance of acetate. Here is a minimal example of an acetate configuration file that simply sets the default layout, and adds a few files that are usually ignored by acetate:

```js
module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');
  acetate.source('CNAME');
  acetate.layout('CNAME', false);
};
```

Below is a summary of the other capabilities made possible via the `acetate.conf.js` file.
