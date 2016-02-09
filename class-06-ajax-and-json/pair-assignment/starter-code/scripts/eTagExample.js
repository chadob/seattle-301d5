Article.fetchAll = function() {
  if (localStorage.rawData) {
    $.ajax({
      type: 'HEAD',
      url: '/data/hackerIpsum.json',
      success: function(data, message, xhr) {
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Article.getAll();
        } else {
          Article.loadAll(JSON.parse(localStorage.rawData));
          articleView.initIndexPage();
        }
      }
    });
  } else {
  Article.getAll();
  }
};
