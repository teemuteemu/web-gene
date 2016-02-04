'use strict';

describe('GeneWebApp', function () {
  var React = require('react/addons');
  var GeneWebApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GeneWebApp = require('components/GeneWebApp.js');
    component = React.createElement(GeneWebApp);
  });

  it('should create a new instance of GeneWebApp', function () {
    expect(component).toBeDefined();
  });
});
