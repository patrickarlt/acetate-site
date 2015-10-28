---
title: Querying Pages
topic: Configuration
order: 40
---

Acetate provides an easy way to create a collection of pages with `acetate.query()`. This method accepts three arguments:

1. *name*: String representing the name the collection can be accessed with from a template.
2. *glob*: String representing which pages to query for. The callback will be called with all the pages matching this pattern.
3. *callback*: Function which will be called with the queried pages.

For example, to create a collection of all documentation pages grouped and sorted by their `topic` metadata:

```
var _ = require('lodash');

module.exports = function (acetate) {
  acetate.query('documentation', 'documentation/*', function (pages) {
    return _(pages).groupBy('topic').map(function (pages, topic) {
      return {
        name: topic,
        pages: _.sortByOrder(pages, ['order'], [true])
      };
    }).sortBy(function (group) {
      var order = ['Pages', 'Configuration', 'Tools & Plugins', 'Extensions', 'Misc.'];
      return order.indexOf(group.name);
    }).value();
  });
};
```

Above we query all of the pages inside the documentation folder and then sort and group them with lodash (optional). Whatever you returned from your function is now available as `{{queries.documentation}}`. To iterate over this query, you could use something like this in your Nunjucks template:

```
{% for group in queries.documentation %}
  <h4>{{ group.name }}</h4>
{% endfor %}
```
