---
title: Configuring Nunjucks
topic: Advanced
order: 90
---

`acetate.renderer.nunjucks` is a full [Nunjucks `environment`](https://mozilla.github.io/nunjucks/api.html#environment). This makes it easy to use any of the [Nunjucks environemnt methods](https://mozilla.github.io/nunjucks/api.html#environment) to configure Nunjucks as well as install helper libraries like [`nunjucks-date`](https://github.com/techmsi/nunjucks-date).

```js
const nunjucksDate = require('nunjucks-date');

nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');

nunjucksDate.install(acetate.renderer.nunjucks);
```