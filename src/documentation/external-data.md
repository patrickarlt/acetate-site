---
title: External Data
topic: Advanced
order: 30
---

Acetate can include data from external JSON and YAML files or you can define function to load data. To load data files place, `.json`, `.yaml` or `.yml` files in your source folder. In your config file you can then declare those files as data sources.

<code class="filename">acetate.config.js</code>

```js
acetate.data('projects', 'projects.json');
acetate.data('people', 'people.yaml');
acetate.data('status', function (callback) {
  // get data, via api request ect...
  // callback with an error if something goes wrong
  callback(error, data);
});
```

## Using Data in your Templates

Once you have defined your data sources you can access them in your pages under the `data` key.

```html
{% raw %}{{ data.projects }}
{{ data.people }}
{{ data.status }}{% endraw %}
```

## Data Types

Acetate supports JSON and YAML. The rest of these examples will use define data sources locally on the page for clarity.

### JSON

<code class="filename">acetate.config.js</code>

```js
acetate.data('company', 'company.json');
```

<code class="filename">src/company.json</code>

```json
{
    "name": "ACME Widgets",
    "employees": [{
        "name": "Bob",
        "age": 32
    },{
        "name": "Alice",
        "age": 28
    }]
}
```

<code class="filename">src/company.html</code>

```html
---
title: Employee Directory
---

{% raw %}
<h1>{{data.company.name}} - {{title}}</h1>
<ul>
{% for employee in data.company.employees %}
    <li>{{employee}} ({{age}})</li>
{% endfor %}
</ul>{% endraw %}
```


### YAML

<code class="filename">acetate.config.js</code>

```js
acetate.data('company', 'company.yaml');
```

<code class="filename">src/company.yaml</code>

```
name: ACME Widgets
employees:
    - name: Bob
      age: 32
    - name: Alice
      age: 28
```

<code class="filename">src/company.html</code>

```html
---
title: Employee Directory
---

{% raw %}
<h1>{{data.company.name}} {{title}}</h1>
<ul>
{% for employee in data.company.employees %}
    <li>{{employee}} ({{age}})</li>
{% endfor %}
</ul>{% endraw %}
```

### Dynamic Data

You can also use functions that query data dynamically at build time. This is great for things that need to come from external sources like an API or a database but don't need to be always up to date.

<code class="filename">acetate.config.js</code>

```js
var request = require('request');

module.exports = function (acetate) {
  acetate.data('gists', function(callback){
    request({
      method: 'GET',
      url: 'https://api.github.com/users/patrickarlt/gists',
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, function(err, resp, body){
      callback(err, body);
    });
  }
}
```

<code class="filename">src/gists.html</code>

```html
---
title: My Gists
---

{% raw %}
<ul>
{% for gist in data.gists %}
    <li><a href="{{gist.html_url">{{gist.description}}</a>)</li>
{% endfor %}
</ul>{% endraw %}
```
