---
title: Custom Helpers
topic: Advanced
order: 40
---

## Custom Filters

You can configure custom filters for Nunjucks with the `acetate.filter` helper. The first parameter is the name of your filter. The second is the function that will process the variable and return it.

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

Refer to the [Nunjucks filter documentation](https://mozilla.github.io/nunjucks/templating.html#filters) for more details.

## Helper Functions

You can use the `helper` function in your config file to define custom helpers you can use in your templates. `helper` takes 3 parameters, a tag name which you will use in your templates, a handler function and a default set of options. The handler function will be passed the page context (all the variables on the page) and then any arguments you pass from the template.

<code class="filename">acetate.conf.js</code>

```js
{% raw %}
acetate.helper('custom_helper', function helperHandler (context, param){
  // you can access the metadata from the current page in `context.page`
  // you can get your options in `context.options`
  return arg; // return the output of your helper
}, {
  option: ''
});{% endraw %}
```

You can now use your helper in your pages. You can override your default options with `option="value"` all other parameters are passed to your handler function directly.

<code class="filename">src/blog/index.html</code>

```html
{% raw %}{% custom_helper 'foo', option='bar' %}{% endraw %}
```

## Block Helpers

You can also create special helpers which can receive blocks of content by using the `acetate.block` function. ``block` takes 3 parameters, a tag name which you will use in your templates, a handler function and a default set of options. The handler function will be passed the page context (all the variables on the page) then the body of your block, and finally any arguments you pass from the template.

<code class="filename">acetate.conf.js</code>

```js
{% raw %}acetate.block('custom_block', function(context, body, param){
  return body;
}, {
  option: ''
});{% endraw %}
```

Now that your helper is registered you can use it in your templates.

<code class="filename">src/blog/index.html</code>

```html
{% raw %}{% custom_block 'foo' %}
I'm in a custom block!
{% endcustom_block %}{% endraw %}
```
