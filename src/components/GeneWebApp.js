'use strict'

import React from 'react'

require('normalize.css')

const run = require('../genes/main.js')

run()

const GeneWebApp = React.createClass({
  render: function () {
    return (
      <div className='main'>
        <p>open the js console...</p>
      </div>
    )
  }
})

React.render(<GeneWebApp />, document.getElementById('content')) // jshint ignore:line

module.exports = GeneWebApp
