module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');
  acetate.source('CNAME');
  acetate.layout('CNAME', false);
};