'use strict';

describe('TestreactApp', function () {
  var React = require('react/addons');
  var TestreactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TestreactApp = require('components/TestreactApp.js');
    component = React.createElement(TestreactApp);
  });

  it('should create a new instance of TestreactApp', function () {
    expect(component).toBeDefined();
  });
});
