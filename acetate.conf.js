var _ = require('lodash');

module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');

  acetate.source('CNAME');
  acetate.layout('CNAME', false);

  acetate.helper('link', function (context, url, text) {
    var className = context.url === url ? 'is-active' : 'not-active';
    var template = '<a href="{{relativeUrl}}" class="{{className}}">{{text}}</a>';
    var relativeUrl = context.relativePath + url;
    return acetate.nunjucks.renderString(template, {
      relativeUrl: relativeUrl,
      className: className,
      text: text
    });
  });

  acetate.helper('docPageClass', function (context, url) {
    var matcher = /documentation\/.+/;
    return (matcher.test(url)) ? 'is-active' : 'not-active';
  });

  acetate.block('callout', function (context, body, type) {
    var template = '<div class="callout {{type | lower}}"><p><h5>{{type}}</h5>{{body}}</p></div>';
    return acetate.nunjucks.renderString(template, {
      type: type,
      body: body
    });
  });

  acetate.metadata('documentation/**/*', {
    topic: 'Misc.'
  });

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
