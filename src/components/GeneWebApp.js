'use strict'

import React from 'react'

require('normalize.css')

import Algorithm from '../genes/Algorithm.js'

const solution = 'testing the awesome shit...'
const populationSize = Math.max(100, solution.length)

const algo = new Algorithm(populationSize, solution)

const run = () => {
  algo.step()
  if (!algo.optimum()) {
    console.log('-------------------------------------')
    console.log(`Generation: ${algo.generationCount}, fittest: ${algo.population.getFittest().getFitness()}`)
    console.log(`${algo.population.getFittest().toString()}`)
    setTimeout(run, 0)
  } else {
    console.log('=====================================')
    console.log('Found solution!')
    console.log(`Generation: ${algo.generationCount}, fittest: ${algo.population.getFittest().getFitness()}`)
    console.log(`${algo.population.getFittest().toString()}`)
  }
}

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
