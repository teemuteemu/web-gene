'use strict'

// import Individual from './Individual.js'

const Individual = require('./Individual.js')

class Population {
  constructor (size, solution) {
    this.individuals = Array.from(Array(size).keys()).map((i) => { return new Individual(solution) })
  }

  getIndividual (index) {
    return this.individuals[index]
  }

  setIndividual (index, ind) {
    this.individuals[index] = ind
  }

  getRandomIndividual () {
    const rnd = Math.round(Math.random() * (this.individuals.length - 1))
    return this.individuals[rnd]
  }

  getFittest () {
    let fittest = this.individuals[0]

    this.individuals.forEach((individual) => {
      if (individual.getFitness() > fittest.getFitness()) {
        fittest = individual
      }
    })

    return fittest
  }

  size () {
    return this.individuals.length
  }
}

module.exports = Population
