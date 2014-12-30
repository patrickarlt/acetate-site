module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');

  acetate.page('guides/_index.html', 'guides', {
    groups: {
      guides: 'guides'
    }
  });

  acetate.group('guides','guides/*.md', {
    groupBy: 'section',
    groupTemplate: 'guides/_group.html',
    groupUrl: 'guides/{slug}'
  });

  acetate.layout('guides/**/*', 'guides/_layout:content');
};