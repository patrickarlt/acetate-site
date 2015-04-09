---
title: Collections
topic: Pages
---

Collections are a group of pages sorted on a particular key in their metadata. This is useful for any case where you might need a sequence of pages like a blog. To create a collection use the `acetate.collection` helper in your config file.

<code class="filename">acetate.conf.js</code>
```js
aceatae.collection('posts', 'blog/posts/*', {
  sortBy: 'date',
  ascending: false
});
```

The first parameter is a key that will be used as the variable name in your templates. The second is a glob used to match pages that should be in this collection. The final argument is an options object with can have `sortBy` which is the key in the apge metadata to sort the collection on and an `ascending` boolean that determines the sort order.

### Using a Collection

Once you collection is created you can use the collection in your templates. Each page in a collection will now have a local variable that matches the first parameter you passed to `aceatae.collection`.

<code class="filename">src/blog/posts/hello-world.html</code>
```html
{% raw %}---
title: My First Blog Post!
date: 08/24/14
---

<h1>My First Blog Post</h1>

Its my first blog post!

<nav>
  {% if posts.previous %}
    <a href="{{relativeUrl}}{{ posts.previous.url }}">{{ posts.previous.title }}</a>
  {% endif%}

  {% if posts.next %}
    <a href="{{relativeUrl}}{{ posts.next.url }}">{{ posts.next.title }}</a>
  {% endif %}
</nav>{% endraw %}
```

As you can see this page is part of the `posts` collection we defined and has a `posts` variable we can use in the template.

`posts` has 3 keys, `posts.next` will be a reference to the next page in the collection if any. `posts.previous` is the same thing but for the previous page in the collection. You can also use `posts.all` to access a sorted array of all pages in the collection.

```html
{% raw %}<h3>Recent Posts</h3>
<ul>
{% for post in posts.all.slice(0,5) %}
  <li><a href="{{post.relativeUrl}}{{post.url}}">{{post.title}}</a></li>
{% endfor %}
</ul>{% endraw %}
```

### Collections on Other Pages

If you want to use a collection on a page that is not in the collection you can load the collection by specifying it in the `collection` metadata.

<code class="filename">src/blog/all.html</code>
```html
{% raw %}---
title: Blog Archive
collections:
  posts: posts
---

<ul>
{% for post in posts.all %}
  <li><a href="{{post.relativeUrl}}{{post.url}}">{{post.title}}</a></li>
{% endfor %}
</ul>{% endraw %}
```

In this syntax `collections` is an object where the first key is the local variable for the template and its value is the collection you want to load.

YOu can also use the `metadata` helper in your config to add the collection metadata to a large number of pages at once.

<code class="filename">acetate.conf.js</code>
```
acetate.metadata('blog/*', {
  collections: {
    posts: 'posts'
  }
});
```