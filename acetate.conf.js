module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');

  acetate.source('CNAME');
  acetate.layout('CNAME', false);
};