---
title: Groups
topic: Pages
---

Page groups create sets of pages that share a particular key. This is usefull for creating quick structured navigation. Groups and the pages within them can also be sorted.

To create a group use the `acetate.group` helper in your config. The first parameter is the group name which will avilable in your templates, the second is a glob which will be used to match pages that are in the group. The third parameter is an object of options.

<code class="filename">acetate.conf.js</code>
```js
acetate.group('documentation', 'documentation/*', {
  groupBy: 'topic',
  sortGroups: function(group){
    var order = ['Pages', 'Configuration', 'Tools & Plugins', 'Misc.'];
    return order.indexOf(group.name);
  },
  sortPages: 'order'
});
```

This will create a group called `documentation` that contains all of the pages in `documentation` folder grouped by the `topic` key in their metadata. You can then use the `documentation` variable on any of those pages.

## Accessing All Groups

Once you have created a page you can access all of the generated groups by using {% raw %}{{ group_name.groups }}{% endraw %} in your template. Each group has an array of all the pages in that group accessable with {{ group.pages }} and the value of the `groupBy` key accessable with {{group.name}}. This can be used to create a quick structured navigation.

```html
{% raw %}{% for group in documentation.groups %}
  <section>
    <h4>{{ group.name }}</h4>
    <ul>
      {% for page in group.pages %}
      <li><a href="{{relativeUrl}}{{page.url}}">{{page.title}}</a></li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}{% endraw %}
```

## Other Pages in the Same Group

<p>Coming Soon</p>