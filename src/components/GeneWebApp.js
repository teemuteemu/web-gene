'use strict'

import React from 'react'

require('normalize.css')

const WebGene = require('../webgene/main.js')

const solution = 'testing'
const populationSize = 100

WebGene.run(solution, populationSize)

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
