---
title: External Data
topic: Pages
---

Acetate can include data from external JSON and YAML files or use load Node modules to query data dynamically at built time. To load data files place the `.json` `.yaml` `.yml` or `.js` files in your source folder. Then inside a data object provide a map of data files to local template variables.

```html
title: Loading Data
layout: _layout:main
data:
    projects: projects.json
    people: people.yaml
    status: status.js
---

<h1>I have data now!</h1>
```

The above metadata would assign the `projects.json` file to the local varaible `projects` (the key in the object) so you can access it in your templates.

## JSON

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
layout: _layout:main
data:
    company: company.json
---
{% raw %}
<h1>{{company.name}} {{title}}</h1>
<ul>
{% for employee in  company.employees %}
    <li>{{employee}} ({{age}})</li>
{% endfor %}
</ul>{% endraw %}
```


## YAML

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
layout: _layout:main
data:
    company: company.yaml
---
{% raw %}
<h1>{{company.name}} {{title}}</h1>
<ul>
{% for employee in  company.employees %}
    <li>{{employee}} ({{age}})</li>
{% endfor %}
</ul>{% endraw %}
```

## Dynamic Data

You can also create Node modules that can query their data dynamically at build time. This is great for things that need to come from external sources like an API or a database but don't need to be always up to date.

To load in dynamic data create a `.js` file in your source folder. This file should export a single function that will be passed a `callback` function and the metadata for the page that is requesting the data. When you are done retriving your data pass it to the callback like `callback(error, data)`.

<code class="filename">src/gist.js</code>

```js
var request = require('request');

module.exports = function(callback, page){
    request({
      method: 'GET',
      url: 'https://api.github.com/users/' + page.username + '/gists',
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, function(err, resp, body){
        callback(err, body);
    });
}
```

<code class="filename">src/gists.html</code>

```html
---
title: My Gists
layout: _layout:main
username: patrickarlt
data:
    gists: gists.js
---
{% raw %}
<h1>{{company.name}} {{title}}</h1>
<ul>
{% for gist in  gists %}
    <li><a href="{{gist.html_url">{{gist.description}}</a>)</li>
{% endfor %}
</ul>{% endraw %}
```