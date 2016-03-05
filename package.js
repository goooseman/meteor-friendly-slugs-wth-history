Package.describe({
  name: 'goooseman:friendly-slugs',
  version: '0.4.2',
  // Brief, one-line summary of the package.
  summary: 'Generate URL friendly slugs and store history of them.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/goooseman/meteor-friendly-slugs-wth-history.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['underscore','coffeescript', 'check','matb33:collection-hooks@0.7.6']);
  api.versionsFrom('1.0');
  api.addFiles('slugs.coffee');
});
