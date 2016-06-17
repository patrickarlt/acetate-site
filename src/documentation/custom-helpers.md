---
title: Custom Helpers
topic: Pages
order: 60
---

## Custom Filters

You can congisure custom filters for Nunjucks with the `acetate.filter` helper. The first parameter is the name of your filter. The second is the function that will process the variable and return it.

```js
acetate.filter('prettyJSON', function(str){
  return "<pre>" + JSON.stringify(JSON.parse(str),null, '  ') + "</pre>";
});
```

Once your filters are defined you can use them in your templates.

<code class="filename">src/json-example.html</code>
```html
{% raw %}---
json: "{\"foo\":\"bar\", \"baz\":\"bar\"}"
---

{{ json | prettyJSON }}{% endraw %}
```

<code class="filename">build/json-example/index.html</code>
```html
<pre>{
  "foo": "bar",
  "baz": "bar"
}</pre>
```

Refer to the [Nunjucks filter documentation](https://mozilla.github.io/nunjucks/templating.html#filters) for more detailss.

## Helper Functions

You can use the `helper` function in your config file to define custom helpers you can use in your templates. `helper` takes 2 parameters, a tag name which you will use in your templates and a handler function. The handler function will be passed the page context (all the variables on the page) and then any arguments you pass from the template.

<code class="filename">acetate.conf.js</code>

```js
{% raw %}// create a link helper that will also add a .active
// class to the linked page is also teh current page
acetate.helper('link', function(context, url, text){
  // context is the current local variables on the page
  var className = context.url === url ? 'active' : 'inactive';

  // build a relative url to the page we are
  // linking to using the relativeUrl variable
  var relativeUrl = context.relativePath + url;

  // Nunjucks template for the link
  var template = '<a href="{{relativeUrl}}" class="{{className}}">{{text}}</a>';

  // finally render the nunjucks string with the variables
  return acetate.nunjucks.renderString(template, {
    relativeUrl: relativeUrl,
    className: className,
    text: text
  });
});{% endraw %}
```

This example also shows how you can use Nunjucks to handle templating inside your helper functions. Now that you have defined your helper you can use it in your templates.

<code class="filename">src/blog/index.html</code>

```html
{% raw %}{% link '/', 'Home' %}{% endraw %}
```

<code class="filename">dist/blog/index.html</code>

```html
<a href="../" class="inactive">Home</a>
```

{% callout 'Note' %}
You must pass at least 1 parameter to your helper tags in your templates. Otherwise Nunjucks will throw a template error.
{% endcallout %}

## Block Helpers

You can also create special helpers which can receive blocks of content by using the `acetate.block` function. ``block` takes 2 parameters, a tag name which you will use in your templates and a handler function. The handler function will be passed the page context (all the variables on the page) then the body of your block, and finally any arguments you pass from the template.

<code class="filename">acetate.conf.js</code>

```js
{% raw %}acetate.block('callout', function(context, body, type){
  var template = '<div class="callout {{type|lower}}"><p><h5>{{type}}</h5>{{body}}</p></div>';
  return acetate.nunjucks.renderString(template, {
    type: type,
    body: body
  });
});{% endraw %}
```

Now that your helper is registered you can use it in your templates.

<code class="filename">src/blog/index.html</code>

```html
{% raw %}{% callout 'Note' %}
This is a custom callout!
{% endcallout %}{% endraw %}
```

<code class="filename">dist/blog/index.html</code>

```html
<div class="note">
  <h5>Note</h5>
  <p>This is a custom callout!</p>
</div>
```
