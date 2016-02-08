'use strict'

import React from 'react'

require('normalize.css')

const gene = require('../genes/main.js')

const solution = 'testing'
const populationSize = 100

gene.run(solution, populationSize)

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
