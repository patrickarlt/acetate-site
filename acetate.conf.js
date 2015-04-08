module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');

  acetate.source('CNAME');
  acetate.layout('CNAME', false);

  acetate.registerHelper('link', function(context, url, text){
    var className = context.url === url ? 'is-active' : 'not-active';
    var template = '<a href="{{relativeUrl}}" class="{{className}}">{{text}}</a>';
    var relativeUrl = context.relativePath + url;
    return acetate.nunjucks.renderString(template, {
      relativeUrl: relativeUrl,
      className: className,
      text: text
    });
  });

  acetate.registerHelper('docPageClass', function(context, url){
    var matcher = /documentation\/.+/;
    return (matcher.test(url)) ? 'is-active' : 'not-active';
  });

  acetate.registerBlock('callout', function(context, body, type){
    var template = '<div class="callout {{type}}"><p><h5>{{type}}</h5>{{body}}</p></div>';
    return acetate.nunjucks.renderString(template, {
      type: type,
      body: body
    });
  });

  acetate.nunjucks.addFilter('prettyJSON', function(str){
    return "<pre>" + JSON.stringify(JSON.parse(str),null, '  ') + "</pre>";
  });
};