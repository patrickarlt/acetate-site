---
title: Generating Pages
topic: Advanced
order: 70
---

Acetate has the capability to dynamically generate pages, you might find this useful if you need to create pages based on other pages, such as a index blog posts) or pages based on data, such as a page showing your popular GitHub projects.

`acetate.generator` is a configuration method that adds new pages to the site. `acetate.generator` takes a single argument which is a function that recives 3 arguments:

* `pages` - an array of all existing pages in the site. This is useful for generating pages that index other pages like a blog feed or archive page.
* `createPage(src, template, metdata)` - a function which will generate a new page object with a given `src` property, `template` and `metadata`.
* `createPage.fromTemplate(src, templatePath)` - a function that will create a new page with `src` from the file at `templatePath`. Any metadata in the file will be parsed and assigned to the page.
* `createPage.fromTemplateString(src, template)` - a function that will create a new page with `src` from a given template string. Any metadata in the `template` will be parsed and added the page.
* `done(error, newPages)` - a callback function that you should call with a `error` or with an array of `newPages`.


<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  acetate.generate(function generateNewPages (pages, createPage, done) {

    var page = createPage('newPage.html', 'template', {
      ignore: true
    });

    done(null, [
      page
    ]);
  });
};
```