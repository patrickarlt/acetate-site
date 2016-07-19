---
title: Querying Pages
topic: Advanced
order: 20
---

Queries allow to to select and save groups of pages or calculate values based on your pages metadata.

The `acetate.query` function takes 5 arguments.

1. `name` - the unique `name` of this query. You will use this to access query results in your template.
2. `filter` - filter pages with a glob pattern like `**/*`. This will form an inital array of pages to pass to the map function.
3. `map` - Iterate over results from the filter and create a new array of results. The function is identical to [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). The results of the map will have all falsy values removed.
4. `reduce` - Iterate over the array of results from the `map` function and return a new value. This funciton is eqivilant to the callback in [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
5. `inital` - The inital value to pass into the reduce function.

### Example: Dymanically Generated Navigation

```js
module.exports = function (acetate) {
  // ...

  acetate.query(
    // create a new query called `doc_nav`
    'doc_nav',

    // get all pages in the documentation folder
    'documentation/*',

    // the map function extracts values from each page
    function map (page) {
      return {
        topic: page.topic,
        order: page.order,
        url: page.url,
        title: page.navTitle || page.title
      };
    },

    // the reduce function will take each 'page' and insert it
    // into the navigation for that topic and sort topics in order
    function reduce (nav, page) {
      let section = _.find(nav, {name: page.topic})

      if (section) {
        section.pages.push(page);
        section.pages = _.sortBy(section.pages, 'order');
      } else {
        nav.push({
          name: page.topic,
          pages: [ page ]
        });
      }

      return _.sortBy(nav, function (group) {
        var order = ['Basic', 'Advanced', 'Integrations', 'Modes', 'Misc.'];
        return order.indexOf(group.name);
      });
    },

    // start with an empty array
    []
  );

  // ...
};
```

Once you have saved your query you can access the final value under `queries.name` in your templates.

```html
{% raw %}<nav>
  {% for section in queries.doc_nav %}
    <section>
      <h4>{{ section.name }}</h4>
      <ul>
        {% for page in section.pages %}
        <li>{% link page.url, page.title %}</li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</nav>{% endraw %}
```
