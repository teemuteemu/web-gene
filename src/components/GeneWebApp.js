'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import GeneInterfaceComponent from './GeneInterfaceComponent.js'

require('normalize.css')
require('styles/main.css')

class GeneWebApp extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className='main'>
        <GeneInterfaceComponent />
      </div>
    )
  }
}

ReactDOM.render(<GeneWebApp />, document.getElementById('content')) // jshint ignore:line

module.exports = GeneWebApp
