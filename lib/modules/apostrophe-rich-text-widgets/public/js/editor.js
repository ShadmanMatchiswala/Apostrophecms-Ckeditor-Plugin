apos.define('apostrophe-rich-text-widgets-editor', {
    construct: function(self, options) {
      self.beforeCkeditorInline = function() {
        // The 'myplugin' name should match what you added in the previous step.
        // NOTE: Be sure to include `'split'` if you intend to use that feature.
        // This will become unnecessary in a future release.
        self.config.extraPlugins = ['sourcearea', 'split'];
      };
    }
  });