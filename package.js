Package.describe({
  name: 'veeramarni:ionic-css',
  version: '1.2.4',
  summary: "Ionic's CSS Framework in CSS and bundled for Meteor.",
  git: 'https://github.com/veeramarni/ionic-css.git',
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
