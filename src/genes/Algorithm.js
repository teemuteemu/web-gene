'use strict'

// import Population from './Population.js'
// import Individual from './Individual.js'

const Population = require('./Population.js')
const Individual = require('./Individual.js')

const uniformRate = 0.5
const mutationRate = 0.015

class Algorithm {
  constructor (populationSize, solution) {
    this.solution = solution
    this.population = new Population(populationSize, this.solution)
    this.maxFitness = solution.length
    this.generationCount = 0
  }

  optimum () {
    const fittestSolution = this.population.getFittest().getOutput()
    return fittestSolution.join('') === this.solution.join('')
  }

  step () {
    this.generationCount++
    this.population = this.evolvePopulation()
  }

  evolvePopulation () {
    const newPopulation = new Population(this.population.size(), this.solution)

    this.population.individuals.forEach((individual, i) => {
      const selected1 = this.tournament(this.population, this.solution)
      const selected2 = this.tournament(this.population, this.solution)

      const newIndividual = this.crossover(selected1, selected2)

      newPopulation.setIndividual(i, newIndividual)
    })

    newPopulation.individuals = newPopulation.individuals.map((individual) => {
      return this.mutate(individual)
    })

    return newPopulation
  }

  tournament (population) {
    const tournamentSize = Math.max(3, Math.floor(this.population.size() / 10))
    const tournamenPopulation = new Population(tournamentSize, this.solution)
    tournamenPopulation.individuals.forEach((individual, i) => {
      tournamenPopulation.setIndividual(i, this.population.getRandomIndividual())
    })

    return tournamenPopulation.getFittest()
  }

  crossover (ind1, ind2) {
    const newIndividual = new Individual(this.solution)

    newIndividual.genes.forEach((_gene, i) => {
      let gene

      if (Math.random() <= uniformRate) {
        gene = ind1.getGene(i)
      } else {
        gene = ind2.getGene(i)
      }
      newIndividual.setGene(i, gene)
    })

    return newIndividual
  }

  mutate (individual) {
    const rnd = Math.random()

    if (rnd <= 0.3) {
      individual.genes.unshift(individual.generateRandomGene())
    } else if (rnd > 0.3 && rnd <= 0.7) {
      individual.genes.push(individual.generateRandomGene())
    } else {
      individual.genes = individual.genes.map((gene, i) => {
        if (Math.random() <= mutationRate) {
          return individual.generateRandomGene()
        } else {
          return gene
        }
      })
    }

    return individual
  }
}

module.exports = Algorithm
