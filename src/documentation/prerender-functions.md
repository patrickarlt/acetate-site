---
title: Prerender Functions
topic: Advanced
order: 80
---

Although it's possible to request external data with other helpers like `acetate.transformAllAsync` this would happen every time a page needs to be rendered. In server mode this would cause external data to be requested every time a page was requested even if the data had nothing to do with that page.

`acetate.prerender(pattern, handler)` will execute the `handler` function only before rendering a page that matches the `pattern`. `handler` will be called with the `page` object and a callback function that accepts `error` and the modified `page` object.

<code class="filename">acetate.config.js</code>

```js
var GitHubApi = require("github");
var github = new GitHubApi();

module.exports = function (acetate) {
  renderer.prerender('gists.html', function (page, callback) {
    github.gists.getForUser({
      user: 'patrickarlt',
    }, function (error, gists) {
      if (error) {
        callback(error);
        return;
      }

      page.gists = gists;
      callback(null, page);
    });
  });
};
```