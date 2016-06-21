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

  acetate.generate(function (pages, createPage, callback){
    request({
      url: 'https://api.github.com/repos/patrickarlt/acetate/contents/CHANGELOG.md',
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Acetate Web Site Build"
      },
      json: true
    }, function (error, response, body) {
      const contents = Buffer.from(body.content, 'base64').toString();

      const template = `
        {% markdown %}
          {% raw %}
            ${contents.replace('# Changelog', '')}
          {% endraw %}
        {% endmarkdown %}
      `;

      const changelogPage = createPage('changelog.html', template, {
        title: "Changelog",
        layout: "layouts/_documentation:content"
      });

      callback(error, [
        changelogPage
      ]);
    });
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
