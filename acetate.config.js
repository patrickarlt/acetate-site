var _ = require('lodash');
var request = require('request');

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
      title: page.navTitle || page.title
    };
  }, function (nav, page) {
    let section = _.find(nav, {name: page.topic})

    if (section) {
      section.pages.push(page);
      section.pages = _.sortBy(section.pages, 'order');
    } else {
      nav.push({
        name: page.topic,
        pages: [ page ]
      });
    }

    return _.sortBy(nav, function (group) {
      var order = ['Basic', 'Advanced', 'Integrations', 'Modes', 'Misc.'];
      return order.indexOf(group.name);
    });
  }, []);
};
