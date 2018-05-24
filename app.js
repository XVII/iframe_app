(function() {

  return {

    events: {
      'app.created': 'init'
    },

    init: function(data) {
      this.switchTo('iframe', { src: this.setting('iframeURL'), height: this.setting('iframeHeight') });
    }

  };

}());
