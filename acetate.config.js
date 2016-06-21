var _ = require('lodash');

module.exports = function (acetate) {
  acetate.load('**/*.+(html|md)')
  acetate.layout('**/*.+(html|md)', 'layouts/_layout:main');
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');

  acetate.load('CNAME');
  acetate.layout('CNAME', false);

  acetate.metadata('documentation/**/*', {
    topic: 'Misc.'
  });

  acetate.query('documentation', 'documentation/*',function (page) {
    return {
      topic: page.topic,
      order: page.order,
      url: page.url,
      title: page.title,
      navTitle: page.navTitle
    };
  }, function (nav, page, index, navItems) {
    if (nav) {
      return nav;
    }

    return _(navItems).groupBy('topic').map(function (pages, topic) {
      return {
        name: topic,
        pages: _.orderBy(pages, ['order'], [true])
      };
    }).sortBy(function (group) {
      var order = ['Basic', 'Advanced', 'Integrations', 'Modes', 'Misc.'];
      return order.indexOf(group.name);
    }).value();
  }, false);
};
