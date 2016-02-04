'use strict'

import React from 'react'

require('normalize.css')

import Algorithm from '../genes/Algorithm.js'

const solution = 'sometimes short lines are slower'
const populationSize = solution.length

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
        <p>foo</p>
      </div>
    )
  }
})

React.render(<GeneWebApp />, document.getElementById('content')) // jshint ignore:line

module.exports = GeneWebApp
