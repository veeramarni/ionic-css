Package.describe({
  name: 'veeramarni:ionic-css',
  version: '1.2.4',
  // Brief, one-line summary of the package.
  summary: 'Ionic's CSS Framework in CSS and bundled for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/veeramarni/ionic-css.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('ionic/css/ionic.css', 'client');
  api.addAssets('ionic/fonts/ionicons.eot', 'client');
  api.addAssets('ionic/fonts/ionicons.svg', 'client');
  api.addAssets('ionic/fonts/ionicons.ttf', 'client');
  api.addAssets('ionic/fonts/ionicons.woff', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('veeramarni:ionic-css');
  api.addFiles('ionic/css/ionic.css', 'client');
  api.addAssets('ionic/fonts/ionic', 'client');
});
